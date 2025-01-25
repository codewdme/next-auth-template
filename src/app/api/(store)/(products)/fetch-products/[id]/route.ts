import db from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const product = await db.product.findUnique({
      where: { id: id as string },
    });
    return NextResponse.json(
      { message: "Product fetched", data: product },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch product", error: error },
      { status: 500 }
    );
  }
}
