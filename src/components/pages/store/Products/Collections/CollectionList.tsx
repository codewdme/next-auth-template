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

import { Card, CardContent } from "@/components/ui/card";
import { EditCollectionDialog } from "./EditCollectionDialog";

const collections = [
  {
    id: 1,
    name: "Summer Collection",
    productCount: 15,
    visibility: "Public",
    createdDate: "2023-06-01",
  },
  {
    id: 2,
    name: "Winter Collection",
    productCount: 20,
    visibility: "Private",
    createdDate: "2023-06-02",
  },
  {
    id: 3,
    name: "Spring Collection",
    productCount: 10,
    visibility: "Public",
    createdDate: "2023-06-03",
  },
];

export function CollectionList() {
  return (
    <>
      <div className="hidden md:block">
        {" "}
        {/* Table view for larger screens */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Collection Name</TableHead>
              <TableHead>Number of Products</TableHead>
              <TableHead>Visibility</TableHead>
              <TableHead>Created Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {collections.map((collection) => (
              <TableRow key={collection.id}>
                <TableCell>{collection.name}</TableCell>
                <TableCell>{collection.productCount}</TableCell>
                <TableCell>{collection.visibility}</TableCell>
                <TableCell>{collection.createdDate}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <EditCollectionDialog collection={collection} />
                    <Button variant="secondary" size="sm">
                      View
                    </Button>
                    <Button variant="secondary" size="sm">
                      Delete
                    </Button>
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
        {collections.map((collection) => (
          <Card key={collection.id}>
            <CardContent className="p-4">
              <h3 className="font-bold">{collection.name}</h3>
              <p className="text-sm">Products: {collection.productCount}</p>
              <p className="text-sm">Visibility: {collection.visibility}</p>
              <p className="text-sm">Created: {collection.createdDate}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <EditCollectionDialog collection={collection} />
                <Button variant="secondary" size="sm">
                  View
                </Button>
                <Button variant="secondary" size="sm">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
