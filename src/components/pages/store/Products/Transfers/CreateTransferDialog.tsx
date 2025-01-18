"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function CreateTransferDialog() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Transfer</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Transfer</DialogTitle>
          <DialogDescription>
            {`Enter the details for the new transfer. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="source">Source Location</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select source location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="warehouseA">Warehouse A</SelectItem>
                <SelectItem value="warehouseB">Warehouse B</SelectItem>
                <SelectItem value="storeA">Store A</SelectItem>
                <SelectItem value="storeB">Store B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="destination">Destination Location</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select destination location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="warehouseA">Warehouse A</SelectItem>
                <SelectItem value="warehouseB">Warehouse B</SelectItem>
                <SelectItem value="storeA">Store A</SelectItem>
                <SelectItem value="storeB">Store B</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="transferDate">Transfer Date</Label>
            <Input id="transferDate" type="date" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="products">Products</Label>
            <Textarea
              id="products"
              placeholder="Enter product details (name, quantity)"
              required
            />
          </div>
          <Button type="submit">Create Transfer</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
