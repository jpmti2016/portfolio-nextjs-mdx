import fs from "fs";
import path from "path";
import Link from "next/link";
import Head from "next/head";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import MDXComponents from "../../components/MDXComponents";
import readingTime from "reading-time";

export default function Post({ source, frontMatter, timeToRead }) {
  const { asPath } = useRouter();

  return (
    <div className="px-4 py-10 sm:flex sm:items-center sm:flex-col">
      <Head>
        <title>{frontMatter?.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={frontMatter?.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.jpmti2016.com/${asPath}`}
        />
        <link rel="canonical" href={`https://www.jpmti2016.com/${asPath}`} />
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
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  const stats = readingTime(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      timeToRead: stats,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
