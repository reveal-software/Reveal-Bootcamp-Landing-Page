import { useAmp } from "next/amp";
import Head from "next/head";
import Image from "next/image";
import { useAppState } from "../store/useAppState";

export default function Home() {
  const { theme } = useAppState();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full h-screen">
        <ul className="list-disc">
          <li>
            <a href="https://nextjs.org" className="font-[500]">
              Next.js
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs" className="font-[500]">
              Typescript
            </a>
          </li>
          <li>
            <a
              href="https://tanstack.com/query/v4/docs/overview"
              className="font-[500]"
            >
              React Query
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/docs" className="font-[500]">
              Tailwind
            </a>
          </li>
          <li>
            <a href="https://github.com/pmndrs/zustand" className="font-[500]">
              Zustand
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}
