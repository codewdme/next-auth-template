"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { EditDiscountDialog } from "./EditDiscountDialog";
import { DeleteDiscountDialog } from "./DeleteDiscountDialog";
import { useAppSelector } from "@/lib/redux/hooks";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

interface DiscountsListProps {
  selectedDiscounts: string[];
  onSelectedDiscountsChange: (discounts: string[]) => void;
}

export function DiscountsList({
  selectedDiscounts,
  onSelectedDiscountsChange,
}: DiscountsListProps) {
  const discounts = useAppSelector((state) => state.discounts.discounts);

  // Mobile view card component
  const DiscountCard = ({ discount }: { discount: any }) => (
    <Card className="p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="font-medium">{discount.name}</div>
          <div className="text-sm font-mono text-muted-foreground">
            {discount.code}
          </div>
        </div>
        <Badge
          variant={
            discount.status === "active"
              ? "default"
              : discount.status === "scheduled"
              ? "secondary"
              : "outline"
          }
        >
          {discount.status}
        </Badge>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-muted-foreground">Type</div>
          <div className="capitalize">{discount.type}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Value</div>
          <div>{discount.value}</div>
        </div>
        <div>
          <div className="text-muted-foreground">Usage</div>
          <div>
            {discount.usageCount} / {discount.usageLimit}
          </div>
        </div>
        <div>
          <div className="text-muted-foreground">Valid Until</div>
          <div>{formatDate(discount.endDate)}</div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <EditDiscountDialog discount={discount} />
        <DeleteDiscountDialog discount={discount} />
      </div>
    </Card>
  );

  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedDiscounts.length === discounts.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onSelectedDiscountsChange(discounts.map((d) => d.id));
                    } else {
                      onSelectedDiscountsChange([]);
                    }
                  }}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Usage</TableHead>
              <TableHead>Valid Until</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {discounts.map((discount) => (
              <TableRow key={discount.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedDiscounts.includes(discount.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        onSelectedDiscountsChange([
                          ...selectedDiscounts,
                          discount.id,
                        ]);
                      } else {
                        onSelectedDiscountsChange(
                          selectedDiscounts.filter((id) => id !== discount.id)
                        );
                      }
                    }}
                  />
                </TableCell>
                <TableCell>{discount.name}</TableCell>
                <TableCell className="font-mono">{discount.code}</TableCell>
                <TableCell className="capitalize">{discount.type}</TableCell>
                <TableCell>{discount.value}</TableCell>
                <TableCell>
                  {discount.usageCount} / {discount.usageLimit}
                </TableCell>
                <TableCell>{formatDate(discount.endDate)}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      discount.status === "active"
                        ? "default"
                        : discount.status === "scheduled"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {discount.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <EditDiscountDialog discount={discount} />
                  <DeleteDiscountDialog discount={discount} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-4">
        {discounts.map((discount) => (
          <DiscountCard key={discount.id} discount={discount} />
        ))}
      </div>
    </>
  );
}
