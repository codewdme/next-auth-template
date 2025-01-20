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
import { FileDetailsDialog } from "./FileDetailsDialog";
import { formatDate } from "@/lib/utils";

const files = [
  {
    id: 1,
    name: "product-1.jpg",
    type: "image/jpeg",
    size: 1024000,
    url: "/images/product-1.jpg",
    uploadDate: "2024-03-10",
    tags: ["products", "featured"],
  },
  {
    id: 2,
    name: "catalog.pdf",
    type: "application/pdf",
    size: 2048000,
    url: "/documents/catalog.pdf",
    uploadDate: "2024-03-09",
    tags: ["documents", "catalog"],
  },
];

export function FileList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Upload Date</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {files.map((file) => (
          <TableRow key={file.id}>
            <TableCell className="font-medium">{file.name}</TableCell>
            <TableCell>{file.type}</TableCell>
            <TableCell>{(file.size / 1024 / 1024).toFixed(2)} MB</TableCell>
            <TableCell>{formatDate(file.uploadDate)}</TableCell>
            <TableCell>
              <div className="flex gap-1 flex-wrap">
                {file.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <FileDetailsDialog file={file} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
