import Link from "next/link";
import { formatDistance } from "date-fns";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

const Post = ({
  firstname,
  lastname,
  username,
  createdAt,
  text,
  avatar,
  image,
  replyCount,
  id,
}: any) => {
  const time = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });
  // const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  return (
    <div className="max-w-xl p-4 m-2 md:mx-auto bg-white border border-gray-300 rounded-lg shadow-sm">
      {/* <div
        className="threedot absolute right-3 top-3 text-2xl p-2"
        onClick={() => setIsDeleteModalOpen(true)}
      >
        <BsThreeDots />
      </div>
      {isDeleteModalOpen && (
        <div className="w-full h-4/5 bg-slate-100 border-t border-gray-300 fixed bottom-0 left-0 z-[100] flex flex-col justify-evenly">
          <button className="w-11/12 border border-gray-400 rounded-full mx-auto my-2 py-2 font-semibold text-red-600">
            Delete Post
          </button>
          <button
            className="w-11/12 border border-gray-400 rounded-full mx-auto my-2 py-2 font-semibold"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      )} */}
      <div className="flex items-start">
        <Link href={`/user/${username}`}>
          <img
            src={avatar}
            alt={`${firstname}'s avatar`}
            className="w-12 h-12 rounded-full mr-4"
          />
        </Link>
        <div className="flex-1">
          <Link href={`/user/${username}`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">
                  {firstname + " " + lastname}
                </h2>
                <p className="text-sm text-gray-500">
                  @{username} · {time}
                </p>
              </div>
            </div>
          </Link>
          <Link href={`/post/${id}`}>
            <p className="whitespace-pre-wrap mt-2 text-gray-800">{text}</p>
            {image && (
              <img src={image} alt="Post content" className="mt-4 rounded-lg" />
            )}
          </Link>
          <div className="flex space-x-6 mt-2 text-gray-500">
            <Link href={`/post/${id}`}>
              <div className="replycount flex items-center space-x-1">
                <FaRegComment />
                <span>{replyCount}</span>
              </div>
            </Link>
            {/* TODO: add like functionality */}
            <div className="likecount flex items-center space-x-1">
              <FaRegHeart />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
