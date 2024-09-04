import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { query: string } }
) {
  const query = params.query.split(" ").join(" | ");

  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      OR: [
        { text: { search: query } },
        {
          author: {
            firstname: { search: query },
            lastname: { search: query },
            username: { search: query },
          },
        },
      ],
      parentPostId: null,
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

  const users = await prisma.user.findMany({
    where: {
      firstname: { search: query },
      lastname: { search: query },
      username: { search: query },
    },
  });

  const data = { posts: posts, users: users };

  return NextResponse.json(data, { status: 200 });
}
