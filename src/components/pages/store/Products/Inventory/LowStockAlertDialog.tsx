"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface LowStockAlertDialogProps {
  productId: number;
  productName: string;
  currentThreshold: number;
}

export function LowStockAlertDialog({
  productId,
  productName,
  currentThreshold,
}: LowStockAlertDialogProps) {
  const [threshold, setThreshold] = useState(currentThreshold.toString());

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Add logic to save threshold for specific product
    console.log(`Updating threshold for product ${productId} to ${threshold}`);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Set Alert
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Set Low Stock Alert for {productName}</DialogTitle>
          <DialogDescription>
            Set the threshold for low stock notifications for this product.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="threshold" className="text-right">
                Threshold
              </Label>
              <Input
                id="threshold"
                type="number"
                min="0"
                value={threshold}
                onChange={(e) => setThreshold(e.target.value)}
                className="col-span-3"
                placeholder="Enter quantity"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
