import fs from "fs";
import path from "path";
import Link from "next/link";
import Head from "next/head";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

export default function Post({ source, frontMatter }) {
  return (
    <div className="px-4 py-10 sm:px-20">
      <header>
        <nav>
          <Link href="/posts">
            <a className="text-blue-500 underline hover:text-blue-700">
              Back to Posts
            </a>
          </Link>
        </nav>
      </header>
      <div className="py-4">
        <h1 className="text-lg font-bold sm:text-5xl">{frontMatter.title}</h1>
        <p>{frontMatter?.description}</p>
      </div>
      <main className="prose md:prose-lg dark:prose-dark dark:md:prose-lg-dark">
        <MDXRemote {...source} />
      </main>
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

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
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
