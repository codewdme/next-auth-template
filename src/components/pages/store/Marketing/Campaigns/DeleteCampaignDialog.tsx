"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useAppDispatch } from "@/lib/redux/hooks";
import {
  deleteCampaign,
  type Campaign,
} from "@/lib/redux/slices/campaignsSlice";
import { notifications } from "@/components/ui/notifications";

interface DeleteCampaignDialogProps {
  campaign: Campaign;
}

export function DeleteCampaignDialog({ campaign }: DeleteCampaignDialogProps) {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteCampaign(campaign.id));
    notifications.success("Campaign deleted successfully");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 px-2 lg:px-3">
          <Trash2 className="h-4 w-4 lg:mr-2" />
          <span className="hidden lg:inline">Delete</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Delete Campaign</DialogTitle>
          <DialogDescription className="text-base pt-2">
            Are you sure you want to delete the campaign &quot;{campaign.name}
            &quot;? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-2 mt-4">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="w-full sm:w-auto"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            className="w-full sm:w-auto"
          >
            Delete Campaign
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
