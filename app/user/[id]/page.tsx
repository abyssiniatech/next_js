import { notFound } from "next/navigation";

type UserPageProps = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params }: UserPageProps) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );

  if (!res.ok) notFound(); // Show 404 if ID invalid

  const user: {
    name: string;
    email: string;
  } = await res.json();

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
