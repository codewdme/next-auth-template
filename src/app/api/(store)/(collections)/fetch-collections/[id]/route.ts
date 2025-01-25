import db from "@/lib/db/db";
import { Collection } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const collection: Collection | null = await db.collection.findUnique({
      where: { id },
    });
    if (!collection) {
      return NextResponse.json(
        { message: "Collection not found", data: null },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Collection fetched", data: collection },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch collection", error: error },
      { status: 500 }
    );
  }
}
