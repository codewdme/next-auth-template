import db from "@/lib/db/db";
import { OrderItem } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { customerId, items, totalAmount, shippingAddressId } = data.order;

    const orderCreated = await db.order.create({
      data: {
        customerId,
        totalAmount,
        status: "PENDING",
        paymentId: null,
        shippingAddressId,
        items: {
          create: items.map((item: OrderItem) => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            totalPrice: item.totalPrice,
          })),
        },
      },
      include: { items: true },
    });

    return NextResponse.json(
      {
        message: `Successfully created order ${orderCreated.id}`,
        data: orderCreated,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create order", error: error },
      { status: 500 }
    );
  }
}
