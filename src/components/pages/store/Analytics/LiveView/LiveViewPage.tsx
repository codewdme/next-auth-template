"use client";

import { Button } from "@/components/ui/button";

import { RefreshCw } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LiveMetrics } from "./LiveMetrics";
import { LiveActivityFeed } from "./LiveActivityFeed";
import { LivePerformanceGraph } from "./LivePerformanceGraph";
import { LiveVisitorsTable } from "./LiveVisitorsTable";

export default function LiveViewPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Live View</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Real-time store activity and visitor insights
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="1h">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Past Hour</SelectItem>
              <SelectItem value="24h">Past 24 Hours</SelectItem>
              <SelectItem value="7d">Past 7 Days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <LiveMetrics />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Activity Feed</h2>
            <LiveActivityFeed />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Performance</h2>
            <LivePerformanceGraph />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Active Visitors</h2>
          <LiveVisitorsTable />
        </div>
      </div>
    </div>
  );
}
