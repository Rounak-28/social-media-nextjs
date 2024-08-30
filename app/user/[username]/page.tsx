export default function Page({ params }: { params: { username: string } }) {
  return <div>User: {params.username}</div>;
}
