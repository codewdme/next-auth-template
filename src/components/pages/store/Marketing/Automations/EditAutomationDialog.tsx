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
  updateAutomation,
  type Automation,
} from "@/lib/redux/slices/automationsSlice";
import { notifications } from "@/components/ui/notifications";

interface EditAutomationDialogProps {
  automation: Automation;
}

export function EditAutomationDialog({
  automation,
}: EditAutomationDialogProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedAutomation = {
      ...automation,
      name: formData.get("name") as string,
      triggerType: formData.get("triggerType") as string,
      audience: formData.get("audience") as string,
      delay: parseInt(formData.get("delay") as string),
      content: formData.get("content") as string,
    };

    dispatch(updateAutomation(updatedAutomation));
    notifications.success("Automation updated successfully");
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
            Edit Automation
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
                defaultValue={automation.name}
                className="w-full"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-medium">Trigger Type</Label>
              <Select
                name="triggerType"
                defaultValue={automation.triggerType}
                required
              >
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
              <Select name="audience" defaultValue={automation.audience}>
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
                defaultValue={automation.delay}
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
                defaultValue={automation.content}
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
