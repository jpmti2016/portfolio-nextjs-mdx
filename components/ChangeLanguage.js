import Link from "next/link";
import i18Config from "../i18n.json";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const { locales } = i18Config;

export default function ChangeLanguage() {
  const { t, lang } = useTranslation();
  const { asPath } = useRouter();

  return locales.map((lng) => {
    if (lng === lang) return null;

    return (
      <Link
        href={asPath === "/posts/no-translated" ? "/" : asPath}
        locale={lng}
        key={lng}
        className=""
      >
        <a className="flex items-center px-1 ml-4 rounded-md ring-1 ring-gray-800 dark:ring-gray-100 hover:text-gray-100 hover:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-7 sm:h-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
              clipRule="evenodd"
            />
          </svg>
          <span>{lng.toUpperCase()}</span>
        </a>
      </Link>
    );
  });
}
