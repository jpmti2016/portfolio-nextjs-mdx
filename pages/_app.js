import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Script from "next/script";

export function reportWebVitals(metric) {
  console.log("web vitals", metric);

  if (label === "web-vital") {
    const url = process.env.WEBVITAL_URL;
    const body = JSON.stringify(metric);

    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, body);
    } else {
      fetch(url, { body, method: "POST", keepalive: true });
    }
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Script
        strategy="afterInteractive"
        data-website-id="4ba2c90b-d8db-4811-a7ba-a99cdc097786"
        src="https://umami-three-neon.vercel.app/umami.js"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
