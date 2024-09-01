import Post from "@/components/Post";
import User from "@/components/User";

export default async function Page({ params }: { params: { query: string } }) {
  return (
    <>
      <div className="peoples px-4">
        <p className="text-lg font-semibold">People</p>
        <User name="idk1" username="user1" bio="" />
        <User name="idk2" username="user2" bio="" />
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
