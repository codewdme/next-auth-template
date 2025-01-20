"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CustomersList } from "./CustomersList";
import { AddCustomerDialog } from "./AddCustomerDialog";

export default function CustomersPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Customers</h1>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
          <AddCustomerDialog />
        </div>
      </div>

      <div className="mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            placeholder="Search customers..."
            className="sm:max-w-[300px]"
          />
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <CustomersList />
    </div>
  );
}
