import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { postid: string } }
) {
  const data = await prisma.post.findUnique({
    where: {
      id: Number(params.postid),
    },
    include: {
      author: true,
    },
  });

  return NextResponse.json(data, { status: 200 });
}
