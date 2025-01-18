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
import { EditTransferDialog } from "./EditTransferDialog";

const transfers = [
  {
    id: 1,
    number: "TR001",
    source: "Warehouse A",
    destination: "Store B",
    status: "In Progress",
    date: "2023-06-01",
  },
  {
    id: 2,
    number: "TR002",
    source: "Store C",
    destination: "Warehouse D",
    status: "Completed",
    date: "2023-06-02",
  },
  {
    id: 3,
    number: "TR003",
    source: "Warehouse B",
    destination: "Store A",
    status: "In Progress",
    date: "2023-06-03",
  },
];

export function TransferList() {
  return (
    <>
      <div className="hidden md:block">
        {" "}
        {/* Table view for larger screens */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transfer Number</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transfers.map((transfer) => (
              <TableRow key={transfer.id}>
                <TableCell>{transfer.number}</TableCell>
                <TableCell>{transfer.source}</TableCell>
                <TableCell>{transfer.destination}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transfer.status === "In Progress" ? "default" : "success"
                    }
                  >
                    {transfer.status}
                  </Badge>
                </TableCell>
                <TableCell>{transfer.date}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <EditTransferDialog transfer={transfer} />
                    <Button variant="secondary" size="sm">
                      View
                    </Button>
                    {transfer.status === "In Progress" && (
                      <Button variant="secondary" size="sm">
                        Mark as Completed
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
        {transfers.map((transfer) => (
          <Card key={transfer.id}>
            <CardContent className="p-4">
              <h3 className="font-bold">{transfer.number}</h3>
              <p className="text-sm">Source: {transfer.source}</p>
              <p className="text-sm">Destination: {transfer.destination}</p>
              <p className="text-sm">
                Status:
                <Badge
                  variant={
                    transfer.status === "In Progress" ? "default" : "success"
                  }
                  className="ml-2"
                >
                  {transfer.status}
                </Badge>
              </p>
              <p className="text-sm">Date: {transfer.date}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <EditTransferDialog transfer={transfer} />
                <Button variant="secondary" size="sm">
                  View
                </Button>
                {transfer.status === "In Progress" && (
                  <Button variant="secondary" size="sm">
                    Mark as Completed
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
