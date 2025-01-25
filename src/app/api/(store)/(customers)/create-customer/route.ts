import db from "@/lib/db/db";
import { Customer } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const customer: Customer = data.customer;
  try {
    const newCustomer = await db.customer.create({
      data: customer,
    });
    return NextResponse.json(
      { message: "Customer created", data: newCustomer },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create order", error: error },
      { status: 500 }
    );
  }
}
