"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const hanldeSearch = () => {
    router.push(`/search/${searchText}`);
  };
  return (
    <>
      <div className="flex justify-between h-14 p-2 border-b border-gray-300">
        <Link href={"/"}>
          <FaArrowLeft className="w-10 h-10 p-2" />
        </Link>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="focus:outline-none border-2 border-blue-400 rounded px-2 w-64"
        />
        <button onClick={hanldeSearch}>
          <FaSearch className="w-10 h-10 p-2" />
        </button>
      </div>
      {children}
    </>
  );
}
