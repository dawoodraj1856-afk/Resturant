"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams<{ slug: string }>();
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen w-full bg-yellow-300 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-yellow-600 mb-2">
          Name: {params.slug}
        </h1>

        <p className="text-lg mb-4">
          Hello <span className="font-semibold capitalize">{params.slug}</span>{" "}
          [{count}] — Aj click krdo plz 😔
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition"
        >
          Click me {params.slug} please 😭
        </button>

        <p className="mt-4 text-sm text-gray-600">
          404 {params.slug} ni kiya na click 😎
        </p>
      </div>
    </div>
  );
}
