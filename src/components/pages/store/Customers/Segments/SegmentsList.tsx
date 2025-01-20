"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditSegmentDialog } from "./EditSegmentDialog";

const segments = [
  {
    id: 1,
    name: "VIP Customers",
    conditions: "Lifetime spend > $1000",
    totalMembers: 150,
    averageSpend: 1500,
    lastUpdated: "2024-03-10",
  },
  {
    id: 2,
    name: "Recent Buyers",
    conditions: "Purchase in last 30 days",
    totalMembers: 320,
    averageSpend: 750,
    lastUpdated: "2024-03-09",
  },
];

export function SegmentsList() {
  return (
    <>
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Segment Name</TableHead>
              <TableHead>Conditions</TableHead>
              <TableHead>Total Members</TableHead>
              <TableHead>Average Spend</TableHead>
              <TableHead>Last Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {segments.map((segment) => (
              <TableRow key={segment.id}>
                <TableCell className="font-medium">{segment.name}</TableCell>
                <TableCell>{segment.conditions}</TableCell>
                <TableCell>{segment.totalMembers}</TableCell>
                <TableCell>${segment.averageSpend}</TableCell>
                <TableCell>{segment.lastUpdated}</TableCell>
                <TableCell className="space-x-2">
                  <EditSegmentDialog segment={segment} />
                  <Button variant="outline" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="md:hidden space-y-4">
        {segments.map((segment) => (
          <Card key={segment.id}>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold">{segment.name}</h3>
                  <div className="space-x-2">
                    <EditSegmentDialog segment={segment} />
                    <Button variant="outline" size="sm">
                      Delete
                    </Button>
                  </div>
                </div>
                <p className="text-sm">{segment.conditions}</p>
                <div className="flex justify-between text-sm">
                  <span>Members: {segment.totalMembers}</span>
                  <span>${segment.averageSpend} avg</span>
                </div>
                <p className="text-sm">Updated: {segment.lastUpdated}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
