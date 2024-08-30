import Link from "next/link";
import React from "react";

const Post = ({ profileName, userName, time, content, avatar, image, postID }: any) => {
  return (
    <div className="max-w-xl mx-auto p-4 bg-white border border-gray-300 rounded-lg shadow-sm">
      <div className="flex items-start">
        <img
          src={avatar}
          alt={`${profileName}'s avatar`}
          className="w-12 h-12 rounded-full mr-4"
        />
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
          <p className="mt-2 text-gray-800">{content}</p>
          {image && (
            <img src={image} alt="Post content" className="mt-4 rounded-lg" />
          )}
          </Link>
          <div className="flex justify-between mt-4 text-gray-500">
            {/* place for buttons */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
