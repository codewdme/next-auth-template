"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SegmentsList } from "./SegmentsList";
import { CreateSegmentDialog } from "./CreateSegmentDialog";

export default function SegmentsPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Customer Segments</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Create and manage customer segments based on behavior and attributes
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <CreateSegmentDialog />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search segments..."
            className="sm:max-w-[300px]"
          />
        </div>
      </div>

      <SegmentsList />
    </div>
  );
}
