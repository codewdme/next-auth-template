"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateOrderForm } from "./CreateOrderForm";
import { EditOrderForm } from "./EditOrderForm";
import { ViewOrderDialog } from "./ViewOrderDialog";

const draftOrders = [
  {
    id: 1,
    number: "DO001",
    customer: "John Doe",
    date: "2023-06-01",
    total: "$150.00",
    status: "Pending",
  },
  {
    id: 2,
    number: "DO002",
    customer: "Jane Smith",
    date: "2023-06-02",
    total: "$200.00",
    status: "Completed",
  },
  {
    id: 3,
    number: "DO003",
    customer: "Bob Johnson",
    date: "2023-06-03",
    total: "$100.00",
    status: "Pending",
  },
];

export default function DraftOrdersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Draft Orders</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Order</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Order</DialogTitle>
              <DialogDescription>
                Fill in the details to create a new draft order.
              </DialogDescription>
            </DialogHeader>
            <CreateOrderForm />
          </DialogContent>
        </Dialog>
      </div>
      <p className="text-gray-600 mb-8">
        Manage draft orders and invoices created manually.
      </p>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search orders..."
          className="max-w-sm"
        />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order Number</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {draftOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.number}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.total}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="mr-2">
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Order {order.number}</DialogTitle>
                      <DialogDescription>
                        Make changes to the order details.
                      </DialogDescription>
                    </DialogHeader>
                    <EditOrderForm order={order} />
                  </DialogContent>
                </Dialog>
                <ViewOrderDialog order={order} />
                <Button variant="outline" size="sm" className="ml-2">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4">
        <Button variant="outline" asChild>
          <Link href="/orders">Back to Orders</Link>
        </Button>
      </div>
    </div>
  );
}
