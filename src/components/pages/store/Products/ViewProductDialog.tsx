"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  status: string;
  vendor: string;
  images: string[];
  description?: string;
}

interface ViewProductDialogProps {
  product: Product;
}

export function ViewProductDialog({ product }: ViewProductDialogProps) {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px] w-[95vw] max-h-[90vh] overflow-y-auto mx-auto">
        <DialogHeader>
          <DialogTitle>View Product</DialogTitle>
          <DialogDescription>
            Product details for {product.name}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <Image
              src={product.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
              width={250}
              height={250}
              className="rounded-md object-cover w-full"
            />
            {product.images.length > 1 && (
              <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                <Button onClick={prevImage} size="sm" variant="ghost">
                  &lt;
                </Button>
                <Button onClick={nextImage} size="sm" variant="ghost">
                  &gt;
                </Button>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {product.name}
            </p>
            <p>
              <strong>SKU:</strong> {product.sku}
            </p>
            <p>
              <strong>Price:</strong> ${product.price.toFixed(2)}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
            <p>
              <strong>Status:</strong> {product.status}
            </p>
            <p>
              <strong>Vendor:</strong> {product.vendor}
            </p>
            {product.description && (
              <p>
                <strong>Description:</strong> {product.description}
              </p>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
