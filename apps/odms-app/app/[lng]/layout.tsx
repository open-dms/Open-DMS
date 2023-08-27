import "../globals.css";

// import "odms-ui/app/globals.css";
import { dir } from "i18next";

/** @note do the @tailwind imports locally for now  */
/** @todo we're importing a shared globals.css from the dedicated `odms-ui` package (includes @taiwind imports)  */

const languages = ["en", "de"];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string | "en" };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className="w-screen h-screen flex items-center justify-center">{children}</body>
    </html>
  );
}
