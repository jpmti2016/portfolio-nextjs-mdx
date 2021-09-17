import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../utils/gtag";
import CookieBanner from "../components/CookieBanner";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
           window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              'wait_for_update': 500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              'anonymize_ip': true
            });
          `,
            }}
          />
          <link
            rel="preload"
            href="/fonts/FiraCode-VariableFont_wght.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/PlayfairDisplay-VariableFont_wght.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/RobotoSlab-VariableFont_wght.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 font-roboto">
          <CookieBanner />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
