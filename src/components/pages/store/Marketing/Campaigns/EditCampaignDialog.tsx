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
  updateCampaign,
  type Campaign,
} from "@/lib/redux/slices/(yet to configure)/campaignsSlice";
import { notifications } from "@/components/ui/notifications";

interface EditCampaignDialogProps {
  campaign: Campaign;
}

export function EditCampaignDialog({ campaign }: EditCampaignDialogProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedCampaign = {
      ...campaign,
      name: formData.get("name") as string,
      type: formData.get("type") as string,
      startDate: formData.get("startDate") as string,
      endDate: formData.get("endDate") as string,
      audience: formData.get("audience") as string,
      budget: parseFloat(formData.get("budget") as string),
      content: formData.get("content") as string,
    };

    dispatch(updateCampaign(updatedCampaign));
    notifications.success("Campaign updated successfully");
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
            Edit Campaign
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
                defaultValue={campaign.name}
                className="w-full"
                required
              />
            </div>
            {/* ... other form fields ... */}
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
