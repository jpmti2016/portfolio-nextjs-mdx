import Image from "next/image";
import trackingmyfinance from "../public/images/trackingmyfinance559_402.jpg";
import githubjobs from "../public/images/github-jobs_559.jpg";
import personalportfolio from "../public/images/personal-portfolio_559.jpg";
import imagegallery from "../public/images/image-gallery_559.jpg";
import cssgridalbum from "../public/images/css-grid-album_559.jpg";
import Head from "next/head";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import { folderPath, filesPath } from "../utils/mdxUtils";
import matter from "gray-matter";
import Project from "../components/Project";

export default function Home({ projects }) {
  console.log("projects from files paths", projects);
  const { asPath } = useRouter();
  const meta = {
    title: "Yampier Medina personal website (software engineer)",
    description:
      "I am a Software engineer that know javascript, reactjs, nextjs, graphql, sql, aws amplify, css, html5, taildwindcss, bulma, postcss and git. Searching for job, 100% remote. Hire me.",
    type: "website",
    site_name: "Yampier Medina",
    image:
      "https://portfolio-nextjs-mdx.vercel.app/images/personal-portfolio_559.jpg",
    date: "2021-07-15",
  };
  return (
    <>
      {/* SEO */}
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://portfolio-nextjs-mdx.vercel.app/${asPath}`}
        />
        <link
          rel="canonical"
          href={`https://portfolio-nextjs-mdx.vercel.app/${asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.site_name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jpmti2016" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {/* Welcome */}
      <section id="welcome" className="bg-gray-100 dark:bg-gray-800">
        <div className="flex pt-24 pb-32">
          <div className="container text-center sm:py-20 md:py-24 xl:py-32">
            <p className="mb-2 text-lg font-normal font-playfair sm:text-2xl">
              Hi
            </p>
            <p className="mb-2 text-lg font-normal font-playfair sm:text-2xl">
              Welcome
            </p>
            <h1 className="mb-2 text-xl font-normal font-roboto sm:text-3xl">
              I'm Yampier Medina
            </h1>
            <h2 className="mb-3 text-2xl font-extrabold tracking-wide font-playfair sm:text-5xl">
              A Software Engineer
            </h2>
            <p className="mb-10 text-lg font-normal font-fira sm:text-xl">
              I like AWS serverless computing, React, GraphQL and ES Next.
            </p>
            <p className="mb-2 text-xl font-semibold tracking-wide font-playfair sm:text-xl">
              Job status
            </p>
            <p className="mb-4 text-lg leading-8 font-fira sm:text-xl">
              Searching, 100% Remote
            </p>

            <a href="mailto:jpmti2016@gmail.com" className="btn btn-blue">
              Hire me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-200 dark:bg-gray-900">
        <div className="container">
          <div className="flex flex-col mx-4 mt-6 sm:mt-7">
            <h2 className="mb-3 text-2xl font-bold tracking-wide font-playfair sm:text-3xl">
              About
            </h2>
            <p className="mb-3 sm:text-lg">
              I am a
              <span className="font-semibold">
                {" "}
                Computer Science Engineer (2009){" "}
              </span>
              turned to the <span className="font-semibold"> JS universe</span>.
              I know SWE, testing, SQA and PM (Lead teams of 20-50 people).
            </p>
            <p className="mb-3 sm:text-lg">
              I build secure and scalable cloud apps with AWS Amplify (and other
              AWS services), maintaining predictability and order in the process
              from prototyping to deployment.
            </p>

            <p className="mb-3 sm:text-lg">
              I care about UX/UI, SEO and performance. Currently learning from
              the Refactoring UI book and the Tailwind CSS framework. I have
              also used Bootstrap and Semantic UI.
            </p>

            <p className="mb-3 sm:text-lg">
              I use VS Code, Git/Github, Chrome Developer Tools and Amplify CLI
              daily. I code on a Dell Inspiron 15 7000 Series (Ubuntu 21.04 LTS)
              plugged to an external Dell UltraSharp 27 4K Monitor.
            </p>
            <p className="mb-3 sm:text-lg">
              I speak English (continuously improving) and Spanish (native).
            </p>
            <p className="mb-3 sm:text-lg">
              When I am not coding I like to read or to learn something new
              -sometimes revisiting or upgrading the level.
            </p>
            <p className="mb-3 sm:text-lg">
              Recent learnings (... in the path to Pro):
            </p>
            <p className="mb-3 sm:text-lg">
              <span className="font-medium">
                Epic React workshops by Kent C. Dodds{" "}
              </span>
              [technical, in progress] and
              <span className="font-medium">
                {" "}
                Testing JavaScript by Kent C. Dodds{" "}
              </span>
              [technical, pending]
            </p>
            <p className="mb-3 sm:text-lg">Recent readings:</p>
            <p className="mb-3 sm:text-lg">
              <span className="font-medium">
                Composing Software by Eric Elliot{" "}
              </span>
              [technical, in progress] and{" "}
              <span className="font-medium">
                The Startup Owners's Manual by Steve Blank & Bob Dorf{" "}
              </span>
              [technical, pending].
            </p>
            <p className="mb-3 sm:text-lg">
              <span className="font-medium">The Choice by Edith Eva Eger </span>
              [non-technical, completed] and{" "}
              <span className="font-medium">
                Fluent Forever by Gabriel Wyner{" "}
              </span>
              [non-technical, in progress].
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-gray-100 dark:bg-gray-800 sm:px-10 sm:py-16"
      >
        <div className="py-4">
          <div className="mx-4 mt-6 sm:mt-7">
            <h2 className="mb-3 text-2xl font-bold tracking-wide font-playfair sm:text-3xl">
              Projects
            </h2>
            <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 ">
              {projects.map((project) => (
                <Project
                  content={project.content}
                  {...project.data}
                  image={cssgridalbum}
                />
              ))}
              <div className="flex flex-col p-4 bg-gray-200 shadow-lg dark:bg-gray-900 sm:p-4">
                <div>
                  <h3 className="mb-1 text-xl font-semibold leading-tight font-playfair">
                    Money Tracker
                  </h3>
                  <div className="my-3 rounded-lg shadow-2xl sm:my-4 sm:w-full">
                    <Image
                      src={trackingmyfinance}
                      layout="responsive"
                      alt="tracking my finance project"
                    />
                  </div>

                  <p className="inline-block font-fira">
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      JS
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      AWS Amplify
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      GraphQL
                    </span>

                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      ReactJS
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      React Hook Form
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Bulma
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Git
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      GitHub
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-lg sm:mt-4">
                  Keeping records of every day expenses is hard work. Increasing
                  amount of receipts are prone to be lost or overflow in
                  household drawers. Also hundreds of card transactions that
                  don't show any hint of the store, product or products's
                  category involved.
                </p>
                <p className="mt-2 text-lg">
                  How to <span className="font-semibold"> detect trends </span>{" "}
                  in the buying habits or how to know the
                  <span className="font-semibold">
                    {" "}
                    size of the budget still alive
                  </span>
                  ?
                </p>
                <p className="mt-2 text-lg">
                  <span className="font-semibold">Money Tracker</span> works to
                  delete present and future personal finance managing issues.
                </p>
                <p className="mt-2 text-lg">
                  Try the app <span className="font-fira">sign in </span> or use
                  <span className="font-fira">
                    user: test, password: test2020{" "}
                  </span>
                </p>
                <div className="mt-4 text-sm sm:pt-6 sm:text-base sm:mt-auto">
                  <a
                    className="shadow-lg btn btn-blue"
                    href="https://www.trackingmyfinance.com"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Demo
                  </a>
                  <a
                    className="shadow-lg btn btn-gray"
                    href="https://github.com/jpmti2016/trackingmyfinance"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function getStaticProps() {
  const projectsPath = folderPath("projects");
  const projectFilesPath = filesPath(projectsPath);

  const projects = projectFilesPath.map((filePath) => {
    const source = fs.readFileSync(path.join(projectsPath, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  return {
    props: {
      projects,
    },
  };
}
