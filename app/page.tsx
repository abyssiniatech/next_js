export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return (
    <div className="text-white text-center p-4">
      <h1>List of users</h1>
      {data.map((user) => (
        <ul key={user.id} className="mb-4 border border-white p-4">
          <li>ID: {user.id}</li>
          <li>Name: {user.name}</li>
        </ul>
      ))}
    </div>
  );
}
