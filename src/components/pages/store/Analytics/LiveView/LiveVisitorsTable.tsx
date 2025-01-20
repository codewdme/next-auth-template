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
import { formatDistanceToNow } from "date-fns";

const visitors = [
  {
    id: "v1",
    location: "New York, USA",
    device: "Desktop - Chrome",
    currentPage: "/products/blue-t-shirt",
    timeSpent: new Date(Date.now() - 15 * 60 * 1000),
    status: "active",
  },
  {
    id: "v2",
    location: "London, UK",
    device: "Mobile - Safari",
    currentPage: "/cart",
    timeSpent: new Date(Date.now() - 5 * 60 * 1000),
    status: "active",
  },
  {
    id: "v3",
    location: "Toronto, Canada",
    device: "Tablet - Firefox",
    currentPage: "/checkout",
    timeSpent: new Date(Date.now() - 2 * 60 * 1000),
    status: "active",
  },
];

export function LiveVisitorsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Location</TableHead>
          <TableHead>Device</TableHead>
          <TableHead>Current Page</TableHead>
          <TableHead>Time Spent</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {visitors.map((visitor) => (
          <TableRow key={visitor.id}>
            <TableCell>{visitor.location}</TableCell>
            <TableCell>{visitor.device}</TableCell>
            <TableCell className="max-w-[200px] truncate">
              {visitor.currentPage}
            </TableCell>
            <TableCell>
              {formatDistanceToNow(visitor.timeSpent, { addSuffix: true })}
            </TableCell>
            <TableCell>
              <Badge
                variant={visitor.status === "active" ? "default" : "secondary"}
              >
                {visitor.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
