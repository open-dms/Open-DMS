/** @todo we're importing a shared globals.css from the dedicated `odms-ui` package (includes @taiwind imports)  */

// import "odms-ui/app/globals.css";

/** @note do the @tailwind imports locally for now  */
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex items-center justify-center">{children}</body>
    </html>
  );
}
