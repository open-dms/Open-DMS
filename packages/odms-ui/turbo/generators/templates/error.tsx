"use client";

/** @note Error components must be Client Components */

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    /** @todo Log the error to an error reporting service */
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          /** @todo  Attempt to recover by trying to re-render the segment */
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
