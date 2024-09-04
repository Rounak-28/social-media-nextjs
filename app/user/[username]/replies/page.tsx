import Post from "@/components/Post";
import { headers } from "next/headers";

async function getData(username: string) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocol}://${host}/api/getrepliesbyuser/${username}`
  );
  return response.json();
}

const Page = async ({ params }: { params: { username: string } }) => {
  const replies = await getData(params.username);
  return (
    <div className="min-h-screen">
      {replies.map((reply: any) => (
        <Post
          firstname={reply.author.firstname}
          lastname={reply.author.lastname}
          username={reply.author.username}
          createdAt={reply.createdAt}
          text={reply.text}
          avatar={reply.author.avatar}
          replyCount={reply._count.children}
          id={reply.id}
          key={reply.id}
        />
      ))}
      <div className="h-16"></div>
    </div>
  );
};

export default Page;
