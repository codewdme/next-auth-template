"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DateRangePicker } from "@/components/pages/store/Analytics/DateRangePicker";

export function CampaignFilters() {
  return (
    <div className="space-y-4 sm:space-y-0">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search campaigns..."
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
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="ended">Ended</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Campaign Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="sms">SMS</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="ads">Ads</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full sm:w-auto">
        <DateRangePicker />
      </div>
    </div>
  );
}
