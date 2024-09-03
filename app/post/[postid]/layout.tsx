"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";

export default function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { postid: string };
}>) {
  const router = useRouter();
  const [text, setText] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleReply = async () => {
    setIsPosting(true);
    const res = await fetch("/api/createpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        parentPostId: params.postid,
      }),
    });
    setText("");
    setIsPosting(false);
    router.refresh();
  };

  return (
    <>
      <div className="bg-white h-16 w-full fixed bottom-16 border-t border-green-600 flex items-center justify-between px-2">
        <input
          type="text"
          placeholder="Post your reply"
          className="w-80 h-10 outline outline-1 outline-gray-300 rounded-md px-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          // onKeyDown={(e) => e.key === "Enter" && handleReply()}
        />
        <button
          className="text-3xl px-2 py-1 disabled:text-gray-400"
          disabled={isPosting || text.trim() == ""}
          onClick={handleReply}
        >
          <IoMdSend />
        </button>
      </div>
      {children}
    </>
  );
}
