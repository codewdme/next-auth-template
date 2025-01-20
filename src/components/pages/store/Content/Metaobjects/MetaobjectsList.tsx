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
import { Button } from "@/components/ui/button";

import { formatDate } from "@/lib/utils";
import { EditMetaobjectDialog } from "./EditMetaobjectDialog";

const metaobjects = [
  {
    id: 1,
    name: "Summer Sale Banner",
    type: "banner",
    status: "published",
    lastUpdated: "2024-03-10",
    fields: {
      title: "Summer Sale 2024",
      description: "Get up to 50% off",
      image: "/banners/summer-sale.jpg",
    },
  },
  {
    id: 2,
    name: "Customer Review - John",
    type: "testimonial",
    status: "draft",
    lastUpdated: "2024-03-09",
    fields: {
      author: "John Doe",
      rating: 5,
      text: "Great service and products!",
    },
  },
];

export function MetaobjectsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {metaobjects.map((metaobject) => (
          <TableRow key={metaobject.id}>
            <TableCell className="font-medium">{metaobject.name}</TableCell>
            <TableCell>
              <Badge variant="outline">{metaobject.type}</Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  metaobject.status === "published"
                    ? "default"
                    : metaobject.status === "draft"
                    ? "secondary"
                    : "outline"
                }
              >
                {metaobject.status}
              </Badge>
            </TableCell>
            <TableCell>{formatDate(metaobject.lastUpdated)}</TableCell>
            <TableCell className="space-x-2">
              <EditMetaobjectDialog metaobject={metaobject} />
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
