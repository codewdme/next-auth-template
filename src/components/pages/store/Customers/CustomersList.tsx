"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate, formatCurrency } from "@/lib/utils";
import { CustomerDetailsDialog } from "./CustomerDetailsDialog";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    totalOrders: 15,
    lifetimeSpend: 2500,
    lastPurchase: "2024-03-10",
    tags: ["VIP", "Repeat Buyer"],
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1987654321",
    totalOrders: 5,
    lifetimeSpend: 800,
    lastPurchase: "2024-02-15",
    tags: ["First-Time Buyer"],
    status: "active",
  },
  // Add more customer data as needed
];

export function CustomersList() {
  return (
    <>
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Lifetime Spend</TableHead>
              <TableHead>Last Purchase</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">{customer.name}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>{customer.totalOrders}</TableCell>
                <TableCell>{formatCurrency(customer.lifetimeSpend)}</TableCell>
                <TableCell>{formatDate(customer.lastPurchase)}</TableCell>
                <TableCell>
                  <div className="flex gap-1 flex-wrap">
                    {customer.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <CustomerDetailsDialog customer={customer} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden space-y-4">
        {customers.map((customer) => (
          <Card key={customer.id}>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold">{customer.name}</h3>
                  <CustomerDetailsDialog customer={customer} />
                </div>
                <p className="text-sm">{customer.email}</p>
                <p className="text-sm">{customer.phone}</p>
                <div className="flex justify-between text-sm">
                  <span>Orders: {customer.totalOrders}</span>
                  <span>{formatCurrency(customer.lifetimeSpend)}</span>
                </div>
                <p className="text-sm">
                  Last Purchase: {formatDate(customer.lastPurchase)}
                </p>
                <div className="flex gap-1 flex-wrap">
                  {customer.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
