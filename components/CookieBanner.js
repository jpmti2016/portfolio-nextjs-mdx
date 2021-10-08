import { useState } from "react";
import CookieBannerItem from "./CookieBannerItem";
import {
  acceptAnalytics,
  acceptMarketing,
  acceptFunctional,
  acceptAll,
  rejectAll,
} from "../utils/gtag";
import { useLocalStorageState } from "../utils/useLocalStorage";

const cookiesList = [
  {
    id: "",
    classification: "necessary",
    label: "Strictly Necessary",
    intro: `Necessary cookies are crucial for the basic functions of the website and the website will not work in its intended way without them. These cookies do not store any personally identifiable data.`,
    domains: ["as.com", "abc.com"],
    cookies: [
      {
        name: "cookie1",
        use: "3rd party",
        duration: "1 year",
        domains: ["domain.com", "other-domain.com"],
      },
      {
        name: "cookie2",
        use: "1rd party",
        duration: "2 year",
        domains: ["domain.com", "other-domain.com"],
      },
      {
        name: "cookie3",
        use: "3rd party",
        duration: "3 year",
        domains: ["domain.com", "other-domain.com"],
      },
    ],
  },
  {
    id: "",
    classification: "functional",
    label: "Functional",
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem architecto cumque nesciunt consequuntur fugiat!`,
    cookies: [
      {
        name: "cookie1",
        use: "3rd party",
        duration: "1 year",
        domains: ["domain.com", "other-domain.com"],
      },
      {
        name: "cookie2",
        use: "1rd party",
        duration: "2 year",
        domains: ["domain.com", "other-domain.com"],
      },
      {
        name: "cookie3",
        use: "3rd party",
        duration: "3 year",
        domains: ["domain.com", "other-domain.com"],
      },
    ],
  },
  {
    id: "",
    classification: "analytics",
    label: "Analytics",
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem architecto cumque nesciunt consequuntur fugiat!`,
    domains: ["as.com", "abc.com"],
    cookies: [
      {
        name: "cookie1",
        use: "3rd party",
        duration: "1 year",
        domains: ["domain.com", "other-domain.com"],
      },
      {
        name: "cookie2",
        use: "1rd party",
        duration: "2 year",
        domains: ["domain.com", "other-domain.com"],
      },
      {
        name: "cookie3",
        use: "3rd party",
        duration: "3 year",
        domains: ["domain.com", "other-domain.com"],
      },
    ],
  },
  {
    id: "",
    classification: "advertising",
    label: "Advertising",
    intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem architecto cumque nesciunt consequuntur fugiat!`,
    domains: ["as.com", "abc.com"],
    cookies: [
      {
        name: "cookie1",
        use: "3rd party",
        duration: "1 year",
        domains: ["domain.com", "other-domain.com"],
      },
      {
        name: "cookie2",
        use: "1rd party",
        duration: "2 year",
        domains: ["domain.com", "other-domain.com"],
      },
      {
        name: "cookie3",
        use: "3rd party",
        duration: "3 year",
        domains: ["domain.com", "other-domain.com"],
      },
    ],
  },
];

const CookieItems = ({ setConsented }) => {
  const [necessary, setNecessary] = useState(true);
  const [functional, setFunctional] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);

  const confirmChoices = () => {
    // necessary cookies are mandatory
    // cannot be updated
    // must be accepted as a prerequisite
    // to use the service / website

    const updatedConsent = {
      consent: false,
      analytics: false,
      advertising: false,
      functional: false,
    };

    if (functional) {
      acceptFunctional();
      updatedConsent.functional = true;
    }

    if (analytics) {
      acceptAnalytics();
      updatedConsent.analytics = true;
    }

    if (advertising) {
      acceptMarketing();
      updatedConsent.advertising = true;
    }

    updatedConsent.consent = true;

    setConsented(updatedConsent);
  };

  const closeConsentForm = () => {
    console.log("close consent form");
    setAnalytics(false);
    setFunctional(false);
    setAdvertising(false);

    setConsented({
      consent: true,
      analytics: false,
      advertising: false,
      functional: false,
    });
  };

  const items = () => {
    return cookiesList.map((cookieItem) => {
      return (
        <CookieBannerItem
          classification={cookieItem?.classification}
          intro={cookieItem?.intro}
          label={cookieItem?.label}
          key={cookieItem?.classification}
          cookies={cookieItem?.cookies}
          setAdvertising={setAdvertising}
          advertising={advertising}
          setAnalytics={setAnalytics}
          analytics={analytics}
          setFunctional={setFunctional}
          functional={functional}
          necessary={necessary}
        />
      );
    });
  };

  return (
    <>
      {items()}
      <div className="flex flex-col mt-4 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex-row">
        <button
          onClick={() => confirmChoices()}
          className="px-1 py-1 text-xs font-normal tracking-normal uppercase bg-blue-700 rounded-sm sm:px-2 sm:text-sm font-fira sm:w-52 text-blue-50"
        >
          Confirm my Choices
        </button>
        <button
          onClick={() => acceptAll()}
          className="px-1 py-1 text-xs font-normal tracking-normal text-blue-700 uppercase bg-blue-100 border border-blue-700 rounded-sm sm:w-52 sm:px-2 sm:text-sm font-fira"
        >
          Accept all Cookies
        </button>
        <button
          onClick={() => closeConsentForm()}
          className="px-1 py-1 text-xs font-normal tracking-normal text-blue-700 uppercase bg-gray-100 border border-gray-700 rounded-sm sm:px-2 sm:text-sm font-fira"
        >
          Cancel
        </button>
      </div>
    </>
  );
};
export default function CookieBanner({
  initialConsent = {
    consent: false,
    analytics: false,
    marketing: false,
    functional: false,
  },
}) {
  const [consented, setConsented] = useLocalStorageState(
    "consented",
    initialConsent
  );
  const [details, setDetails] = useState(true);

  const handleRejectAll = () => {
    setConsented({
      consent: true,
      analytics: false,
      advertising: false,
      functional: false,
    });

    rejectAll();
  };

  const handleAcceptAll = () => {
    setConsented({
      consent: true,
      analytics: true,
      advertising: true,
      functional: true,
    });

    acceptAll();
  };

  return consented?.consent ? (
    ""
  ) : (
    <div className="fixed bottom-[0] z-50 flex flex-col bg-gray-300 border-t-2 dark:bg-gray-900 border-gray-500 min-w-[320px] overflow-auto p-4 text-sm sm:w-full max-h-60">
      <div id="banner-header" className="flex flex-col items-center w-full">
        <div className="max-w-3xl py-2 sm:py-4">
          By clicking “Accept All”, you consent to our website's use of cookies
          to give you the most relevant experience by remembering your
          preferences and repeat visits. However, you may visit “Cookie
          Settings” to provide controlled consent.
        </div>
        <div className="flex space-x-2 sm:space-x-4 min-w-[320px] mb-4">
          <button
            className="flex p-1 text-xs font-medium tracking-normal text-blue-700 dark:text-blue-400 sm:text-sm font-fira"
            onClick={() => setDetails((prev) => !prev)}
          >
            <span className="pr-2 uppercase">Customize</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => handleRejectAll()}
            className="inline-block px-1 py-1 text-xs font-normal tracking-normal uppercase bg-blue-700 rounded-sm sm:px-2 sm:text-sm font-fira text-blue-50"
          >
            Reject All
          </button>
          <button
            onClick={() => handleAcceptAll()}
            className="inline-block px-1 py-1 text-xs font-normal tracking-normal uppercase bg-blue-700 rounded-sm sm:px-2 sm:text-sm font-fira text-blue-50"
          >
            Accept All
          </button>
        </div>
      </div>
      <div
        id="details"
        className={
          details ? "flex justify-center items-center w-full" : "hidden"
        }
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <CookieItems setConsented={setConsented} />
          </div>
        </div>
      </div>
    </div>
  );
}
