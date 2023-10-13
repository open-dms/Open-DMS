"use client";

import Link from "next/link";
import { SignInForm } from "@ui/src/components/features/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Loading from "@/src/components/layout/Loading";

export default function JoinPage({
  params,
  searchParams,
}: {
  params: { lng: string };
  searchParams: any;
}) {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session && status === "authenticated") router.replace("/de/home");
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, session]);

  if (status === "loading") return <Loading message="…" />;

  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
      <div className=" mx-auto p-12 h-full flex flex-col justify-between">
        <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Sign in{" "}
        </h1>
        <SignInForm className="w-full px-12" />
        <p className="px-8 text-center text-foreground dark:text-foreground text-sm">
          By clicking continue, you agree to our{" "}
          <Link
            href={`/${params?.lng ?? "de"}}/docs/terms`}
            className="underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/docs/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
