import { NextSeo } from "next-seo";

export default function Blog() {
  return (
    <div>
      <NextSeo
        title="Amazing blog title"
        description="Amazing blog description"
        url="https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/posts"
        image="https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/github-jobs.jpg"
        openGraph={{
          url: "https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/posts",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/personal-portfolio.jpg",
              alt: "Og Image Alt Second",
            },
            {
              url: "https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/natureatyourfeet.jpg",
              alt: "Og Image Alt",
            },
            {
              url: "https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/trackingmyfinance.jpg",
            },
            {
              url: "https://portfolio-nextjs-mdx-kcjeqcm0m-jpmti2016.vercel.app/image-galery.jpg",
            },
          ],
          site_name: "SiteName",
        }}
      />
      Blog
    </div>
  );
}
