import Link from "next/link";

const User = ({
  firstname,
  lastname,
  username,
  avatar,
  bio,
}: {
  firstname: string;
  lastname: string;
  username: string;
  avatar: string;
  bio: string;
}) => {
  return (
    <Link href={`/user/${username}`}>
      <div className="max-w-md mx-auto p-4 rounded-lg border-[1px] my-2">
        <div className="flex items-center space-x-4">
          <img src={avatar} alt="avatar" className="w-12 h-12 rounded-full" />
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-bold">{firstname + " " + lastname}</h4>
            </div>
            <p className="text-gray-400 text-sm">@{username}</p>
          </div>
        </div>
        <p className="mt-3 text-sm">{bio}</p>
      </div>
    </Link>
  );
};

export default User;
