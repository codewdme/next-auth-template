"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AutomationFilters() {
  return (
    <div className="space-y-4 sm:space-y-0">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search automations..."
          className="w-full sm:w-[200px]"
        />
        <div className="grid grid-cols-2 sm:flex gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="paused">Paused</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Trigger Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="abandoned_cart">Abandoned Cart</SelectItem>
              <SelectItem value="welcome">Welcome Series</SelectItem>
              <SelectItem value="post_purchase">Post Purchase</SelectItem>
              <SelectItem value="birthday">Birthday</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
