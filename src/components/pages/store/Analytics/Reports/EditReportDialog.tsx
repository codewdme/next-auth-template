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
import { Checkbox } from "@/components/ui/checkbox";
import { DateRangePicker } from "../DateRangePicker";
import { useState } from "react";

interface EditReportDialogProps {
  report: {
    id: number;
    name: string;
    type: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}

export function EditReportDialog({ report }: EditReportDialogProps) {
  const [open, setOpen] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add report update logic here
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Report</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Report Name</Label>
              <Input
                id="name"
                defaultValue={report.name}
                placeholder="Enter report name"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="type">Report Type</Label>
              <Select defaultValue={report.type}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                  <SelectItem value="customer">Customer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                defaultValue={report.description}
                placeholder="Enter report description"
              />
            </div>

            <div className="grid gap-2">
              <Label>Time Frame</Label>
              <DateRangePicker />
            </div>

            <div className="grid gap-2">
              <Label>Metrics</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="revenue" defaultChecked />
                  <Label htmlFor="revenue">Revenue</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="orders" defaultChecked />
                  <Label htmlFor="orders">Orders</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="customers" />
                  <Label htmlFor="customers">Customers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="conversion" />
                  <Label htmlFor="conversion">Conversion Rate</Label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
