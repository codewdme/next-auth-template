import db from "@/lib/db/db";
import { Order } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const data = await req.json();
  console.log(data);
  const order: Order = data;
  try {
    const orderExists = await db.order.findUnique({
      where: { id: order.id },
    });
    if (!orderExists) {
      return NextResponse.json(
        { message: "Order not found", data: null },
        { status: 404 }
      );
    }
    const updatedorder = await db.order.update({
      where: { id: order.id },
      data: order,
    });
    return NextResponse.json(
      {
        message: "order information updated!",
        data: updatedorder,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: `Failed to update order information for : ${order.id}`,
        error: error,
      },
      { status: 500 }
    );
  }
}
