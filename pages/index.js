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
    type: "website",
    site_name: "Yampier Medina",
    image: "https://jpmti2016.com/images/home-page.jpg",
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
        {/* Primary Meta Tags */}
        <title>{t("metaTitle")}</title>
        <link rel="canonical" href={`https://jpmti2016.com${asPath}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="follow, index" />
        {meta.date && (
          <meta name="description" content={t("metaDescription")} />
        )}
        <meta property="article:published_time" content={meta.date} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={`https://jpmti2016.com${asPath}`} />
        <meta property="og:title" content={t("metaTitle")} />
        <meta property="og:description" content={t("metaDescription")} />
        <meta property="og:site_name" content={meta.site_name} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={t("metaTitle")} />
        {/* Open Graph / Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jpmti2016" />
        <meta name="twitter:title" content={t("metaTitle")} />
        <meta name="twitter:description" content={t("metaDescription")} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      {/* Welcome */}
      <section id="welcome" className="bg-gray-100 dark:bg-gray-800">
        <div className="flex pt-20 pb-32 sm:pt-0">
          <div className="container text-center sm:py-14 md:py-16 xl:py-[18] sm:max-w-4xl">
            <p className="mb-2 font-normal sm:text-2xl font-playfair">
              {t("greeting")}
            </p>
            <h1 className="my-0 mb-2 text-xl font-normal sm:text-3xl font-roboto">
              {t("main:fullName")}
            </h1>
            <h2 className="my-0 mb-3 text-3xl font-extrabold tracking-wide sm:text-5xl sm:mb-6 font-playfair">
              {t("main:position")}
            </h2>
            <p className="mb-10 font-normal leading-8 font-fira sm:leading-10">
              {t("main:techs")}
            </p>
            <p className="my-0 mb-2 text-xl font-semibold tracking-wide font-playfair">
              {t("main:jobStatus")}
            </p>
            <p className="my-0 mb-4 leading-8 font-fira">
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
      <section id="about" className="leading-7 bg-gray-200 dark:bg-gray-900">
        <div className="container sm:max-w-5xl">
          <div className="flex flex-col mx-4 mt-6 sm:mt-7">
            <h2 className="mb-3 font-bold tracking-wide font-playfair sm:mb-8">
              {t("main:aboutTitle")}
            </h2>
            <p className="mb-3">
              {t("main:aboutIntro")}
              <span className="font-semibold"> {t("main:aboutDegree")} </span>
              {t("main:aboutTransition")}
              <span className="font-semibold">
                {" "}
                {t("main:aboutUniverse")}
              </span>. {t("main:aboutKnowledge")}
            </p>
            <p className="mb-3">{t("main:aboutBuild")}</p>

            <p className="mb-3">{t("main:aboutCare")}</p>

            <p className="mb-3">{t("main:aboutUse")}</p>
            <p className="mb-3">{t("main:aboutSpeak")}</p>
            <p className="mb-3 font-semibold">{t("main:aboutLearningIntro")}</p>
            <p className="mb-3">
              <span className="font-medium">
                <a
                  className="text-amber-800 dark:text-amber-600 hover:dark:text-amber-300 hover:text-amber-500"
                  href="https://epicreact.dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("main:aboutWorkshopEpicReact")} {""}
                </a>
              </span>
              {t("main:aboutEpicReactStatus")}
              <span className="font-medium">
                <a
                  className="text-amber-800 dark:text-amber-600 hover:dark:text-amber-300 hover:text-amber-500"
                  href="https://epicreact.dev/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {t("main:aboutWorkshopTestingJS")}
                </a>
              </span>
              {} {t("main:aboutTestingJSStatus")}
            </p>
            <p className="mb-3 font-semibold">{t("main:aboutReadingIntro")}</p>
            <p className="mb-3">
              <span className="font-medium">
                {t("main:aboutReadingComposing")}
              </span>
              {t("main:aboutReadingComposingStatus")}
              <span className="font-medium">
                {t("main:aboutReadingStartup")}{" "}
              </span>
              {t("main:aboutReadingStartupStatus")}
            </p>
            <p className="mb-3">
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
            <h2 className="mb-3 font-bold tracking-wide font-playfair sm:mb-8">
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

export async function getStaticProps({ locale }) {
  const projectsPath = folderPath("projects");
  const projectFilesPath = filesPath(projectsPath);

  const localeFilePathRegex = `.${locale}.mdx?$`;

  const projects = await Promise.all(
    projectFilesPath
      .filter((filePath) => filePath.match(localeFilePathRegex))
      .map(async (filePath) => {
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
