export default function EntityPage({ params, searchParams }) {
  return (
    <>
      <h1>HOME/ENTITY</h1>
      <pre>{JSON.stringify({ params, searchParams })}</pre>
    </>
  );
}
