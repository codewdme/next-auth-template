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
import { Pencil } from "lucide-react";
import { useState } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  updateDiscount,
  type Discount,
} from "@/lib/redux/slices/discountsSlice";
import { notifications } from "@/components/ui/notifications";

interface EditDiscountDialogProps {
  discount: Discount;
}

export function EditDiscountDialog({ discount }: EditDiscountDialogProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedDiscount = {
      ...discount,
      name: formData.get("name") as string,
      code: formData.get("code") as string,
      type: formData.get("type") as string,
      value: formData.get("value") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      usageLimit: parseInt(formData.get("usageLimit") as string),
      minimumOrderValue: parseFloat(
        formData.get("minimumOrderValue") as string
      ),
      applyTo: formData.get("applyTo") as string,
      description: formData.get("description") as string,
    };

    dispatch(updateDiscount(updatedDiscount));
    notifications.success("Discount updated successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 px-2 lg:px-3">
          <Pencil className="h-4 w-4 lg:mr-2" />
          <span className="hidden lg:inline">Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            Edit Discount
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
                defaultValue={discount.name}
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
                defaultValue={discount.code}
                className="w-full font-mono uppercase"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="text-sm font-medium">Discount Type</Label>
                <Select name="type" defaultValue={discount.type} required>
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
                  defaultValue={discount.value}
                  required
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="startDate" className="text-sm font-medium">
                Start Date
              </Label>
              <Input
                id="startDate"
                name="startDate"
                type="date"
                defaultValue={discount.startDate}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="endDate" className="text-sm font-medium">
                End Date
              </Label>
              <Input
                id="endDate"
                name="endDate"
                type="date"
                defaultValue={discount.endDate}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="usageLimit" className="text-sm font-medium">
                Usage Limit
              </Label>
              <Input
                id="usageLimit"
                name="usageLimit"
                type="number"
                defaultValue={discount.usageLimit}
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
                step="0.01"
                defaultValue={discount.minimumOrderValue}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-medium">Apply To</Label>
              <Select name="applyTo" defaultValue={discount.applyTo}>
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
                defaultValue={discount.description}
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
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
