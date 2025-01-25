import db from "@/lib/db/db";
import { Product } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const product: Product = data.product;
  try {
    const newProduct: Product = await db.product.create({
      data: product,
    });
    return NextResponse.json(
      { message: "Product created", data: newProduct },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create order", error: error },
      { status: 500 }
    );
  }
}
