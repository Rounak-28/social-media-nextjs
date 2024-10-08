export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { username: string } }
) {
  const data = await prisma.user.findUnique({
    where: {
      username: params.username,
    },
    include: {
      posts: {
        orderBy: {
          createdAt: "desc",
        },
        where: {
          parentPostId: null,
        },
        include: {
          likedBy: false,
          _count: {
            select: {
              children: true,
              likedBy: true,
            },
          },
        },
      },
    },
  });

  return NextResponse.json(data, { status: 200 });
}
