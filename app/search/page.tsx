"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const SearchTerm = ({ text }: { text: string }) => {
  return (
    <Link href={`/search/${text}`}>
      <div className="flex items-center space-x-4 h-12 px-4 relative border-b">
        <FaSearch className="text-2xl" />
        <span>{text}</span>
        <IoMdClose className="text-3xl absolute right-3" />
      </div>
    </Link>
  );
};

const Page = () => {
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  useEffect(() => {
    const storedSearchTerms = localStorage.getItem("searchTerms");
    if (storedSearchTerms) {
      setSearchTerms(JSON.parse(storedSearchTerms));
    }
  }, []);

  return (
    <>
      <p className="px-4 py-2 text-lg font-semibold">Recent</p>
      {searchTerms ? (
        searchTerms.map((term: string, index: number) => (
          <SearchTerm text={term} key={index} />
        ))
      ) : (
        <p>try searching for people or keywords</p>
      )}
    </>
  );
};

export default Page;
