export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { parentpostid: string } }
) {
  const data = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      parentPostId: Number(params.parentpostid),
    },
    include: {
      author: true,
      _count: {
        select: {
          children: true,
        },
      },
    },
  });
  return NextResponse.json(data, { status: 200 });
}
