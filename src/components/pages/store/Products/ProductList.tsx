"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { Card, CardContent } from "@/components/ui/card";
import { EditProductDialog } from "./EditProductDialog";
import { ViewProductDialog } from "./ViewProductDialog";

const products = [
  {
    id: 1,
    name: "Product 1",
    sku: "SKU001",
    price: 19.99,
    stock: 100,
    status: "Active",
    vendor: "Vendor A",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: 2,
    name: "Product 2",
    sku: "SKU002",
    price: 29.99,
    stock: 50,
    status: "Active",
    vendor: "Vendor B",
    images: ["/placeholder.svg"],
  },
  {
    id: 3,
    name: "Product 3",
    sku: "SKU003",
    price: 39.99,
    stock: 75,
    status: "Archived",
    vendor: "Vendor C",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
];

export function ProductList() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleBulkAction = (action: "delete" | "archive") => {
    // Implement bulk action logic here
    console.log(`Bulk ${action} for products:`, selectedProducts);
  };

  return (
    <>
      {selectedProducts.length > 0 && (
        <div className="mb-4 flex flex-col sm:flex-row justify-end gap-2">
          <Button
            variant="destructive"
            onClick={() => handleBulkAction("delete")}
            className="w-full sm:w-auto"
          >
            Delete Selected
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleBulkAction("archive")}
            className="w-full sm:w-auto"
          >
            Archive Selected
          </Button>
        </div>
      )}
      <div className="hidden md:block">
        {" "}
        {/* Table view for larger screens */}
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">
                <Checkbox
                  checked={selectedProducts.length === products.length}
                  onCheckedChange={(checked) => {
                    setSelectedProducts(
                      checked ? products.map((p) => p.id) : []
                    );
                  }}
                />
              </th>
              <th className="text-left p-2">Image</th>
              <th className="text-left p-2">Product Name</th>
              <th className="text-left p-2">SKU</th>
              <th className="text-left p-2">Price</th>
              <th className="text-left p-2">Stock</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Vendor</th>
              <th className="text-left p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="p-2">
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={() => toggleProductSelection(product.id)}
                  />
                </td>
                <td className="p-2">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                </td>
                <td className="p-2">{product.name}</td>
                <td className="p-2">{product.sku}</td>
                <td className="p-2">${product.price.toFixed(2)}</td>
                <td className="p-2">{product.stock}</td>
                <td className="p-2">{product.status}</td>
                <td className="p-2">{product.vendor}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <EditProductDialog product={product} />
                    <ViewProductDialog product={product} />
                    <Button variant="ghost" size="sm">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden space-y-4">
        {" "}
        {/* Card view for smaller screens */}
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Checkbox
                  checked={selectedProducts.includes(product.id)}
                  onCheckedChange={() => toggleProductSelection(product.id)}
                />
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500">SKU: {product.sku}</p>
              <p className="text-sm">Price: ${product.price.toFixed(2)}</p>
              <p className="text-sm">Stock: {product.stock}</p>
              <p className="text-sm">Status: {product.status}</p>
              <p className="text-sm">Vendor: {product.vendor}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <EditProductDialog product={product} />
                <ViewProductDialog product={product} />
                <Button variant="ghost" size="sm">
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
