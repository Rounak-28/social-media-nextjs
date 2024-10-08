export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prisma.post.findMany({
    where: {
      parentPostId: null,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
      likedBy: false,
      _count: {
        select: {
          children: true,
          likedBy: true,
        },
      },
    },
  });
  return NextResponse.json(data, { status: 200 });
}
