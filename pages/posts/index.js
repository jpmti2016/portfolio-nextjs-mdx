import { NextSeo } from "next-seo";

export default function Blog() {
  return (
    <div>
      <NextSeo
        title="Amazing blog title"
        description="Amazing blog description"
        url="https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/posts"
        image="https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/github-jobs.jpg"
      />
      Blog
    </div>
  );
}
