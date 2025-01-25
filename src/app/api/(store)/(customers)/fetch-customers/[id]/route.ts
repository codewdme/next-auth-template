import db from "@/lib/db/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const customer = await db.customer.findUnique({
      where: { id },
    });
    if (!customer) {
      return NextResponse.json(
        { message: "Customer not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Customer fetched", data: customer },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch customer data", error: error },
      { status: 500 }
    );
  }
}
