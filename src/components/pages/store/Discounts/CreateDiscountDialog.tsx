"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";
import { addDiscount } from "@/lib/redux/slices/discountsSlice";
import { notifications } from "@/components/ui/notifications";
import { v4 as uuidv4 } from "uuid";

export function CreateDiscountDialog() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newDiscount = {
      id: uuidv4(),
      name: formData.get("name") as string,
      code: formData.get("code") as string,
      type: formData.get("type") as string,
      value: formData.get("value") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      usageLimit: parseInt(formData.get("usageLimit") as string),
      usageCount: 0,
      status: "active",
      minimumOrderValue: parseFloat(
        formData.get("minimumOrderValue") as string
      ),
      customerEligibility: ["all"],
      applyTo: formData.get("applyTo") as string,
      description: formData.get("description") as string,
    };

    dispatch(addDiscount(newDiscount));
    notifications.success("Discount created successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Create Discount
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            Create New Discount
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-6 py-4">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Discount Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter discount name"
                className="w-full"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="code" className="text-sm font-medium">
                Discount Code
              </Label>
              <Input
                id="code"
                name="code"
                placeholder="Enter discount code"
                className="w-full font-mono uppercase"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="text-sm font-medium">Discount Type</Label>
                <Select name="type" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="fixed">Fixed Amount</SelectItem>
                    <SelectItem value="bogo">Buy One Get One</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="value" className="text-sm font-medium">
                  Discount Value
                </Label>
                <Input
                  id="value"
                  name="value"
                  placeholder="e.g., 20% or $50"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="text-sm font-medium">Start Date</Label>
                <Input type="date" name="startDate" required />
              </div>
              <div className="grid gap-2">
                <Label className="text-sm font-medium">End Date</Label>
                <Input type="date" name="endDate" required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="usageLimit" className="text-sm font-medium">
                  Usage Limit
                </Label>
                <Input
                  id="usageLimit"
                  name="usageLimit"
                  type="number"
                  min="1"
                  placeholder="Enter usage limit"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label
                  htmlFor="minimumOrderValue"
                  className="text-sm font-medium"
                >
                  Minimum Order Value
                </Label>
                <Input
                  id="minimumOrderValue"
                  name="minimumOrderValue"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter minimum order value"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-medium">Apply To</Label>
              <Select name="applyTo" defaultValue="cart">
                <SelectTrigger>
                  <SelectValue placeholder="Select where to apply" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cart">Entire Cart</SelectItem>
                  <SelectItem value="products">Specific Products</SelectItem>
                  <SelectItem value="categories">Product Categories</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter discount description"
                className="min-h-[100px]"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button type="submit" className="w-full sm:w-auto">
              Create Discount
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
