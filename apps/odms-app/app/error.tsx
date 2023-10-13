"use client";

import { Button } from "@ui/src/components/contrib";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="w-screen h-screen">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <h2>{"commonErrorTitle"}</h2>
            <Button onClick={() => reset()}>{"commonErrorButtonLabel"}</Button>
          </div>
        </div>
      </body>
    </html>
  );
}
