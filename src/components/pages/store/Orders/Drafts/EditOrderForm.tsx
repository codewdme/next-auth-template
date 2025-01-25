"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Order } from "@prisma/client";
import axios from "axios";
import { FormEvent, useState } from "react";

export function EditOrderForm({ orderData }: { orderData: Order }) {
  const [order, setOrder] = useState<Order>(orderData);

  const updateOrder = async () => {
    try {
      const response = await axios.put("/api/update-order", order);
      if (response.status === 200) {
        alert("Order updated successfully!");
      }
    } catch (error) {
      alert("Failed to update order. Please try again.");
      console.error(error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Call the async updateOrder function
    await updateOrder();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="customer">Customer Name</Label>
        <Input id="customer" defaultValue={order.customer.name} />
      </div>
      <div>
        <Label htmlFor="total">Total Amount</Label>
        <Input id="total" defaultValue={order.totalAmount} type="number" />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Input
          id="status"
          defaultValue={order.status}
          type="text"
          onChange={(e) => {
            setOrder({
              ...order,
              status: "DELIVERED",
            });
          }}
        />
      </div>
      <Button type="submit">Update Order</Button>
    </form>
  );
}
