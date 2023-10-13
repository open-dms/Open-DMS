import { Session } from "next-auth/core/types";
import { useTranslation } from "@/src/hooks/useTranslation";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import Loading from "@/src/components/layout/Loading";

// function HomeLayout({
//   children,
//   params: { lng, session },
// }: {
//   children: React.ReactNode;
//   params: { lng: string; session?: Session | undefined };
// }) {
//   return (
//     <div
//       id="page-content"
//       className="flex w-full md:w-1/2 h-full border-2 border-blue-400 my-auto flex-col justify-center items-center"
//     >
//       {children}
//     </div>
//   );
// }

// export default HomeLayout;

export default function HomeLayout({ children }: { children: any }) {
  return <>{children}</>;
}
