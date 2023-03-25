"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="p-5 space-y-5 border-l-8 border-red-600 bg-slate-50 rounded">
      <div className="flex flex-col space-y-1">
        <h2 className="font-bold text-3xl">Something went wrong!</h2>
        <span className="font-reg text-slate-500 text-lg">{error.message}</span>
      </div>
      <button
        className="px-4 py-2 bg-red-500 rounded-lg text-white font-bold"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => window.location.reload()
        }
      >
        Try again
      </button>
    </div>
  );
}
