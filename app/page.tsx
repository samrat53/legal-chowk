"use client";
import { initAccordions } from "flowbite";
import { useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
<Head>
  <Script
    src="https://unpkg.com/flowbite@1.3.3/dist/flowbite.js"
    strategy="beforeInteractive"
  />
  <link
    rel="stylesheet"
    href="https://unpkg.com/flowbite@1.3.3/dist/flowbite.min.css"
  />
</Head>;

export default function Home() {
  useEffect(() => {
    initAccordions();
  });

  return <h1>Go to route /legal</h1>;
}
