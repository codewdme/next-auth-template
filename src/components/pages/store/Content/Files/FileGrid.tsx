"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FileDetailsDialog } from "./FileDetailsDialog";

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

export function FileGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {files.map((file) => (
        <Card key={file.id}>
          <CardContent className="p-4">
            <div className="aspect-square mb-2 bg-muted rounded-lg flex items-center justify-center">
              {file.type.startsWith("image/") ? (
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="text-4xl">📄</div>
              )}
            </div>
            <div className="space-y-1">
              <p className="font-medium truncate" title={file.name}>
                {file.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <FileDetailsDialog file={file} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
