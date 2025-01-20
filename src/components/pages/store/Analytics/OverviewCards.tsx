"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const metrics = [
  {
    title: "Total Sales",
    value: "$12,345",
    change: "+12.5%",
    trend: "up",
    timeFrame: "vs last 30 days",
  },
  {
    title: "Orders",
    value: "156",
    change: "+8.2%",
    trend: "up",
    timeFrame: "vs last 30 days",
  },
  {
    title: "Conversion Rate",
    value: "3.2%",
    change: "-2.1%",
    trend: "down",
    timeFrame: "vs last 30 days",
  },
  {
    title: "Average Order Value",
    value: "$79.12",
    change: "+5.4%",
    trend: "up",
    timeFrame: "vs last 30 days",
  },
];

export function OverviewCards() {
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
