import Image from "next/image";
import { Quicksand } from "next/font/google";

const font = Quicksand({ weight: "600", subsets: [] });
const accentColor = "#b70943";

export default function Home() {
  return (
    <main
      className={`${font.className} grid sm:grid-cols-1 md:grid-cols-2`}
      style={{ perspective: "10px" }}
    >
      <div className="col-span-1 flex flex-col justify-center items-center h-screen bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500">
        <div
          className="text-white text-3xl text-center tracking-wide"
          style={{
            textShadow: `2px 2px ${accentColor}`,
          }}
        >
          しゃぶしゃぶ
        </div>
        <div
          className="text-white text-5xl text-center tracking-wide mb-1"
          style={{
            textShadow: `3px 3px ${accentColor}`,
          }}
        >
          Shabu Shabu
        </div>
        <div
          className=" text-white text-2xl text-center tracking-wide"
          style={{
            textShadow: `2px 2px ${accentColor}`,
          }}
        >
          Full Pot Development
        </div>
        <Image
          src="/shabuPot.png"
          alt="Shabut Pot"
          width={400}
          height={400}
          priority
        />
      </div>
      <div className="col-span-1 h-screen bg-white flex flex-col justify-center items-center px-12">
        <div
          className={`flex flex-col items-center justify-center text-red-950`}
        >
          <div className="p-4 bg-white">
            Shabu Shabu is a "Full Pot" development template that scaffolds an
            application using modern tools optimized for rapid prototyping, side
            projects, and MVP iteration. It uses{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://www.convex.dev/"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              Convex
            </a>{" "}
            as the core technologies and also sets up boilerplate for useful
            tooling such as ESLint, Typescript,{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              Tailwind
            </a>
            , and{" "}
            <a
              href="https://ui.shadcn.com/"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              Prettier.
            </a>
          </div>
          <div className="p-4 bg-white mb-8">
            It is inspired by{" "}
            <a
              href="https://prettier.io/"
              target="_blank"
              className="text-red-500 hover:underline"
            >
              shadcn's
            </a>{" "}
            philosophy of just giving you code rather than dependencies and
            documentation. It avoids the over-processing of many moving pieces
            to emphasize a few high quality raw ingredients. You just fork the
            repo and start changing things.
          </div>
          <div className="text-white rounded shadow-md px-8 py-4 tracking-wide cursor-pointer bg-red-500 hover:bg-red-600 active:bg-red-700">
            <a href="https://github.com/Theory-A/ShabuShabu" target="_blank">
              Get the Template
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
