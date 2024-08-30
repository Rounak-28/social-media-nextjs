export default function Page({ params }: { params: { postid: string } }) {
    return <div>Post: {params.postid}</div>;
  }
  