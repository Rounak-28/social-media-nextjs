export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  const data = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      authorUserName: params.username,
      parentPostId: {
        not: null,
      },
    },
    include: {
      author: true,
      likedBy: true,
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
