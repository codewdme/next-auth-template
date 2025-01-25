import db from "@/lib/db/db";
import { Customer } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const customer: Customer = data;
  try {
    const customerExists = await db.customer.findUnique({
      where: { id: customer.id },
    });
    if (!customerExists) {
      return NextResponse.json(
        { message: "Customer not found", data: null },
        { status: 404 }
      );
    }
    const updatedCustomer = await db.customer.update({
      where: { id: customer.id },
      data: customer,
    });
    return NextResponse.json(
      {
        message: "Customer information updated!",
        data: updatedCustomer,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to update customer information for : ${customer.name}`,
        error: error,
      },
      { status: 500 }
    );
  }
}
