import React from 'react';

const Comments = ({ author, text, time }: any) => {
  return (
    <div className="flex items-start p-4 border-b border-gray-200">
      {/* Profile Picture */}
      <div className="mr-4">
        <img
          className="w-10 h-10 rounded-full"
          src={`https://ui-avatars.com/api/?name=${author}&background=random`}
          alt={author}
        />
      </div>
      {/* Comment Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="text-sm font-semibold text-gray-900">{author}</h4>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-700 mt-1">{text}</p>
        <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
          <button className="hover:text-blue-500">Like</button>
          <button className="hover:text-blue-500">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
