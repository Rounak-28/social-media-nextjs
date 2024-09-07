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

  const handleSearch = () => {
    if (!searchText.trim()) return;
    router.push(`/search/${searchText}`);
    const updatedSearchTerms = searchTerms.filter(
      (term) => term.toLowerCase() !== searchText.toLowerCase()
    );
    updatedSearchTerms.unshift(searchText); // Add the new search term at the beginning
    const limitedSearchTerms = updatedSearchTerms.slice(0, 5); // Limit to 5 recent searches
    setSearchTerms(limitedSearchTerms);
    localStorage.setItem("searchTerms", JSON.stringify(limitedSearchTerms));
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
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>
          <FaSearch className="w-10 h-10 p-2" />
        </button>
      </div>
      <div className="h-14 bg-gray-500"></div>
      {children}
    </>
  );
}
