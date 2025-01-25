import db from "@/lib/db/db";
import { Customer } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const customers: Customer[] = await db.customer.findMany();
    return NextResponse.json(
      { message: "Customers fetched", data: customers },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch Customers", error: error },
      { status: 500 }
    );
  }
}
