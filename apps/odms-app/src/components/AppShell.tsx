import * as React from "react";

import type { Session } from "next-auth";

function AppShell({
  children,
  session,
  t,
}: {
  children: React.ReactNode;
  session?: Session | undefined;
  t: any;
}) {
  return (
    <>
      <main className="w-full flex flex-row items-center justify-center">
        {children}
      </main>
    </>
  );
}

export default AppShell;
