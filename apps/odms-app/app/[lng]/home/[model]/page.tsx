"use client";

import { signOut, useSession } from "next-auth/react";

import { Button } from "@ui/src/components/contrib";
import Loading from "@/src/components/layout/Loading";
import { prismaFetch } from "@/src/lib/server/db";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";

// const fetchData = async (model: string) => {
//   return await prismaFetch(model);
// };

export default function ModelPage({ params, searchParams }) {
  // const data = fetchData(params?.model);
  const router = useRouter();
  const { data: session, status } = useSession();

  // useEffect(() => {
  //   if (status === "unauthenticated") router.replace("/de/join");
  //   return () => {};
  // }, [router, status]);

  // if (status === "loading") return <Loading />;
  return (
    <Suspense>
      <Button onClick={() => signOut({ callbackUrl: "/de" })}>SIGN-OUT</Button>
      <h1>HOME/MODEL/{params?.model.toUpperCase()}</h1>
      <pre>{JSON.stringify({ session, params, searchParams })}</pre>
    </Suspense>
  );
}
