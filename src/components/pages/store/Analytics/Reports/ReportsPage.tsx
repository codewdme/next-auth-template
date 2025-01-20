"use client";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateReportDialog } from "./CreateReportDialog";
import { ReportsList } from "./ReportsList";

export default function ReportsPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Reports</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Create and manage custom reports
          </p>
        </div>
        <div className="flex gap-2">
          <CreateReportDialog />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input placeholder="Search reports..." className="sm:max-w-[300px]" />
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Report type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="inventory">Inventory</SelectItem>
            <SelectItem value="customer">Customer</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <ReportsList />
    </div>
  );
}
