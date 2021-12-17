import fs from "fs";
import path from "path";
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
import { useEffect } from "react";

export default function Post({ source, frontMatter, timeToRead }) {
  const { asPath } = useRouter();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

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
          <nav className="pb-4 sm:pb-6">
            <Link href="/posts">
              <a className="text-blue-500 underline hover:text-blue-700">
                Back to Blog
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
        <main className="prose md:prose-lg dark:prose-dark dark:md:prose-lg-dark sm:max-w-3xl">
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
    // add slug and timeToRead cause the are not in the front-matter data
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
