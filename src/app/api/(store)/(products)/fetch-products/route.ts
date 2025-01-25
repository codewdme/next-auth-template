import db from "@/lib/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await db.product.findMany();
    return NextResponse.json(
      { message: "Products fetched", data: products },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch products", error: error },
      { status: 500 }
    );
  }
}
