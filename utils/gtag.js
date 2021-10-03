export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

//https://developers.google.com/tag-platform/devguides/consent#global-site-tag
export const rejectAll = () => {
  console.log("reject all");
  window.gtag("consent", "default", {
    "ad_storage": "denied",
    "analytics_storage": "denied",
    "wait_for_update": 500,
  });
  window.gtag("set", "ads_data_redaction", true);
  window.gtag("js", new Date());
  window.gtag("config", `${GA_TRACKING_ID}`, {
    page_path: window.location.pathname,
    "anonymize_ip": true,
  });
};

export const acceptAll = () => {
  console.log("accept all");
  window.gtag("consent", "update", {
    "ad_storage": "granted",
    "analytics_storage": "granted",
  });
  window.gtag("set", "ads_data_redaction", false);
  window.gtag("config", `${GA_TRACKING_ID}`, {
    page_path: window.location.pathname,
    "anonymize_ip": false,
  });
};

export const acceptAnalytics = () => {
  console.log("confirm analytics");
  window.gtag("consent", "update", {
    "analytics_storage": "granted",
  });
};

export const acceptMarketing = () => {
  console.log("confirm marketing");
  window.gtag("consent", "update", {
    "ad_storage": "granted",
  });
  window.gtag("set", "ads_data_redaction", false);
};

export const acceptFunctional = () => {
  console.log("confirm functional");
  // save cookie user selection state
};
