"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface SearchTermtypes {
  text: string;
  removeSearchTerm: (text: string) => void;
}

const SearchTerm = ({ text, removeSearchTerm }: SearchTermtypes) => {
  return (
    <div className="flex items-center justify-between space-x-4 h-12 px-4 mb-3 relative border-b border-gray-300">
      <Link href={`/search/${text}`} className="w-full py-1 flex space-x-4">
        <FaSearch className="text-2xl" />
        <span>{text}</span>
      </Link>
      <button className="text-3xl" onClick={() => removeSearchTerm(text)}>
        <IoMdClose />
      </button>
    </div>
  );
};

const Page = () => {
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  const removeSearchTerm = (text: string) => {
    const updatedSearchTerms = searchTerms.filter((term) => term !== text);
    setSearchTerms(updatedSearchTerms);
    localStorage.setItem("searchTerms", JSON.stringify(updatedSearchTerms));
  };

  useEffect(() => {
    const storedSearchTerms = localStorage.getItem("searchTerms");
    if (storedSearchTerms) {
      setSearchTerms(JSON.parse(storedSearchTerms));
    }
  }, []);

  return (
    <>
      <p className="px-4 py-2 text-lg font-semibold">Recent</p>
      {searchTerms.length ? (
        searchTerms.map((term: string) => (
          <SearchTerm
            text={term}
            removeSearchTerm={removeSearchTerm}
            key={term}
          />
        ))
      ) : (
        <p className="text-center">try searching for people or keywords</p>
      )}
    </>
  );
};

export default Page;
