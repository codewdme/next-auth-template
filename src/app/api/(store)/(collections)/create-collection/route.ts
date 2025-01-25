import db from "@/lib/db/db";
import { Collection } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const collection: Collection = data;
  try {
    const newCollection = await db.collection.create({
      data: collection,
    });
    return NextResponse.json(
      { message: "Collection created", data: newCollection },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to create collection: ${collection.name}`,
        error: error,
      },
      { status: 500 }
    );
  }
}
