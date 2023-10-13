"use client";

import { Button } from "@ui/src/components/contrib";
import { useEffect } from "react";

export default function HomeError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    /** @todo log error to error reporting service */
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-center">
        <h2>{"commonErrorTitle"}</h2>
        <Button
          className="bg-gray-400 rounded-md my-2 px-2 py-0.5"
          onClick={() => reset()}
        >
          {"commonErrorButtonLabel"}
        </Button>
      </div>
    </div>
  );
}
