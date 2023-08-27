export default function HomePage({ params, searchParams }) {
  return (
    <>
      <h1>HOME</h1>
      <pre>{JSON.stringify({ params, searchParams })}</pre>
    </>
  );
}
