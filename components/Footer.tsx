import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { FaHome, FaSearch, FaUser, FaComment } from "react-icons/fa";

const Footer = async () => {
  const user = await currentUser();
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300">
      <div className="flex justify-around py-1">
        <Link href={"/"}>
          <div className="flex flex-col items-center px-5 py-2">
            <FaHome className="h-6 w-6 text-gray-700" />
            <span className="text-xs text-gray-700">Home</span>
          </div>
        </Link>
        <Link href={"/search"}>
          <div className="flex flex-col items-center px-5 py-2">
            <FaSearch className="h-6 w-6 text-gray-700" />
            <span className="text-xs text-gray-700">Search</span>
          </div>
        </Link>
        <Link href={"/messages"}>
          <div className="flex flex-col items-center px-5 py-2">
            <FaComment className="h-6 w-6 text-gray-700" />
            <span className="text-xs text-gray-700">DM</span>
          </div>
        </Link>
        <Link href={`/user/${user?.username}`}>
          <div className="flex flex-col items-center px-5 py-2">
            <FaUser className="h-6 w-6 text-gray-700" />
            <span className="text-xs text-gray-700">Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
