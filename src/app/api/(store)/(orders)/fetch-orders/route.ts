import db from "@/lib/db/db";
import { Order } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const orders: Order[] = await db.order.findMany({
      include: {
        shippingAddress: true, // Includes related shipping address (similar to LEFT JOIN)
        customer: true, // Includes related customer (similar to LEFT JOIN)
      },
    });

    return NextResponse.json(
      { message: "Successfully fetched all orders", data: orders },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create order", error: error },
      { status: 500 }
    );
  }
}
