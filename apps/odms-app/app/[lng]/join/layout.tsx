import AppSide from "@/src/components/AppSide";
import { Session } from "next-auth/core/types";
import { Suspense } from "react";
import Loading from "@/src/components/layout/Loading";

// eslint-disable-next-line @next/next/no-async-client-component
async function JoinLayout({
  children,
  params: { lng, session },
}: {
  children: React.ReactNode;
  params: { lng: string; session?: Session | undefined };
}) {
  return (
    <Suspense fallback={<Loading message="…" />}>
      <div
        id="page-wrapper"
        className="flex w-full h-full flex-col md:flex-row"
      >
        {/* @ts-ignore Server Component */}
        <AppSide language={lng} session={session} />
        <div
          id="page-content"
          className="flex w-full md:w-1/2 h-full my-auto flex-col justify-center items-center"
        >
          {children}
        </div>
      </div>
    </Suspense>
  );
}

export default JoinLayout;
