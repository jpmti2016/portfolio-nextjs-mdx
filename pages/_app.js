import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Script from "next/script";

export function reportWebVitals(metric) {
  const { label } = metric;

  if (label === "web-vital") {
    const webVitalServerDest = `${process.env.NEXT_PUBLIC_WEBVITAL_URL}/api/collect`;

    const url = window.location.pathname;

    const { id, label, name, startTime, value } = metric;

    const data = {
      webvital_id: id,
      label,
      name,
      start_time: startTime,
      value,
      url,
    };

    const body = JSON.stringify(data);

    if (navigator.sendBeacon) {
      navigator.sendBeacon(webVitalServerDest, body);
    } else {
      fetch(webVitalServerDest, { body, method: "POST", keepalive: true });
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
