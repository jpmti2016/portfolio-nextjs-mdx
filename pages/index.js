import Image from "next/image";
import React from "react";

import Head from "next/head";
import fs from "fs";
import path from "path";
import { useRouter } from "next/router";
import { folderPath, filesPath } from "../utils/mdxUtils";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import Project from "../components/Project";

import useTranslation from "next-translate/useTranslation";

export default function Home({ projects }) {
  let { t, lang } = useTranslation("main");
  const { asPath } = useRouter();
  const meta = {
    title: "Yampier Medina personal website",
    description:
      "I am a Software Engineer that know javascript, reactjs, nextjs, graphql, sql, aws amplify, css, html5, taildwindcss, bulma, postcss and git. Searching for job, 100% remote. Hire me.",
    type: "website",
    site_name: "Yampier Medina",
    image: "https://jpmti2016.com/images/personal-portfolio_559.jpg",
    date: "2021-07-01",
  };

  const handleClickHireMe = (e) => {
    // link analytics
    console.log("Hire me!!");
  };

  return (
    <>
      {/* SEO */}
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://jpmti2016.com${asPath}`} />
        <link rel="canonical" href={`https://jpmti2016.com${asPath}`} />
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
      <section id="welcome" className="bg-gray-100 dark:bg-gray-800 ">
        <div className="flex pt-24 pb-32 sm:pt-0">
          <div className="container text-center sm:py-20 md:py-24 xl:py-32 sm:max-w-4xl">
            <p className="mb-2 text-lg font-normal font-playfair sm:text-2xl">
              {t("greeting")}
            </p>
            <h1 className="mb-2 text-xl font-normal font-roboto sm:text-3xl">
              {t("main:fullName")}
            </h1>
            <h2 className="mb-3 text-2xl font-extrabold tracking-wide font-playfair sm:text-5xl">
              {t("main:position")}
            </h2>
            <p className="mb-10 text-lg font-normal font-fira sm:text-xl">
              {t("main:techs")}
            </p>
            <p className="mb-2 text-xl font-semibold tracking-wide font-playfair sm:text-xl">
              {t("main:jobStatus")}
            </p>
            <p className="mb-4 text-lg leading-8 font-fira sm:text-xl">
              {t("main:jobStatusValue")}
            </p>

            <a
              href="mailto:jpmti2016@gmail.com"
              className="btn btn-blue"
              onClick={handleClickHireMe}
            >
              {t("main:mainCTA")}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-200 dark:bg-gray-900 ">
        <div className="container sm:max-w-5xl">
          <div className="flex flex-col mx-4 mt-6 sm:mt-7">
            <h2 className="mb-3 text-2xl font-bold tracking-wide font-playfair sm:text-3xl">
              {t("main:aboutTitle")}
            </h2>
            <p className="mb-3 sm:text-lg">
              {t("main:aboutIntro")}
              <span className="font-semibold"> {t("main:aboutDegree")} </span>
              {t("main:aboutTransition")}
              <span className="font-semibold">
                {" "}
                {t("main:aboutUniverse")}
              </span>. {t("main:aboutKnowledge")}
            </p>
            <p className="mb-3 sm:text-lg">{t("main:aboutBuild")}</p>

            <p className="mb-3 sm:text-lg">{t("main:aboutCare")}</p>

            <p className="mb-3 sm:text-lg">{t("main:aboutUse")}</p>
            <p className="mb-3 sm:text-lg">{t("main:aboutSpeak")}</p>
            {/* <p className="mb-3 sm:text-lg">{t("main:aboutHobby")}</p> */}
            <p className="mb-3 font-semibold sm:text-lg">
              {t("main:aboutLearningIntro")}
            </p>
            <p className="mb-3 sm:text-lg">
              <span className="font-medium">
                <a
                  className="text-amber-700 dark:text-amber-500 hover:dark:text-amber-300 hover:text-amber-500"
                  href="https://epicreact.dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("main:aboutWorkshopEpicReact")} {}
                </a>
              </span>
              {t("main:aboutEpicReactStatus")}
              <span className="font-medium">
                <a
                  className="text-amber-700 dark:text-amber-500 hover:dark:text-amber-300 hover:text-amber-500"
                  href="https://epicreact.dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("main:aboutWorkshopTestingJS")}
                </a>
              </span>
              {} {t("main:aboutTestingJSStatus")}
            </p>
            <p className="mb-3 font-semibold sm:text-lg">
              {t("main:aboutReadingIntro")}
            </p>
            <p className="mb-3 sm:text-lg">
              <span className="font-medium">
                {t("main:aboutReadingComposing")}
              </span>
              {t("main:aboutReadingComposingStatus")}
              <span className="font-medium">
                {t("main:aboutReadingStartup")}{" "}
              </span>
              {t("main:aboutReadingStartupStatus")}
            </p>
            <p className="mb-3 sm:text-lg">
              <span className="font-medium">
                {t("main:aboutReadingChoice")}
              </span>
              {t("main:aboutReadingChoiceStatus")}
              <span className="font-medium">
                {t("main:aboutReadingFluent")}
              </span>
              {t("main:aboutReadingFluentStatus")}
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
              {t("main:projectsTitle")}
            </h2>
            <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-8 ">
              {projects?.map((project) => (
                <React.Fragment key={project.id}>
                  <Project {...project.data} mdxSource={project.mdxSource} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const projectsPath = folderPath("projects");
  const projectFilesPath = filesPath(projectsPath);

  const projects = await Promise.all(
    projectFilesPath.map(async (filePath) => {
      const source = fs.readFileSync(path.join(projectsPath, filePath));

      const { content, data } = matter(source);

      const mdxSource = await serialize(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
        scope: data,
      });

      return {
        content,
        data,
        mdxSource,
      };
    })
  );

  projects.sort((p1, p2) => p1.data.id - p2.data.id);
  return {
    props: {
      projects,
    },
  };
}
