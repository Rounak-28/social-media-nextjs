"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  useEffect(() => {
    const storedSearchTerms = localStorage.getItem("searchTerms");
    if (storedSearchTerms) {
      setSearchTerms(JSON.parse(storedSearchTerms));
    }
  }, []);

  const hanldeSearch = () => {
    router.push(`/search/${searchText}`);

    const updatedSearchTerms = [searchText, ...searchTerms].slice(0, 5); // Limit to 5 recent searches
    setSearchTerms(updatedSearchTerms);
    localStorage.setItem("searchTerms", JSON.stringify(updatedSearchTerms));
  };
  return (
    <>
      <div className="flex justify-between w-full h-14 p-2 border-b border-gray-300 bg-white fixed top-0">
        <FaArrowLeft className="w-10 h-10 p-2" onClick={router.back} />
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="focus:outline-none border-2 border-blue-400 rounded px-2 w-64"
          onKeyDown={(e) => e.key === "Enter" && hanldeSearch()}
        />
        <button onClick={hanldeSearch}>
          <FaSearch className="w-10 h-10 p-2" />
        </button>
      </div>
      <div className="h-14 bg-gray-500"></div>
      {children}
    </>
  );
}
