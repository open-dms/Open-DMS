export default function Page({ params, searchParams }) {
  return (
    <>
      <h1>HOME/ENTITY</h1>
      <pre>{JSON.stringify({ params, searchParams })}</pre>
    </>
  );
}
