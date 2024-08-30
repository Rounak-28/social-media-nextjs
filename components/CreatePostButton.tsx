import Link from "next/link";
import { FaPen } from "react-icons/fa";

const CreatePostButton = () => {
  return (
    <Link href={"/createpost"}>
      <div className="fixed right-4 bottom-20 w-14 h-14 rounded-full bg-blue-400 flex justify-center items-center text-white text-xl">
        <FaPen />
      </div>
    </Link>
  );
};

export default CreatePostButton;
