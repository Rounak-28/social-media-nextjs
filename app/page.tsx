import CreatePostButton from "@/components/CreatePostButton";
import Header from "@/components/Header";
import Post from "@/components/Post";
import { headers } from "next/headers";

async function getData() {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocal}://${host}/api/getallposts`);
  return response.json();
}

export default async function Home() {
  const posts = await getData();
  // console.log(posts)
  return (
    <div>
      <Header />
      <CreatePostButton />
      {posts.map((post: any) => (
        <Post
          profileName={`${post.author.firstname} ${post.author.lastname}`}
          userName={post.author.username}
          createdAt={post.createdAt}
          content={post.text}
          avatar={post.author.avatar}
          postID={post.id}
          key={post.id}
        />
      ))}
    </div>
  );
}
