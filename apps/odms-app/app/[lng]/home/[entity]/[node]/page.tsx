export default function NodePage(props: { params: any; searchParams: any }) {
  return (
    <>
      <h1>HOME/ENTITY/NODE</h1>
      <pre>{JSON.stringify(props)}</pre>
    </>
  );
}
