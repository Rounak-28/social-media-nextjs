"use client";

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handlePost = async () => {
    setIsPosting(true);
    const res = await fetch("/api/createpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    router.push("/");
    router.refresh();
  };

  return (
    <>
      <div className="header w-full h-12 flex items-center justify-between border-b border-gray-300">
        <Link href={"/"}>
          <FaArrowLeft className="w-10 h-10 p-2" />
        </Link>
        <button
          className="bg-blue-500 m-2 text-white w-24 h-10 rounded-full"
          disabled={isPosting}
          onClick={handlePost}
        >
          {isPosting ? "posting..." : "post"}
        </button>
      </div>
      <div className="flex justify-center pt-4">
        <textarea
          placeholder="Write something..."
          className="w-96 h-[150px] p-2 rounded border-2 border-blue-400 focus:outline-none resize-none"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
};

export default Page;
