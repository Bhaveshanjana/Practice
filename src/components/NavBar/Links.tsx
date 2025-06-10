"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Links = () => {
  const searchParams = useSearchParams();
  const todosFilter = searchParams.get("todo");

  return (
    <nav className="flex justify-center text-center">
      <div className="flex gap-28 mt-6 text-xl border-b-2 border-gray-400">
        <Link href="/" className={todosFilter === null ? "active" : ""}>
          All
        </Link>
        <Link
          href="/?todo=active"
          className={todosFilter === "active" ? "active" : ""}
        >
          Active
        </Link>
        <Link
          href="/?todo=completed"
          className={todosFilter === "completed" ? "active" : ""}
        >
          Completed
        </Link>
      </div>
    </nav>
  );
};

export default Links;
