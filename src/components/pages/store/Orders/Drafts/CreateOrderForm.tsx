import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateOrderForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="customer">Customer Name</Label>
        <Input id="customer" placeholder="Enter customer name" />
      </div>
      <div>
        <Label htmlFor="total">Total Amount</Label>
        <Input id="total" placeholder="Enter total amount" type="number" />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Input id="status" placeholder="Enter status" />
      </div>
      <Button type="submit">Create Order</Button>
    </form>
  );
}
