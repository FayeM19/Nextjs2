// app/not-found.tsx
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="mt-4 text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go back home
      </Link>
    </div>
  );
}
