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

const inventory = [
  {
    id: 1,
    name: "Product 1",
    sku: "SKU001",
    stockLevel: 100,
    lowStockAlert: 20,
    incomingStock: 50,
    location: "Warehouse A",
  },
  {
    id: 2,
    name: "Product 2",
    sku: "SKU002",
    stockLevel: 15,
    lowStockAlert: 25,
    incomingStock: 100,
    location: "Store B",
  },
  {
    id: 3,
    name: "Product 3",
    sku: "SKU003",
    stockLevel: 50,
    lowStockAlert: 30,
    incomingStock: 0,
    location: "Warehouse A",
  },
];

export function InventoryList() {
  return (
    <>
      <div className="hidden md:block">
        {" "}
        {/* Table view for larger screens */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Name</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Stock Level</TableHead>
              <TableHead>Low Stock Alert</TableHead>
              <TableHead>Incoming Stock</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.sku}</TableCell>
                <TableCell>{item.stockLevel}</TableCell>
                <TableCell>{item.lowStockAlert}</TableCell>
                <TableCell>{item.incomingStock}</TableCell>
                <TableCell>{item.location}</TableCell>
                <TableCell>
                  {item.stockLevel <= item.lowStockAlert ? (
                    <Badge variant="destructive">Low Stock</Badge>
                  ) : (
                    <Badge variant="secondary">In Stock</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="md:hidden space-y-4">
        {" "}
        {/* Card view for smaller screens */}
        {inventory.map((item) => (
          <Card key={item.id}>
            <CardContent className="p-4">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm">SKU: {item.sku}</p>
              <p className="text-sm">Stock: {item.stockLevel}</p>
              <p className="text-sm">Low Stock Alert: {item.lowStockAlert}</p>
              <p className="text-sm">Incoming: {item.incomingStock}</p>
              <p className="text-sm">Location: {item.location}</p>
              <div className="mt-2">
                {item.stockLevel <= item.lowStockAlert ? (
                  <Badge variant="destructive">Low Stock</Badge>
                ) : (
                  <Badge variant="secondary">In Stock</Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
