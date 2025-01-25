import db from "@/lib/db/db";
import { Order } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const customerId = data.customerId;
  try {
    const orders: Order[] = await db.order.findMany({
      where: { customerId: customerId as string },
    });
    return NextResponse.json(
      { message: "orders fetched", data: orders },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch order", error: error },
      { status: 500 }
    );
  }
}
