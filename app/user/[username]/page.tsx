import Post from "@/components/Post";
import { headers } from "next/headers";

async function getData(username: string) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocol}://${host}/api/getsingleuserdata/${username}`
  );
  return response.json();
}

const Page = async ({ params }: { params: { username: string } }) => {
  const data = await getData(params.username);

  return (
    <div className="min-h-screen">
      {data.posts.map((post: any) => (
        <Post
          firstname={data.firstname}
          lastname={data.lastname}
          username={data.username}
          createdAt={post.createdAt}
          text={post.text}
          avatar={data.avatar}
          replyCount={post._count.children}
          likeCount={post._count.likedBy}
          id={post.id}
          key={post.id}
        />
      ))}
      {/* just giving some margin at the bottom hehe */}
      <div className="h-16"></div>
    </div>
  );
};

export default Page;
