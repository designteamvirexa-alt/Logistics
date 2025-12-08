"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import ErrorImage from "@/asset/error.png";

export default function NotFound() {

  // Hide global header when 404 page loads
  useEffect(() => {
    const header = document.getElementById("main-header-wrapper");
    if (header) header.style.display = "none";

    return () => {
      if (header) header.style.display = "block"; // Show back when user leaves
    };
  }, []);

  return (
    <>
      {/* Only black header for this page */}
      {/* <Header mode="black" /> */}

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
        <div className="max-w-md md:max-w-lg">
          <Image
            src={ErrorImage}
            alt="404 Error"
            width={400}
            height={300}
            className="mx-auto mb-6"
          />

          <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-lg text-gray-600 mb-6">This page could not be found.</p>

          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
}
