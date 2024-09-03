import Post from "@/components/Post";
import { headers } from "next/headers";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

async function getPost(postid: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocal}://${host}/api/getsinglepost/${postid}`
  );
  return response.json();
}

async function getReplies(parentPostId: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocal}://${host}/api/getreplies/${parentPostId}`
  );
  return response.json();
}

export default async function Page({ params }: { params: { postid: string } }) {

  const postData = getPost(params.postid);
  const repliesData = getReplies(params.postid);
  const [post, replies] = await Promise.all([postData, repliesData])
  
  // console.log(replies);
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
      {replies.length == 0 && (
        <p className="text-center text-sm text-gray-600">No replies yet...</p>
      )}
      <div className="max-w-xl mx-auto">
        {replies.map((reply: any) => (
          <Post
            firstname={reply.author.firstname}
            lastname={reply.author.lastname}
            username={reply.author.username}
            createdAt={reply.createdAt}
            text={reply.text}
            avatar={reply.author.avatar}
            id={reply.id}
            key={reply.id}
          />
        ))}
      </div>
      {/* just giving some margin at the bottom hehe */}
      <div className="h-32"></div>
    </div>
  );
}
