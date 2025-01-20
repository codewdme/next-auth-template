"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileGrid } from "./FileGrid";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadFileDialog } from "./UploadFileDialog";
import { FileList } from "./FileList";

export default function FilesPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Files</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your media files and documents
          </p>
        </div>
        <div className="flex gap-2">
          <UploadFileDialog />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input placeholder="Search files..." className="sm:max-w-[300px]" />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="File type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Files</SelectItem>
            <SelectItem value="images">Images</SelectItem>
            <SelectItem value="documents">Documents</SelectItem>
            <SelectItem value="videos">Videos</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            onClick={() => setViewMode("list")}
          >
            List
          </Button>
        </div>
      </div>

      {viewMode === "grid" ? <FileGrid /> : <FileList />}
    </div>
  );
}
