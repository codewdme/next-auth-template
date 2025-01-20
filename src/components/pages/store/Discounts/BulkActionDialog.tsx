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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { notifications } from "@/components/ui/notifications";
import { AlertTriangle } from "lucide-react";

interface BulkActionDialogProps {
  selectedCount: number;
  onAction: (action: string) => void;
}

export function BulkActionDialog({
  selectedCount,
  onAction,
}: BulkActionDialogProps) {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string>("");

  const handleAction = () => {
    if (!selectedAction) {
      notifications.error("Please select an action");
      return;
    }

    onAction(selectedAction);
    notifications.success(
      `Bulk action "${selectedAction}" completed successfully`
    );
    setOpen(false);
  };

  const getActionDescription = () => {
    switch (selectedAction) {
      case "activate":
        return "activate";
      case "deactivate":
        return "deactivate";
      case "delete":
        return "permanently delete";
      default:
        return "update";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={selectedCount === 0}>
          Bulk Actions ({selectedCount})
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bulk Action</DialogTitle>
          <DialogDescription>
            Select an action to apply to {selectedCount} selected discount
            {selectedCount !== 1 ? "s" : ""}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Select value={selectedAction} onValueChange={setSelectedAction}>
              <SelectTrigger>
                <SelectValue placeholder="Select action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="activate">Activate Discounts</SelectItem>
                <SelectItem value="deactivate">Deactivate Discounts</SelectItem>
                <SelectItem value="delete">Delete Discounts</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {selectedAction === "delete" && (
            <div className="flex items-center gap-2 p-3 text-sm border rounded-md bg-destructive/10 text-destructive">
              <AlertTriangle className="h-4 w-4" />
              <p>This action cannot be undone.</p>
            </div>
          )}

          {selectedAction && (
            <div className="text-sm text-muted-foreground">
              You are about to {getActionDescription()} {selectedCount} selected
              discount{selectedCount !== 1 ? "s" : ""}.
            </div>
          )}
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            variant={selectedAction === "delete" ? "destructive" : "default"}
            onClick={handleAction}
            disabled={!selectedAction}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
