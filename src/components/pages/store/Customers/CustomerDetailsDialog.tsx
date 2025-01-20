import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatCurrency } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CustomerDetailsDialogProps {
  customer: {
    id: number;
    name: string;
    email: string;
    phone: string;
    totalOrders: number;
    lifetimeSpend: number;
    lastPurchase: string;
    tags: string[];
    status: string;
  };
}

export function CustomerDetailsDialog({
  customer,
}: CustomerDetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Customer Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>{customer.name}</CardTitle>
              <CardDescription>{customer.email}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm">{customer.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Status</p>
                  <Badge variant="outline">{customer.status}</Badge>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm font-medium">Total Orders</p>
                  <p className="text-sm">{customer.totalOrders}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Lifetime Spend</p>
                  <p className="text-sm">
                    {formatCurrency(customer.lifetimeSpend)}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Last Purchase</p>
                <p className="text-sm">{formatDate(customer.lastPurchase)}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Tags</p>
                <div className="flex gap-1 flex-wrap mt-1">
                  {customer.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}
