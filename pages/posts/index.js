import { Head } from "next/head"
import { useRouter } from "next/router";

export default function Blog() {
  const { router } = useRouter();
  const meta = {
    title="Amazing blog title",
        description="Amazing blog description",
        url="https://portfolio-nextjs-mdx.vercel.app/posts",
        type:"website",
        site_name: "Yampier Medina",
        image:"https://portfolio-nextjs-mdx.vercel.app/images/github-jobs.jpg",
        date: '2021-07-08'
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://portfolio-nextjs-mdx.vercel.app/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://portfolio-nextjs-mdx.vercel.app/${router.asPath}`}
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
    </div>
  );
}
