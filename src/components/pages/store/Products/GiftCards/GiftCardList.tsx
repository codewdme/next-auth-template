"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { EditGiftCardDialog } from "./EditGiftCardDialog";
import { Card, CardContent } from "@/components/ui/card";

const giftCards = [
  {
    id: 1,
    code: "GC001",
    value: 50,
    remainingBalance: 50,
    issueDate: "2023-06-01",
    expiryDate: "2024-06-01",
    status: "Active",
  },
  {
    id: 2,
    code: "GC002",
    value: 100,
    remainingBalance: 75,
    issueDate: "2023-06-02",
    expiryDate: "2024-06-02",
    status: "Active",
  },
  {
    id: 3,
    code: "GC003",
    value: 200,
    remainingBalance: 0,
    issueDate: "2023-06-03",
    expiryDate: "2024-06-03",
    status: "Redeemed",
  },
];

export function GiftCardList() {
  return (
    <>
      <div className="hidden md:block">
        {" "}
        {/* Table view for larger screens */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Gift Card Code</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Remaining Balance</TableHead>
              <TableHead>Issue Date</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {giftCards.map((giftCard) => (
              <TableRow key={giftCard.id}>
                <TableCell>{giftCard.code}</TableCell>
                <TableCell>${giftCard.value.toFixed(2)}</TableCell>
                <TableCell>${giftCard.remainingBalance.toFixed(2)}</TableCell>
                <TableCell>{giftCard.issueDate}</TableCell>
                <TableCell>{giftCard.expiryDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      giftCard.status === "Active" ? "success" : "secondary"
                    }
                  >
                    {giftCard.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <EditGiftCardDialog giftCard={giftCard} />
                    <Button variant="secondary" size="sm">
                      View
                    </Button>
                    {giftCard.status === "Active" && (
                      <Button variant="secondary" size="sm">
                        Void
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden space-y-4">
        {" "}
        {/* Card view for smaller screens */}
        {giftCards.map((giftCard) => (
          <Card key={giftCard.id}>
            <CardContent className="p-4">
              <h3 className="font-bold">{giftCard.code}</h3>
              <p className="text-sm">Value: ${giftCard.value.toFixed(2)}</p>
              <p className="text-sm">
                Remaining: ${giftCard.remainingBalance.toFixed(2)}
              </p>
              <p className="text-sm">Issued: {giftCard.issueDate}</p>
              <p className="text-sm">Expires: {giftCard.expiryDate}</p>
              <p className="text-sm">
                Status:
                <Badge
                  variant={
                    giftCard.status === "Active" ? "success" : "secondary"
                  }
                  className="ml-2"
                >
                  {giftCard.status}
                </Badge>
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <EditGiftCardDialog giftCard={giftCard} />
                <Button variant="secondary" size="sm">
                  View
                </Button>
                {giftCard.status === "Active" && (
                  <Button variant="secondary" size="sm">
                    Void
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
