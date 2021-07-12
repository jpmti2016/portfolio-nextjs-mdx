import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/Layout";
import * as gtag from "../utils/gtag";

const isProduction = process.env.VERCEL_ENV === "production";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (isProduction) {
        gtag.pageview(url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
