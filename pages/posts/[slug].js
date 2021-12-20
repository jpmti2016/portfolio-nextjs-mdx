import fs from "fs";
import path from "path";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { filesPath, folderPath } from "../../utils/mdxUtils";
import MDXComponents from "../../components/MDXComponents";
import readingTime from "reading-time";
import Subscribe from "../../components/Subscribe";
import RelatedPosts from "../../components/RelatedPosts";

import hljs from "highlight.js";
import "highlight.js/styles/tomorrow-night-bright.css";

export default function Post({ source, frontMatter, timeToRead }) {
  const { asPath } = useRouter();

  useEffect(() => {
    hljs.highlightAll();
  }, [frontMatter]);

  return (
    <div className="px-4 py-10 sm:flex sm:items-center sm:flex-col">
      <Head>
        <title>{frontMatter?.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={frontMatter?.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.jpmti2016.com${asPath}`}
        />
        <link rel="canonical" href={`https://www.jpmti2016.com${asPath}`} />
        <meta property="og:type" content={frontMatter?.type} />
        <meta property="og:site_name" content={frontMatter?.site_name} />
        <meta property="og:description" content={frontMatter?.description} />
        <meta property="og:title" content={frontMatter?.title} />
        <meta property="og:image" content={frontMatter?.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jpmti2016" />
        <meta name="twitter:title" content={frontMatter?.title} />
        <meta name="twitter:description" content={frontMatter?.description} />
        <meta name="twitter:image" content={frontMatter?.image} />
        {frontMatter?.date && (
          <meta property="article:published_time" content={frontMatter?.date} />
        )}
      </Head>
      <div>
        <header className="sm:py-10">
          <nav className="pb-4 sm:pb-10">
            <Link href="/posts">
              <a className="font-semibold underline hover:text-gray-500 dark:hover:text-gray-400">
                <span className="">Back to Blog</span>
              </a>
            </Link>
          </nav>
          <div>
            <div>
              {`Updated ${dayjs(frontMatter?.date).format("MMMM-DD-YYYY")}`}
              {` | ${timeToRead?.text}`}
            </div>
          </div>
        </header>
        <main className="prose prose-p:text-gray-700 prose-code:text-gray-700 prose-pre:shadow-sm prose-img:rounded-lg prose-pre:shadow-gray-300 dark:prose-headings:text-gray-200 dark:prose-p:text-gray-300 dark:prose-blockquote:border-l-gray-700 dark:prose-blockquote:text-gray-300 dark:prose-hr:border-gray-700 dark:prose-ol:text-gray-400 dark:prose-ul:text-gray-400 dark:prose-tr:text-gray-400 dark:prose-thead:text-gray-200 dark:prose-tr:border-b-gray-700 dark:prose-strong:text-gray-300 dark:prose-code:text-gray-200 md:prose-lg prose-a:text-amber-700 dark:prose-a:text-amber-500 hover:dark:prose-a:text-amber-300 hover:prose-a:text-amber-500 dark:md:prose-lg-dark sm:max-w-3xl">
          <MDXRemote {...source} components={{ ...MDXComponents }} />
        </main>
        <Subscribe />
        <RelatedPosts related={frontMatter.related} />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const postsPath = folderPath("posts");
  const postFilePath = path.join(postsPath, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  //related posts

  const { related: relatedSlugs } = data;

  const relatedPostInfo = [];

  //get the data of the related posts
  for (let slug of relatedSlugs) {
    const postFilePath = path.join(postsPath, `${slug}.mdx`);
    const source = fs.readFileSync(postFilePath);
    const { content, data: relatedPost } = matter(source);
    const timeToRead = readingTime(content);
    // add slug and timeToRead cause they are not in the front-matter data
    const post = { ...relatedPost, slug, timeToRead };
    relatedPostInfo.push(post);
  }

  const cleanRelatedPostInfo = relatedPostInfo.map((post) => {
    return {
      title: post.title,
      description: post.description,
      date: post.date,
      slug: post.slug,
      timeToRead: post.timeToRead,
    };
  });

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const stats = readingTime(content);

  //change related slugs to the related posts data
  const related = cleanRelatedPostInfo;
  const withRelatedPostsData = { ...data, related };

  return {
    props: {
      source: mdxSource,
      frontMatter: withRelatedPostsData,
      timeToRead: stats,
    },
  };
};

export const getStaticPaths = async () => {
  const postsPath = folderPath("posts");
  const postFilesPath = filesPath(postsPath);

  const paths = postFilesPath
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
