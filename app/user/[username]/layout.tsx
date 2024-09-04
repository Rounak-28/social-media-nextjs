import Link from "next/link";
import { headers } from "next/headers";
import { FaArrowLeft } from "react-icons/fa";
import { currentUser } from "@clerk/nextjs/server";
import SwitchBetweenPostsAndReplies from "@/components/SwitchBetweenPostsAndReplies";

async function getData(username: string) {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocol}://${host}/api/getsingleuserdata/${username}`
  );
  return response.json();
}

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { username: string };
}>) {
  const user = await currentUser();
  const data = await getData(params.username);

  return (
    <>
      <div className="h-12 flex items-center px-2 border-b border-gray-300 bg-white space-x-2 sticky top-0 z-50">
        <Link href={"/"}>
          <FaArrowLeft className="w-10 h-10 p-2" />
        </Link>
        <div className="flex flex-col">
          <p className="font-semibold">
            {data.firstname} {data.lastname}
          </p>
          <p className="text-sm text-gray-600">{data.posts.length} posts</p>
        </div>
      </div>
      <header className="relative h-40">
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
        <div className="w-full h-12"></div>
        <div className="mr-28 pt-2">
          <h1 className="text-xl font-bold">
            {data.firstname} {data.lastname}
          </h1>
          <p className="text-gray-400">@{data.username}</p>
          <p className="mt-2">In the arena trying stuff</p>
          <div className="flex mt-2">
            <span className="mr-4">42 Following</span>
            <span>42 Followers</span>
          </div>
        </div>
        <div className="w-28 h-12 absolute right-2 top-16 border border-gray-300 flex justify-center items-center rounded-full">
          {params.username === user?.username ? (
            <p>Edit Profile</p>
          ) : (
            <p>Follow</p>
          )}
        </div>
      </div>
      <SwitchBetweenPostsAndReplies username={params.username} />
      {children}
    </>
  );
}
