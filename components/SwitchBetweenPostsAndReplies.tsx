"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SwitchBetweenPostsAndReplies = ({ username }: { username: string }) => {
  const pathname = usePathname();
  const isPostsShowing =
    pathname === `/user/${username}/` || pathname === `/user/${username}`;

  return (
    <div className="flex justify-around border-b border-gray-300 mt-4">
      <Link href={`/user/${username}/`}>
        <div
          className={
            isPostsShowing
              ? "text-blue-500 border-b-2 border-blue-500 py-2"
              : "text-gray-400 py-2"
          }
        >
          Posts
        </div>
      </Link>
      <Link href={`/user/${username}/replies`}>
        <div
          className={
            isPostsShowing
              ? "text-gray-400 py-2"
              : "text-blue-500 border-b-2 border-blue-500 py-2"
          }
        >
          Replies
        </div>
      </Link>
    </div>
  );
};

export default SwitchBetweenPostsAndReplies;
