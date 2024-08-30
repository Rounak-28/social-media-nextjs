"use client";

import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Page = () => {
  const [text, setText] = useState("");

  const handlePost = () => {
    console.log(text);
  };

  return (
    <>
      <div className="header w-full h-12 flex items-center justify-between border-b border-gray-300">
        <FaArrowLeft className="w-10 h-10 p-2" />
        <button
          className="bg-blue-500 m-2 text-white w-16 h-8 rounded-full"
          onClick={handlePost}
        >
          Post
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
