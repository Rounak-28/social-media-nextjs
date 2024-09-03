import Post from "@/components/Post";
import { headers } from "next/headers";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

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
    firstname: "John",
    lastname: "Doe",
    username: "john_doe",
    text: "This is a great post! Thanks for sharing.",
    createdAt: "2024-08-31T13:45:49.412Z",
    avatar: "http://via.placeholder.com/200",
    id: 1,
  },
  {
    firstname: "Jane",
    lastname: "Smith",
    username: "jane_smith",
    text: "I found this really helpful, looking forward to more!",
    createdAt: "2024-08-31T13:45:49.412Z",
    avatar: "http://via.placeholder.com/200",
    id: 2,
  },
];

export default async function Page({ params }: { params: { postid: string } }) {
  const post = await getData(params.postid);
  // console.log(data);
  return (
    <div>
      <div className="h-12 flex items-center px-2 border-b border-gray-300 space-x-2 sticky top-0 bg-white">
        <Link href={"/"}>
          <FaArrowLeft className="w-10 h-10 p-2" />
        </Link>
        <p className="text-lg font-semibold p-1">Post</p>
      </div>
      <Post
        firstname={post.author.firstname}
        lastname={post.author.lastname}
        username={post.author.username}
        createdAt={post.createdAt}
        text={post.text}
        avatar={post.author.avatar}
        id={post.id}
      />
      <div className="text-center p-2">Replies</div>
      <div className="max-w-xl mx-auto">
        {replies.map((reply: any) => (
          <Post
            firstname={reply.firstname}
            lastname={reply.lastname}
            username={reply.username}
            createdAt={reply.createdAt}
            text={reply.text}
            avatar={reply.avatar}
            id={reply.id}
            key={reply.id}
          />
        ))}
      </div>
      <div className="bg-white h-16 w-full fixed bottom-16 border-t border-green-600 flex items-center justify-between px-2">
        <input
          type="text"
          className="w-80 h-10 outline outline-1 outline-gray-300 rounded-md px-2"
          placeholder="Post your reply"
        />
        <button className="text-3xl px-2 py-1">
          <IoMdSend />
        </button>
      </div>
      {/* just giving some margin at the bottom hehe */}
      <div className="h-32"></div>
    </div>
  );
}
