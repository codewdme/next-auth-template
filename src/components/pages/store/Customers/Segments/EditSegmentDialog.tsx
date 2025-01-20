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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface Segment {
  id: number;
  name: string;
  conditions: string;
  totalMembers: number;
  averageSpend: number;
  lastUpdated: string;
}

interface EditSegmentDialogProps {
  segment: Segment;
}

export function EditSegmentDialog({ segment }: EditSegmentDialogProps) {
  const [open, setOpen] = useState(false);
  const [conditions, setConditions] = useState([
    { field: "", operator: "", value: "" },
  ]);

  const addCondition = () => {
    setConditions([...conditions, { field: "", operator: "", value: "" }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add segment update logic here
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Segment: {segment.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Segment Name</Label>
            <Input id="name" defaultValue={segment.name} required />
          </div>

          <div className="space-y-4">
            <Label>Conditions</Label>
            {conditions.map((condition, index) => (
              <div key={index} className="grid grid-cols-3 gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lifetimeSpend">
                      Lifetime Spend
                    </SelectItem>
                    <SelectItem value="orderCount">Order Count</SelectItem>
                    <SelectItem value="lastPurchase">Last Purchase</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select operator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="greaterThan">Greater than</SelectItem>
                    <SelectItem value="lessThan">Less than</SelectItem>
                    <SelectItem value="equals">Equals</SelectItem>
                  </SelectContent>
                </Select>

                <Input placeholder="Enter value" />
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addCondition}>
              Add Condition
            </Button>
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
