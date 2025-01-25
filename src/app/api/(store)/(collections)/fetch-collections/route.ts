import db from "@/lib/db/db";
import { Collection } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const collections: Collection[] = await db.collection.findMany();
    return NextResponse.json(
      { message: "Collections fetched", data: collections },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch collections", error: error },
      { status: 500 }
    );
  }
}
