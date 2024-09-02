import Link from "next/link";
import { formatDistance } from "date-fns";

const Post = ({
  profileName,
  userName,
  createdAt,
  text,
  avatar,
  image,
  postID,
}: any) => {
  const time = formatDistance(new Date(createdAt), new Date(), {
    addSuffix: true,
  });
  return (
    <div className="max-w-xl p-4 m-2 md:mx-auto bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="flex items-start">
        <Link href={`/user/${userName}`}>
          <img
            src={avatar}
            alt={`${profileName}'s avatar`}
            className="w-12 h-12 rounded-full mr-4"
          />
        </Link>
        <div className="flex-1">
          <Link href={`/user/${userName}`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-lg">{profileName}</h2>
                <p className="text-sm text-gray-500">
                  @{userName} · {time}
                </p>
              </div>
            </div>
          </Link>
          <Link href={`/post/${postID}`}>
            <p className="whitespace-pre-wrap mt-2 text-gray-800">{text}</p>
            {image && (
              <img src={image} alt="Post content" className="mt-4 rounded-lg" />
            )}
          </Link>
          <div className="flex justify-between mt-0 text-gray-500">
            {/* place for buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
