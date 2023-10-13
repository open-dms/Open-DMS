/** @note do the @tailwind imports locally for now  */

import { NextAuthProvider } from "@/src/components/NextAuthProvider";
import { ThemeProvider } from "odms-ui/src/components/layout/ThemeProvider";
import { cookies } from "next/headers";
const languages = ["en", "de"];

export const dynamicParams = false;

export const metadata = {
  title: "ODMS",
  description: "A simple static seo title + meta-tag description for now",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string | "de" };
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get("odms.theme");
  return (
    <html
      lang={lng ?? "de"}
      dir={"ltr"}
      suppressHydrationWarning
      className={theme?.value ?? "light"}
      style={{ colorScheme: theme?.value ?? "light" }}
    >
      <body className="w-screen h-screen dark:bg-black dark:text-white overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextAuthProvider>{children}</NextAuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
