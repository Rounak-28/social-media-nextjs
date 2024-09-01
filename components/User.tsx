const User = ({
  name,
  username,
  bio,
}: {
  name: string;
  username: string;
  bio: string;
}) => {
  return (
    <div className="max-w-md mx-auto p-4 rounded-lg border-[1px] my-2">
      <div className="flex items-center space-x-4">
        <img
          src="http://via.placeholder.com/200"
          alt="idk"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-bold">{name}</h4>
          </div>
          <p className="text-gray-400 text-sm">@{username}</p>
        </div>
      </div>
      <p className="mt-3 text-sm">{bio}</p>
    </div>
  );
};

export default User;
