import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true
    }
  });
  return NextResponse.json(data, { status: 200 });
}
