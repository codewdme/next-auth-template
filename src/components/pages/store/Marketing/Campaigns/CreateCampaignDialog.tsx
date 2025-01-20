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
import { addCampaign } from "@/lib/redux/slices/campaignsSlice";
import { notifications } from "@/components/ui/notifications";
import { v4 as uuidv4 } from "uuid";

export function CreateCampaignDialog() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newCampaign = {
      id: uuidv4(),
      name: formData.get("name") as string,
      type: formData.get("type") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      status: "draft",
      clicks: 0,
      conversions: 0,
      roi: "0%",
      audience: formData.get("audience") as string,
      budget: parseFloat(formData.get("budget") as string),
      content: formData.get("content") as string,
    };

    dispatch(addCampaign(newCampaign));
    notifications.success("Campaign created successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] w-[95vw] sm:w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            Create New Campaign
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-6 py-4">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Campaign Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter campaign name"
                className="w-full"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label className="text-sm font-medium">Campaign Type</Label>
              <Select name="type" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select campaign type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="sms">SMS</SelectItem>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="ads">Ads</SelectItem>
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

            <div className="grid gap-2">
              <Label htmlFor="budget" className="text-sm font-medium">
                Budget
              </Label>
              <Input
                id="budget"
                name="budget"
                type="number"
                placeholder="Enter campaign budget"
                min="0"
                step="0.01"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="content" className="text-sm font-medium">
                Campaign Content
              </Label>
              <Textarea
                id="content"
                name="content"
                placeholder="Enter campaign content or message"
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
              Create Campaign
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
