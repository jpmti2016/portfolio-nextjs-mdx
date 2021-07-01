import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

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
    <div className="px-4 py-10 sm:px-20">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.jpmti2016.com/${asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.jpmti2016.com/${asPath}`}
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
      Blog
      {posts?.map((post) => (
        <li key={post?.filePath}>
          <Link href={`/posts/${post?.filePath.replace(/\.mdx?$/, "")}`}>
            <a className="text-blue-500 underline hover:text-blue-700">
              {post?.data?.title}
            </a>
          </Link>
        </li>
      ))}
    </div>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return {
    props: { posts },
  };
}
