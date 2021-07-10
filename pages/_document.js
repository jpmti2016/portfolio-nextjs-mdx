import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../utils/gtag";

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
              // strictest privacy defaults
              'ad_storage': 'denied',
              'analytics_storage': 'denied',
              // wait for gtag to load before update if it is async
              'wait_for_update': 500
            });
            // When 'ads_data_redaction' is true and 'ad_storage' is 'denied', ad click identifiers
            // sent in network requests by Google Ads and Floodlight tags will be redacted.
            // Network requests will also be sent through a cookieless domain.
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
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
