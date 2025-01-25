import db from "@/lib/db/db";
import { Collection } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const collection: Collection = data;
  try {
    const collectionExists = await db.collection.findUnique({
      where: { id: collection.id },
    });
    if (!collectionExists) {
      return NextResponse.json(
        { message: "Collection not found", data: null },
        { status: 404 }
      );
    }
    const updatedCollection = await db.collection.update({
      where: { id: collection.id },
      data: collection,
    });
    return NextResponse.json(
      { message: "Collection updated", data: updatedCollection },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Failed to update collection: ${collection.name}`,
        error: error,
      },
      { status: 500 }
    );
  }
}
