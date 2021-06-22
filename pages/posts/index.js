import { NextSeo } from "next-seo";

export default function Blog() {
  return (
    <div>
      <NextSeo
        title="Amazing blog title"
        description="Amazing blog description"
        url="https://portfolio-nextjs-mdx.vercel.app/posts"
        image="https://portfolio-nextjs-mdx.vercel.app/github-jobs.jpg"
        openGraph={{
          url: "https://portfolio-nextjs-mdx.vercel.app/posts",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://portfolio-nextjs-mdx.vercel.app/images/personal-portfolio.jpg",
              alt: "Og Image Alt Second",
            },
            {
              url: "https://portfolio-nextjs-mdx.vercel.app/images/natureatyourfeet.jpg",
              alt: "Og Image Alt",
            },
            {
              url: "https://portfolio-nextjs-mdx.vercel.app/images/trackingmyfinance.jpg",
            },
            {
              url: "https://portfolio-nextjs-mdx.vercel.app/images/image-galery.jpg",
            },
          ],
          site_name: "SiteName",
        }}
      />
      Blog
    </div>
  );
}
