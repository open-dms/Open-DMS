export default function NodePage(props: { params: any; searchParams: any }) {
  return (
    <>
      <h1>HOME/MODEL/NODE</h1>
      <pre>{JSON.stringify(props)}</pre>
    </>
  );
}
