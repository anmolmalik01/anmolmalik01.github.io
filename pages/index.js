import Head from "next/head";
import Image from "next/image";

import Nav from "../components/navbar";
import Main from "../components/main"



export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#2e2e2e] via-black to-black text-white">
      {/* ========================= Header ========================== */}
      <Head>
        <title>Anmol Malik</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* ========================== navigation bar ======================= */}
      <Main className="z-10 w-screen" />
      <Nav className="absolute h-fit w-full top-[0%] z-50" />
      {/* ===================== SVG ===================== */}
    </div>
  );
}
