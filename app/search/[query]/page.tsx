import Post from "@/components/Post";

export const UserComponent = ({
  name,
  username,
}: {
  name: string;
  username: string;
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
      {/* <p className="mt-3 text-sm">Lorem ipsum, dolor sit amet consectet</p> */}
    </div>
  );
};

export default async function Page({ params }: { params: { query: string } }) {
  return (
    <>
      <div className="peoples px-4">
        <p className="text-lg font-semibold">People</p>
        <UserComponent name="idk1" username="user1" />
        <UserComponent name="idk2" username="user2" />
        <button className="text-blue-600 text-lg px-2 py-1 mx-2">
          View all
        </button>
      </div>
      <hr />
      <div className="posts px-4 py-1">
        <p className="text-lg font-semibold">Posts</p>
        <div className="posts space-y-2">
          <Post
            profileName={`idk 1`}
            userName={"username"}
            createdAt={new Date()}
            content={"sfghj sjrjrsgh krg"}
            avatar={"http://via.placeholder.com/200"}
            postID={1000}
            //   key={post.id}
          />
          <Post
            profileName={`idk 1`}
            userName={"username"}
            createdAt={new Date()}
            content={"sfghj sjrjrsgh krg"}
            avatar={"http://via.placeholder.com/200"}
            postID={1010}
            //   key={post.id}
          />
        </div>
      </div>
    </>
  );
}
