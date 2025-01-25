import db from "@/lib/db/db";
import { ShippingAddress } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const shippingAddress: ShippingAddress = data.address;
  try {
    const newshippingAddress = await db.shippingAddress.create({
      data: shippingAddress,
    });
    return NextResponse.json(
      { message: "New Shipping Address added!", data: newshippingAddress },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add Shipping Address", error: error },
      { status: 500 }
    );
  }
}
