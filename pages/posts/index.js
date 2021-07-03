import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import dayjs from "dayjs";
import readingTime from "reading-time";

export default function Blog({ posts }) {
  const { asPath } = useRouter();
  const meta = {
    title: "Amazing blog title",
    description: "Amazing blog description",
    url: "https://www.jpmti2016.com/posts",
    type: "website",
    site_name: "Yampier Medina",
    image: "https://www.jpmti2016.com/images/github-jobs.jpg",
    date: "2021-07-08",
  };
  return (
    <div className="px-4 py-6 sm:px-32 xl:px-48 2xl:px-56 sm:max-w-6xl">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.jpmti2016.com/${asPath}`}
        />
        <link rel="canonical" href={`https://www.jpmti2016.com/${asPath}`} />
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
      <h1 className="mb-4 text-4xl font-bold sm:mt-10 sm:mb-16">Blog</h1>
      {posts?.map((post) => (
        <div
          key={post?.filePath}
          className="p-4 no-underline bg-gray-200 rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-gray-800 dark:ring-gray-200"
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
                  {dayjs(post?.data?.lastUpdated).format("MMM-DD-YYYY")}
                  {` | ${post?.timeToRead?.text}`}
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
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);
    const stats = readingTime(content);

    return {
      content,
      data,
      filePath,
      timeToRead: stats,
    };
  });

  return {
    props: { posts },
  };
}
