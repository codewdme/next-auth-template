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
import { EditMenuDialog } from "./EditMenuDialog";

const menus = [
  {
    id: 1,
    name: "Main Navigation",
    items: [
      { id: 1, name: "Home", type: "link", url: "/" },
      { id: 2, name: "Products", type: "link", url: "/products" },
      { id: 3, name: "About", type: "link", url: "/about" },
    ],
    status: "published",
    lastModified: "2024-03-10",
  },
  {
    id: 2,
    name: "Footer Links",
    items: [
      { id: 4, name: "Terms", type: "link", url: "/terms" },
      { id: 5, name: "Privacy", type: "link", url: "/privacy" },
    ],
    status: "draft",
    lastModified: "2024-03-09",
  },
];

export function MenusList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Menu Name</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Modified</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {menus.map((menu) => (
          <TableRow key={menu.id}>
            <TableCell className="font-medium">{menu.name}</TableCell>
            <TableCell>{menu.items.length} items</TableCell>
            <TableCell>
              <Badge
                variant={menu.status === "published" ? "default" : "secondary"}
              >
                {menu.status}
              </Badge>
            </TableCell>
            <TableCell>{formatDate(menu.lastModified)}</TableCell>
            <TableCell className="space-x-2">
              <EditMenuDialog menu={menu} />
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
