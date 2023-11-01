import Image from "next/image";
import { Quicksand } from "next/font/google";

const font = Quicksand({ weight: "400", subsets: [] });

export default function Home() {
  return (
    <main
      className={`${font.className} flex min-h-screen flex-col items-center justify-between p-12 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-600 to-red-300`}
    >
      <div className="relative w-full flex flex-col items-center justify-center">
        <Image
          src="/shabuPot.png"
          alt="Shabut Pot"
          width={500}
          height={500}
          priority
        />
        <div className="absolute top-[10%]">
          <h1
            className={`text-white text-8xl text-center`}
            style={{ textShadow: "4px 4px #640132" }}
          >
            しゃぶしゃぶ
          </h1>
          <h2
            className=" text-white text-4xl text-center"
            // style={{ textShadow: "4px 4px #640132" }}
          >
            Shabu Shabu
          </h2>
          <h3
            className=" text-white text-4xl text-center"
            // style={{ textShadow: "4px 4px #640132" }}
          >
            A Full Pot Framework
          </h3>
        </div>
      </div>

      <div>Get Started</div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <div>
        Shabushabu is a "Full Pot" framework that allows you to develop using
        typescript across the full-stack. It integrates Next.js, React, Convex
        for a full stack typescript experience. It also setups up some common
        useful tooling to get started easily such as Prettier, TailwindCSS, and
        ESLint. Inspired by https://ui.shadcn.com/ philosophy of just giving you
        code rather than yet another dependency, it has no magical moving pieces
        and emphasizes a few high quality raw ingredients. You just fork the
        repo and start changing things. the project.
      </div>
    </main>
  );
}
