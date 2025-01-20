"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const metrics = [
  {
    title: "Current Visitors",
    value: "124",
    change: "+12",
    trend: "up",
    timeFrame: "vs last hour",
  },
  {
    title: "Active Sessions",
    value: "89",
    change: "+8",
    trend: "up",
    timeFrame: "vs last hour",
  },
  {
    title: "Pages Viewed",
    value: "456",
    change: "-23",
    trend: "down",
    timeFrame: "vs last hour",
  },
  {
    title: "Recent Orders",
    value: "12",
    change: "+3",
    trend: "up",
    timeFrame: "vs last hour",
  },
];

export function LiveMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center space-x-1 text-sm">
              {metric.trend === "up" ? (
                <ArrowUpIcon className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDownIcon className="h-4 w-4 text-red-500" />
              )}
              <span
                className={
                  metric.trend === "up" ? "text-green-500" : "text-red-500"
                }
              >
                {metric.change}
              </span>
              <span className="text-muted-foreground">{metric.timeFrame}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
