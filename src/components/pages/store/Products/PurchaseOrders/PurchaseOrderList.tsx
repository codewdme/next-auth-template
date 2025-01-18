"use client";

import { Button } from "@/components/ui/button";
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
import { EditPurchaseOrderDialog } from "./EditPurchaseOrderDialog";

const purchaseOrders = [
  {
    id: 1,
    number: "PO001",
    supplier: "Supplier A",
    status: "Pending",
    orderDate: "2023-06-01",
    totalCost: "$1000.00",
  },
  {
    id: 2,
    number: "PO002",
    supplier: "Supplier B",
    status: "Received",
    orderDate: "2023-06-02",
    totalCost: "$1500.00",
  },
  {
    id: 3,
    number: "PO003",
    supplier: "Supplier C",
    status: "Cancelled",
    orderDate: "2023-06-03",
    totalCost: "$500.00",
  },
];

export function PurchaseOrderList() {
  return (
    <>
      <div className="hidden md:block">
        {" "}
        {/* Table view for larger screens */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Purchase Order Number</TableHead>
              <TableHead>Supplier</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Total Cost</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchaseOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.number}</TableCell>
                <TableCell>{order.supplier}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.status === "Pending"
                        ? "default"
                        : order.status === "Received"
                        ? "success"
                        : "destructive"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{order.totalCost}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <EditPurchaseOrderDialog order={order} />
                    <Button variant="secondary" size="sm">
                      View
                    </Button>
                    {order.status === "Pending" && (
                      <Button variant="secondary" size="sm">
                        Mark as Received
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden space-y-4">
        {" "}
        {/* Card view for smaller screens */}
        {purchaseOrders.map((order) => (
          <Card key={order.id}>
            <CardContent className="p-4">
              <h3 className="font-bold">{order.number}</h3>
              <p className="text-sm">Supplier: {order.supplier}</p>
              <p className="text-sm">
                Status:
                <Badge
                  variant={
                    order.status === "Pending"
                      ? "default"
                      : order.status === "Received"
                      ? "success"
                      : "destructive"
                  }
                  className="ml-2"
                >
                  {order.status}
                </Badge>
              </p>
              <p className="text-sm">Order Date: {order.orderDate}</p>
              <p className="text-sm">Total Cost: {order.totalCost}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <EditPurchaseOrderDialog order={order} />
                <Button variant="secondary" size="sm">
                  View
                </Button>
                {order.status === "Pending" && (
                  <Button variant="secondary" size="sm">
                    Mark as Received
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
