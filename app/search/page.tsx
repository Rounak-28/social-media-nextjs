import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const SearchTerm = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center space-x-4 h-12 px-4 relative border-b">
      <FaSearch className="text-2xl" />
      <span>{text}</span>
      <IoMdClose className="text-3xl absolute right-3" />
    </div>
  );
};

let searchTerms: any;
searchTerms = [
  "Search Term 1",
  "Search Term 2",
  "Search Term 3",
  "Search Term 4",
  "Search Term 5",
];

const Page = () => {
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
