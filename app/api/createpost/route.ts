import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const user = await currentUser();

  const imagePost = await prisma.post.create({
    data: {
        text: req.text,
        authorUserName: user?.username!,
        parentPostId: Number(req.parentPostId)
    }
  });

  return NextResponse.json(imagePost, { status: 200 });
}