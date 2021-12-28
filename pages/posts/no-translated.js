import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { folderPath, filesPath } from "../../utils/mdxUtils";
import dayjs from "dayjs";
import readingTime from "reading-time";
import useTranslation from "next-translate/useTranslation";

export default function NoTranslated({ posts }) {
  const { asPath, locale } = useRouter();
  const { t, lang } = useTranslation("posts");
  return (
    <div className="px-4 py-6 sm:flex sm:items-center sm:flex-col">
      <Head>
        {/* Primary Meta Tags */}
        <title>{t("postNotFound")}</title>
        <link rel="canonical" href={`https://jpmti2016.com${asPath}`} />
        <meta name="description" content={t("postNotFound")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
      </Head>
      <div className="sm:max-w-3xl">
        <h1 className="mb-4 font-bold sm:mt-10 sm:mb-10">{t("blogTitle")}</h1>
        <p className="mb-4 font-bold text-red-700 dark:text-red-200 sm:mt-10 sm:mb-0">
          {t("postNotFound")}
        </p>

        <h2 className="mt-4 sm:mt-8">{t("postNotFoundFallback")}</h2>

        {/* <Subscribe className="mb-8 sm:mb-24" locale={locale} /> */}
        <div className="space-y-6 sm:space-y-20">
          {posts?.map((post) => (
            <div
              key={post?.filePath}
              className="p-4 no-underline bg-gray-200 rounded-md shadow-xl sm:max-w-3xl sm:p-10 dark:bg-gray-600/10"
            >
              <Link href={`/posts/${post?.filePath.replace(/\.mdx?$/, "")}`}>
                <a className="no-underline">
                  <div className="">
                    <div>
                      <h2 className="my-0 font-semibold">
                        {post?.data?.title}
                      </h2>
                    </div>
                    <p className="my-0">
                      {`${
                        locale === "en"
                          ? `Updated ${dayjs(post?.data?.date).format(
                              "MM-DD-YYYY"
                            )}`
                          : `Actualizado ${dayjs(post?.data?.date).format(
                              "DD-MM-YYYY"
                            )}`
                      } | ${
                        locale === "en"
                          ? post?.timeToRead?.text
                          : `${Math.ceil(
                              post?.timeToRead?.minutes
                            )} min de lectura`
                      }`}
                    </p>
                    <p className="pt-4 my-0 line-clamp-5">
                      {post?.data?.description}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function getStaticProps({ locale }) {
  const postsPath = folderPath("posts");
  const postFilesPath = filesPath(postsPath);

  //To show only the posts for the current locale
  const localeFilesPath = postFilesPath.filter((withLocale) =>
    withLocale.includes(`.${locale}.mdx`)
  );

  const posts = localeFilesPath.map((filePath) => {
    const source = fs.readFileSync(path.join(postsPath, filePath));
    const { content, data } = matter(source);
    const stats = readingTime(content);

    return {
      data,
      filePath: filePath.replace(/\.es.mdx?$|.en.mdx?$/, ""),
      timeToRead: stats,
    };
  });

  return {
    props: { posts },
  };
}
