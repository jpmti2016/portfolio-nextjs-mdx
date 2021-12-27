import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import ChangeLanguage from "./ChangeLanguage";

export default function Menu({ toggled, setToggled }) {
  const { asPath } = useRouter();
  const { t, lang } = useTranslation("common");

  return (
    <div
      className={`sm:flex sm:flex-row sm:space-x-2 ml-auto items-center text-xl ${
        toggled ? "" : "hidden"
      }`}
    >
      <div className="hidden sm:block">
        <ChangeLanguage />
      </div>
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "welcome" }}>
          <a
            className={`${
              asPath === "/#welcome" || asPath === "/"
                ? "underline nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkHome")}
          </a>
        </Link>
      </div>
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "projects" }}>
          <a
            className={`${
              asPath === "/#projects"
                ? "underline nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkProjects")}
          </a>
        </Link>
      </div>
      <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href="/posts">
          <a
            className={`${
              asPath.includes("posts")
                ? "underline nav-item"
                : "no-underline nav-item"
            }`}
          >
            {t("navLinkBlog")}
          </a>
        </Link>
      </div>

      {/* <div className="p-2" onClick={() => setToggled((prev) => !prev)}>
        <Link href={{ pathname: "/", hash: "about" }}>
          <a
            className={`${
              asPath === "/#about"
                ? "underline nav-item sm:text-sm lg:text-xl"
                : "no-underline nav-item sm:text-sm lg:text-xl"
            }`}
          >
            {t("navLinkAbout")}
          </a>
        </Link>
      </div> */}
    </div>
  );
}
