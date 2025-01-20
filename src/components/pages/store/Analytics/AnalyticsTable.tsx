"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

const data = [
  {
    metric: "Revenue",
    value: "$12,345",
    change: "+12.5%",
    trend: "up",
    timeFrame: "Last 30 days",
  },
  {
    metric: "Orders",
    value: "156",
    change: "+8.2%",
    trend: "up",
    timeFrame: "Last 30 days",
  },
  {
    metric: "Average Order Value",
    value: "$79.12",
    change: "+5.4%",
    trend: "up",
    timeFrame: "Last 30 days",
  },
  {
    metric: "Conversion Rate",
    value: "3.2%",
    change: "-2.1%",
    trend: "down",
    timeFrame: "Last 30 days",
  },
];

export function AnalyticsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Metric</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Time Frame</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.metric}>
            <TableCell className="font-medium">{row.metric}</TableCell>
            <TableCell>{row.value}</TableCell>
            <TableCell>
              <div className="flex items-center space-x-1">
                {row.trend === "up" ? (
                  <ArrowUpIcon className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 text-red-500" />
                )}
                <span
                  className={
                    row.trend === "up" ? "text-green-500" : "text-red-500"
                  }
                >
                  {row.change}
                </span>
              </div>
            </TableCell>
            <TableCell>{row.timeFrame}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
