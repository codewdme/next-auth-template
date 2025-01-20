"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { EditReportDialog } from "./EditReportDialog";

const reports = [
  {
    id: 1,
    name: "Monthly Sales Summary",
    type: "sales",
    description: "Overview of sales performance and trends",
    createdAt: "2024-03-01",
    updatedAt: "2024-03-10",
  },
  {
    id: 2,
    name: "Customer Retention Analysis",
    type: "customer",
    description: "Analysis of customer retention metrics",
    createdAt: "2024-03-05",
    updatedAt: "2024-03-05",
  },
];

export function ReportsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Report Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell className="font-medium">{report.name}</TableCell>
            <TableCell>
              <Badge variant="outline">{report.type}</Badge>
            </TableCell>
            <TableCell>{report.description}</TableCell>
            <TableCell>{formatDate(report.createdAt)}</TableCell>
            <TableCell>{formatDate(report.updatedAt)}</TableCell>
            <TableCell className="space-x-2">
              <Button variant="outline" size="sm">
                View
              </Button>
              <EditReportDialog report={report} />
              <Button variant="outline" size="sm">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
