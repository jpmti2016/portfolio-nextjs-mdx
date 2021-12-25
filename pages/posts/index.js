import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { folderPath, filesPath } from "../../utils/mdxUtils";
import dayjs from "dayjs";
import readingTime from "reading-time";
import Subscribe from "../../components/Subscribe";
import useTranslation from "next-translate/useTranslation";

export default function Blog({ posts }) {
  const { asPath, locale } = useRouter();
  const { t, lang } = useTranslation("posts");
  const meta = {
    title:
      "Collection of posts that cover my journey around code, SEO and learning",
    description:
      "Collection of posts that cover my journey around code, SEO and learning. Yes, sometimes the best way to learn is to explain something to someone else. And revisiting that content, when you are about to forget, is when you really can learn. Then better have your things in a place easy to find and share. And this blog was born...",
    url: "https://www.jpmti2016.com/posts",
    type: "website",
    site_name: "Yampier Medina",
    image: "https://www.jpmti2016.com/images/github-jobs.jpg",
    date: "2021-07-08",
  };
  return (
    <div className="px-4 py-6 sm:flex sm:items-center sm:flex-col">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.jpmti2016.com${asPath}`}
        />
        <link rel="canonical" href={`https://www.jpmti2016.com${asPath}`} />
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
      <div>
        <h1 className="mb-4 text-4xl font-bold sm:mt-10 sm:mb-0">
          {t("blogTitle")}
        </h1>
        <Subscribe className="mb-8 sm:mb-24" locale={locale} />
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
                      <h2 className="text-xl font-semibold sm:text-3xl">
                        {post?.data?.title}
                      </h2>
                    </div>
                    <p className="text-base">
                      {`${
                        locale === "en"
                          ? `Updated ${dayjs(post?.data?.date).format(
                              "MMMM-DD-YYYY"
                            )}`
                          : `Actualizado ${dayjs(posts?.data?.date).format(
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
                    <p className="pt-4 text-base sm:text-lg">
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
