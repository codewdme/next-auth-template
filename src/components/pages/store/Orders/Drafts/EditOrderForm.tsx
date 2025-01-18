import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EditOrderFormProps {
  order: {
    customer: string;
    total: string;
    status: string;
  };
}

export function EditOrderForm({ order }: EditOrderFormProps) {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="customer">Customer Name</Label>
        <Input id="customer" defaultValue={order.customer} />
      </div>
      <div>
        <Label htmlFor="total">Total Amount</Label>
        <Input
          id="total"
          defaultValue={order.total.replace("$", "")}
          type="number"
        />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Input id="status" defaultValue={order.status} />
      </div>
      <Button type="submit">Update Order</Button>
    </form>
  );
}
