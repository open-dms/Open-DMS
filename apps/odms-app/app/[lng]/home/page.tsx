"use client";

import Loading from "@/src/components/layout/Loading";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function HomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/de/join");
    if (status === "authenticated") router.replace("/de/home/dashboard");
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  if (status === "loading") return <Loading message="…" />;

  return router.replace("/de/home/dashboard");
}

export default HomePage;
