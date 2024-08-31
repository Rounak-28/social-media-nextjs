import Post from "@/components/Post";
import { headers } from "next/headers";

async function getData(username: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocal}://${host}/api/getsingleuserdata/${username}`
  );
  return response.json();
}

const Page = async ({ params }: { params: { username: string } }) => {
  const data = await getData(params.username);
  return (
    <div className="min-h-screen">
      <header className="relative h-44">
        <img
          src="http://via.placeholder.com/800x300"
          alt="Header"
          className="w-full h-full object-cover"
        />
      </header>

      <div className="p-4 relative">
        <div className="absolute top-[-3rem] left-4">
          <img
            src={data.avatar}
            alt="Profile"
            className="rounded-full border-4 border-black h-24 w-24 object-cover"
          />
        </div>
        <div className="ml-28 pt-4">
          <h1 className="text-2xl font-bold">
            {data.firstname} {data.lastname}
          </h1>
          <p className="text-gray-400">@{data.username}</p>
          {/* <p className="mt-2">In the arena trying stuff</p> */}
          {/* <div className="flex mt-2">
            <span className="mr-4">115 Following</span>
            <span>64 Followers</span>
          </div> */}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-700 mt-4">
        <div className="text-blue-500 py-2 border-b-2 border-blue-500">
          Posts
        </div>
        <div className="text-gray-400 py-2">Replies</div>
      </div>

      {data.posts.map((post: any) => (
        <Post
          profileName={`${data.firstname} ${data.lastname}`}
          userName={data.username}
          createdAt={post.createdAt}
          content={post.text}
          avatar={data.avatar}
          postID={post.id}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Page;
