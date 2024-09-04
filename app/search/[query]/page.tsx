import Post from "@/components/Post";
import User from "@/components/User";
import { headers } from "next/headers";

async function getData(query: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocal}://${host}/api/getusersandpostsforsearch/${query}`
  );
  return response.json();
}

export default async function Page({ params }: { params: { query: string } }) {
  const data = await getData(params.query);
  return (
    <>
      <div className="peoples px-4">
        <p className="text-lg font-semibold">Users</p>
        {data.users.map((user: any) => (
          <User
            firstname={user.firstname}
            lastname={user.lastname}
            username={user.username}
            avatar={user.avatar}
            bio=""
            key={user.id}
          />
        ))}
        {data.users.length == 0 && (
          <p className="text-gray-700">No user found</p>
        )}
      </div>
      <hr />
      <div className="posts px-4 py-1">
        <p className="text-lg font-semibold">Posts</p>
        <div className="posts space-y-2">
          {data.posts.map((post: any) => (
            <Post
              firstname={post.author.firstname}
              lastname={post.author.lastname}
              username={post.author.username}
              createdAt={post.createdAt}
              text={post.text}
              avatar={post.author.avatar}
              replyCount={post._count.children}
              id={post.id}
              key={post.id}
            />
          ))}
          {data.posts.length == 0 && (
            <p className="text-gray-700">No post found</p>
          )}
          <div className="h-14"></div>
        </div>
      </div>
    </>
  );
}
