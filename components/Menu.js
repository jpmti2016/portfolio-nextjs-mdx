import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu({ toggle, setToggle, mobile = false }) {
  const { asPath } = useRouter();

  return (
    <div className={toggle ? "sm:flex sm:flex-row sm:space-x-2" : "hidden"}>
      <div
        className="p-2"
        onClick={mobile ? () => setToggle((prev) => !prev) : () => {}}
      >
        <Link href={{ pathname: "/", hash: "welcome" }}>
          <a
            className={`${
              asPath === "/#welcome"
                ? "underline nav-item sm:text-sm lg:text-xl"
                : "no-underline nav-item sm:text-sm lg:text-xl"
            }`}
          >
            Home
          </a>
        </Link>
      </div>
      <div
        className="p-2"
        onClick={mobile ? () => setToggle((prev) => !prev) : () => {}}
      >
        <Link href={{ pathname: "/", hash: "projects" }}>
          <a
            className={`${
              asPath === "/#projects"
                ? "underline nav-item sm:text-sm lg:text-xl"
                : "no-underline nav-item sm:text-sm lg:text-xl"
            }`}
          >
            Projects
          </a>
        </Link>
      </div>
      <div
        className="p-2"
        onClick={mobile ? () => setToggle((prev) => !prev) : () => {}}
      >
        <Link href="/posts">
          <a
            className={`${
              asPath === "/posts" || asPath === "/posts#top"
                ? "underline nav-item sm:text-sm lg:text-xl"
                : "no-underline nav-item sm:text-sm lg:text-xl"
            }`}
          >
            Blog
          </a>
        </Link>
      </div>
      <div
        className="p-2"
        onClick={mobile ? () => setToggle((prev) => !prev) : () => {}}
      >
        <Link href={{ pathname: "/", hash: "about" }}>
          <a
            className={`${
              asPath === "/#about"
                ? "underline nav-item sm:text-sm lg:text-xl"
                : "no-underline nav-item sm:text-sm lg:text-xl"
            }`}
          >
            About
          </a>
        </Link>
      </div>
    </div>
  );
}
