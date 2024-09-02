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
        <p className="text-lg font-semibold">People</p>
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
        <button className="text-blue-600 text-lg px-2 py-1 mx-2">
          View all
        </button>
      </div>
      <hr />
      <div className="posts px-2 py-1">
        <p className="text-lg font-semibold px-2">Posts</p>
        <div className="posts space-y-2">
          {data.posts.map((post: any) => (
            <Post
              profileName={post.author.firstname + " " + post.author.lastname}
              userName={post.author.username}
              createdAt={post.createdAt}
              text={post.text}
              avatar={post.author.avatar}
              postID={post.id}
              key={post.id}
            />
          ))}
          <div className="h-14"></div>
        </div>
      </div>
    </>
  );
}
