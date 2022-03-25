import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Script
        strategy="afterInteractive"
        data-website-id={process.env.NEXT_PUBLIC_DATA_WEBSITE_ID}
        src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
