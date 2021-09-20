import { useState } from "react";
import CookieBannerItem from "./CookieBannerItem";

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
];

const cookieItems = () => {
  return cookiesList.map((cookieItem) => {
    return (
      <CookieBannerItem
        classification={cookieItem.classification}
        intro={cookieItem.intro}
        label={cookieItem.label}
        key={cookieItem.classification}
        cookies={cookieItem.cookies}
      />
    );
  });
};
export default function CookieBanner() {
  const [details, setDetails] = useState(true);
  return (
    <div className="fixed bottom-[0] z-50 flex flex-col bg-gray-300 border-t-2 border-gray-500 min-w-[320px] overflow-auto p-4 text-sm sm:w-full max-h-60">
      <div id="banner-header" className="flex flex-col items-center w-full">
        <div className="max-w-3xl py-2 sm:py-4">
          By clicking “Accept All”, you consent to our website's use of cookies
          to give you the most relevant experience by remembering your
          preferences and repeat visits. However, you may visit “Cookie
          Settings” to provide controlled consent.
        </div>
        <div className="flex space-x-2 sm:space-x-4 min-w-[320px] mb-4">
          <button
            className="flex p-1 text-xs font-medium tracking-normal text-blue-700 sm:text-sm font-fira"
            onClick={() => setDetails((prev) => !prev)}
          >
            <span className="pr-2 uppercase">Customize</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-blue-700"
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
          <button className="inline-block px-1 py-1 text-xs font-normal tracking-normal uppercase bg-blue-700 rounded-sm sm:px-2 sm:text-sm font-fira text-blue-50">
            Reject All
          </button>
          <button className="inline-block px-1 py-1 text-xs font-normal tracking-normal uppercase bg-blue-700 rounded-sm sm:px-2 sm:text-sm font-fira text-blue-50">
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
          <div className="flex flex-col">{cookieItems()}</div>
        </div>
      </div>
    </div>
  );
}
