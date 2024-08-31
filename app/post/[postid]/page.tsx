import Comments from "@/components/Comments";
import Post from "@/components/Post";
import { headers } from "next/headers";

async function getData(postid: string) {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(
    `${protocal}://${host}/api/getsinglepost/${postid}`
  );
  return response.json();
}

const comments = [
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
      <Post
        profileName={`${post.author.firstname} ${post.author.lastname}`}
        userName={post.author.username}
        createdAt={post.createdAt}
        content={post.text}
        avatar={post.author.avatar}
        postID={post.id}
      />
      <div className="text-center p-2">Comments</div>
      <div className="max-w-xl mx-auto">
        {comments.map((comment, index) => (
          <Comments
            key={index}
            author={comment.author}
            text={comment.text}
            time={comment.time}
          />
        ))}
      </div>
      {/* just giving some margin at the bottom hehe */}
      <div className="h-14"></div>
    </div>
  );
}
