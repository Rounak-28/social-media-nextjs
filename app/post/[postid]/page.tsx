import Post from "@/components/Post";
import Replies from "@/components/Replies";
import { headers } from "next/headers";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

async function getData(postid: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocal}://${host}/api/getsinglepost/${postid}`
  );
  return response.json();
}

const replies = [
  {
    author: "John Doe",
    text: "This is a great post! Thanks for sharing.",
    time: "2 hours ago",
  },
  {
    author: "Jane Smith",
    text: "I found this really helpful, looking forward to more!",
    time: "1 hour ago",
  },
];

export default async function Page({ params }: { params: { postid: string } }) {
  const post = await getData(params.postid);
  // console.log(data);
  return (
    <div>
      <div className="h-12 flex items-center px-2 border-b border-gray-300 space-x-2">
        <Link href={"/"}>
          <FaArrowLeft className="w-10 h-10 p-2" />
        </Link>
        <p className="text-lg font-semibold p-1">Post</p>
      </div>
      <Post
        profileName={`${post.author.firstname} ${post.author.lastname}`}
        userName={post.author.username}
        createdAt={post.createdAt}
        content={post.text}
        avatar={post.author.avatar}
        postID={post.id}
      />
      <div className="text-center p-2">Replies</div>
      <div className="max-w-xl mx-auto">
        {replies.map((replies, index) => (
          <Replies
            key={index}
            author={replies.author}
            text={replies.text}
            time={replies.time}
          />
        ))}
      </div>
      {/* just giving some margin at the bottom hehe */}
      <div className="h-14"></div>
    </div>
  );
}
