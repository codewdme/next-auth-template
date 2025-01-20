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
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { useState } from "react";

interface FileDetailsDialogProps {
  file: {
    id: number;
    name: string;
    type: string;
    size: number;
    url: string;
    uploadDate: string;
    tags: string[];
  };
}

export function FileDetailsDialog({ file }: FileDetailsDialogProps) {
  const [open, setOpen] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(file.url);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>File Details</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4">
          {file.type.startsWith("image/") && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img
                src={file.url}
                alt={file.name}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          <div className="grid gap-2">
            <div>
              <Label>File Name</Label>
              <Input value={file.name} readOnly />
            </div>

            <div>
              <Label>File URL</Label>
              <div className="flex gap-2">
                <Input value={file.url} readOnly />
                <Button onClick={copyToClipboard}>Copy</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Type</Label>
                <p className="text-sm">{file.type}</p>
              </div>
              <div>
                <Label>Size</Label>
                <p className="text-sm">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <div>
              <Label>Upload Date</Label>
              <p className="text-sm">{formatDate(file.uploadDate)}</p>
            </div>

            <div>
              <Label>Tags</Label>
              <div className="flex gap-1 flex-wrap mt-1">
                {file.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => window.open(file.url, "_blank")}
            >
              Download
            </Button>
            <Button variant="destructive">Delete File</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
