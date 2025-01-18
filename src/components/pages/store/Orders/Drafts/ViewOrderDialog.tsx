import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ViewOrderDialogProps {
  order: {
    number: string;
    customer: string;
    date: string;
    total: string;
    status: string;
  };
}

export function ViewOrderDialog({ order }: ViewOrderDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order Details: {order.number}</DialogTitle>
          <DialogDescription>View the details of this order.</DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <p>
            <strong>Customer:</strong> {order.customer}
          </p>
          <p>
            <strong>Date:</strong> {order.date}
          </p>
          <p>
            <strong>Total Amount:</strong> {order.total}
          </p>
          <p>
            <strong>Status:</strong> {order.status}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
