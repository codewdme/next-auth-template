import db from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const order = await db.order.findUnique({
      where: { id: id as string },
    });
    return NextResponse.json(
      { message: "order fetched", data: order },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch order", error: error },
      { status: 500 }
    );
  }
}
