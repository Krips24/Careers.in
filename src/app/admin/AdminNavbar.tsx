"use client";

import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center justify-between gap-2 py-12">
        <div className="space-x-2">
          <h1 className="text-center text-sm text-gray-600">Active User:</h1>
          <span className="font-semibold">
            {user?.primaryEmailAddress?.emailAddress}
          </span>
        </div>
        <div>
          <button
            onClick={async () => {
              await signOut();
              router.push("/");
            }}
            className="rounded-lg border bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
