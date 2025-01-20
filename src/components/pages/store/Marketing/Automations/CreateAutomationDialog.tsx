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
import { addAutomation } from "@/lib/redux/slices/automationsSlice";
import { notifications } from "@/components/ui/notifications";
import { v4 as uuidv4 } from "uuid";

export function CreateAutomationDialog() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newAutomation = {
      id: uuidv4(),
      name: formData.get("name") as string,
      triggerType: formData.get("triggerType") as string,
      status: "active",
      triggered: 0,
      completed: 0,
      audience: formData.get("audience") as string,
      delay: parseInt(formData.get("delay") as string),
      content: formData.get("content") as string,
    };

    dispatch(addAutomation(newAutomation));
    notifications.success("Automation created successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Create Automation
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            Create New Automation
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-6 py-4">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Automation Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter automation name"
                className="w-full"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-medium">Trigger Type</Label>
              <Select name="triggerType" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select trigger type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="abandoned_cart">Abandoned Cart</SelectItem>
                  <SelectItem value="welcome">Welcome Series</SelectItem>
                  <SelectItem value="post_purchase">Post Purchase</SelectItem>
                  <SelectItem value="birthday">Birthday</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-medium">Target Audience</Label>
              <Select name="audience">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select target audience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Customers</SelectItem>
                  <SelectItem value="new">New Customers</SelectItem>
                  <SelectItem value="returning">Returning Customers</SelectItem>
                  <SelectItem value="vip">VIP Customers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="delay" className="text-sm font-medium">
                Delay (hours)
              </Label>
              <Input
                id="delay"
                name="delay"
                type="number"
                placeholder="Enter delay in hours"
                min="0"
                step="1"
                className="w-full"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content" className="text-sm font-medium">
                Message Content
              </Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Enter message content"
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
              Create Automation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
