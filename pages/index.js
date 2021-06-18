import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20 px-0 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-blue-600 no-underline">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="leading-normal text-2xl">
          Get started by editing{" "}
          <code className="bg-gray-50">pages/index.js</code>
        </p>

        <div className="flex items-center justify-center flex-wrap max-w-3xl mt-12">
          <a
            href="https://nextjs.org/docs"
            className="m-4 p-6 text-left no-underline text-current border border-gray-200 rounded-xl w-2/4 transition duration-150 ease-in hover:text-blue-800 hover:bg-blue-200 focus:text-blue-800 active:text-blue-800 active:bg-blue-800 focus:bg-blue-800 active:bg-blue-800  active:text-blue-800 active:bg-blue-800"
          >
            <h2 className="mb-4 text-xl">Documentation &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="m-4 p-6 text-left no-underline text-current border border-gray-200 rounded-xl w-2/4 transition duration-150 ease-in hover:text-blue-800 hover:bg-blue-200 focus:text-blue-800 active:text-blue-800 active:bg-blue-800 focus:bg-blue-800 "
          >
            <h2 className="mb-4 text-xl">Learn &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="m-4 p-6 text-left no-underline text-current border border-gray-200 rounded-xl w-2/4 transition duration-150 ease-in hover:text-blue-800 hover:bg-blue-200 focus:text-blue-800 active:text-blue-800 active:bg-blue-800 focus:bg-blue-800 "
          >
            <h2 className="mb-4 text-xl">Examples &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="m-4 p-6 text-left no-underline text-current border border-gray-200 rounded-xl w-2/4 transition duration-150 ease-in hover:text-blue-800 hover:bg-blue-200 focus:text-blue-800 active:text-blue-800 active:bg-blue-800 focus:bg-blue-800 "
          >
            <h2 className="mb-4 text-xl">Deploy &rarr;</h2>
            <p className="m-0 text-xl leading-normal">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="w-full h-24 border-t border-gray-300 flex items-center justify-center">
        <a
          className="flex justify-center items-center flex-grow"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="h-4 ml-2">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
