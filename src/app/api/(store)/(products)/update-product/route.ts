import db from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const { product } = await req.json();
  console.log(product);

  try {
    const productExists = await db.product.findUnique({
      where: { id: product.id },
    });
    if (!productExists) {
      return NextResponse.json(
        {
          message: "Product not found",
          error: "Product not found",
        },
        { status: 404 }
      );
    }
    const updatedProduct = await db.product.update({
      where: { id: product.id },
      data: product,
    });
    return NextResponse.json(
      { message: "Product updated", data: updatedProduct },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update product", error: error },
      { status: 500 }
    );
  }
}
