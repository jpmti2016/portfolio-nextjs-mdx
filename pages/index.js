import Image from "next/image";
import trackingmyfinance from "../public/images/trackingmyfinance559_402.jpg";
import githubjobs from "../public/images/github-jobs_559.jpg";
import personalportfolio from "../public/images/personal-portfolio_559.jpg";
import imagegallery from "../public/images/image-gallery_559.jpg";
import cssgridalbum from "../public/images/css-grid-album_559.jpg";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <NextSeo
        title="Yampier Medina personal website (software engineer)"
        description="I am a Software engineer that know javascript, reactjs, nextjs, graphql, sql, aws amplify, css, html5, taildwindcss, bulma, postcss and git. Searching for job, 100% remote. Hire me."
      />
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
      <section id="projects" className="m-10 bg-gray-100 dark:bg-gray-800">
        <div className="container">
          <div className="mx-4 mt-6 sm:mt-7">
            <h2 className="mb-3 text-2xl font-bold tracking-wide font-playfair sm:text-3xl">
              Projects
            </h2>
            <div className="sm:grid sm:grid-cols-2 sm:gap-8">
              <div className="flex flex-col p-2 bg-gray-200 shadow-lg dark:bg-gray-900 sm:p-4">
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
              <div className="flex flex-col p-2 bg-gray-200 dark:bg-gray-900 sm:p-4">
                <div>
                  <h3 className="mb-1 text-xl font-semibold leading-tight font-playfair">
                    Github Jobs
                  </h3>

                  <div className="my-3 rounded-lg shadow-2xl sm:my-4 sm:w-full">
                    <Image
                      src={githubjobs}
                      layout="responsive"
                      alt="github jobs project"
                    />
                  </div>

                  <p className="inline-block font-fira">
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      ReactJS
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      React Hook Form
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Github Jobs API
                    </span>

                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      dayjs
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Axios
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Tailwind CSS
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
                  Making API calls is key to web development. This project
                  explored the use of fetch to make API request.
                </p>
                <p className="mt-2 text-lg sm:mt-4">
                  Also it was a way to implement the
                  <span className="font-medium">Github jobs</span> challenge
                  published by
                  <a
                    className="font-medium text-blue-800 hover:text-blue-500 hover:underline"
                    href="https://devchallenges.io/challenges/TtUjDt19eIHxNQ4n5jps"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {" "}
                    devchallenges.io{" "}
                  </a>
                  and work on my design skills.
                </p>
                <p className="mt-2 text-lg">
                  Flexbox and css combinators continue to amazing me.
                </p>

                <div className="mt-4 text-sm sm:pt-6 sm:text-base sm:mt-auto">
                  <a
                    className="shadow-lg btn btn-blue"
                    href="https://jpmti2016.github.io/github-jobs/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Demo
                  </a>
                  <a
                    className="shadow-lg btn btn-gray"
                    href="https://github.com/jpmti2016/github-jobs"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Info
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-2 bg-gray-200 shadow-lg dark:bg-gray-900 sm:p-4">
                <div>
                  <h3 className="mb-1 text-xl font-semibold leading-tight font-playfair">
                    Portfolio website
                  </h3>

                  <div className="my-3 rounded-lg shadow-2xl sm:my-4 sm:w-full">
                    <Image
                      src={personalportfolio}
                      alt="personal portfolio project"
                      layout="responsive"
                    />
                  </div>

                  <p className="inline-block font-fira">
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Tailwind CSS
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      JavaScript (JS)
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      HTML5
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      PostCSS
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Sizzy
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Gimbal
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Git
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Github
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Gimp
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-lg sm:mt-4">
                  Personal website portfolio created to showcase my projects,
                  skills and to be a mean to interact with employers, clients
                  and developers.
                </p>
                <p className="mt-2 text-lg">
                  TailwindCSS was a tool very useful to follow a design system
                  and create a custom designed website while taking advantage of
                  its utility-first characteristic to fast prototyping and
                  update.
                </p>
                <p className="mt-2 text-lg">
                  The project was designed to provide a great user experience
                  and have good performance. Gimp and imageoptim were tools that
                  made easy the process of creating the images needed to respond
                  at different viewport's width and compressing them to achieve
                  better performance.
                </p>
                <p className="mt-2 text-lg">
                  Lighthouse (Google Chrome Console Tool) and RespImageLint were
                  very useful to detect images issues that affect page
                  performance and user experience.
                </p>

                <div className="mt-4 text-sm sm:pt-6 sm:text-base sm:mt-auto">
                  <a className="shadow-lg btn btn-blue" href="#">
                    Demo
                  </a>
                  <a
                    className="shadow-lg btn btn-gray"
                    href="https://github.com/jpmti2016/jpmti2016.github.io"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Info
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-2 bg-gray-200 shadow-lg dark:bg-gray-900 sm:p-4">
                <div>
                  <h3 className="mb-1 text-xl font-semibold leading-tight font-playfair">
                    Image gallery
                  </h3>

                  <div className="my-3 rounded-lg shadow-2xl sm:my-4 sm:w-full">
                    <Image
                      src={imagegallery}
                      alt="image gallery project"
                      layout="responsive"
                    />
                  </div>

                  <p className="inline-block font-fira">
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      CSS
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      CSS Grid
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      HTML5
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      JS
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Gimp
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-lg sm:mt-4">
                  This project provided a possibility to use CSS Grid while
                  trying to get a responsive website. It includes inline
                  javascript for creating several images of different sizes to
                  fill the grid. This techniques came from the Wes Bos's great
                  course CSS Grid. Also the usage of images was a good intro to
                  analyzing the impact of images size, format and aspect-ratio
                  in the page's performance.
                </p>
                <p className="mt-2 text-lg">
                  Gimp made easy the process of creating images at specified
                  dimensions. Also imageoptim allows more images's compression
                  to achieve better performance.
                </p>
                <p className="mt-2 text-lg">
                  Lighthouse (Google Chrome Console Tool) and RespImageLint were
                  very useful to detect images issues that affect page
                  performance and user experience.
                </p>

                <div className="mt-4 text-sm sm:pt-6 sm:text-base sm:mt-auto">
                  <a
                    className="shadow-lg btn btn-blue"
                    href="https://jpmti2016.github.io/image-gallery/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Demo
                  </a>
                  <a
                    className="shadow-lg btn btn-gray"
                    href="https://github.com/jpmti2016/image-gallery"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Info
                  </a>
                </div>
              </div>
              <div className="flex flex-col p-2 bg-gray-200 shadow-lg dark:bg-gray-900 sm:p-4">
                <div>
                  <h3 className="mb-1 text-xl font-semibold leading-tight font-playfair">
                    Nature at your feet
                  </h3>
                  <div className="my-3 rounded-lg shadow-2xl sm:my-4 sm:w-full">
                    <Image
                      src={cssgridalbum}
                      alt="css grid album"
                      layout="responsive"
                    />
                  </div>

                  <p className="inline-block font-fira">
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      CSS
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      CSS Grid
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      HTML5
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      imageoptim
                    </span>
                    <span className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1">
                      Gimp
                    </span>
                  </p>
                </div>
                <p className="mt-2 text-lg sm:mt-4">
                  This project explore the basics properties of CSS Grid and how
                  it allows responsive layouts. The idea also came from the Wes
                  Bos's great course CSS Grid.
                </p>
                <p className="mt-2 text-lg">
                  It makes it possible to think about image quality, size,
                  format, aspect-ratio and how it affect the page performance
                  and user experience.
                </p>
                <p className="mt-2 text-lg">
                  It was also useful to practice the usage of Gimp, imageoptim,
                  Lighthouse and RespImageLint.
                </p>
                <div className="mt-4 text-sm sm:pt-6 sm:text-base sm:mt-auto">
                  <a
                    className="shadow-lg btn btn-blue"
                    href="https://jpmti2016.github.io/css-grid-album/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Demo
                  </a>
                  <a
                    className="shadow-lg btn btn-gray"
                    href="https://github.com/jpmti2016/css-grid-album"
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
