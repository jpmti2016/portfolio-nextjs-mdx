import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Image from "next/image";
import jpmti2016 from "../public/images/jpmti2016.jpeg";
import Menu from "./Menu";
import MobileButton from "./MobileButton";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { asPath } = useRouter();
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full px-4 bg-gray-200 dark:bg-gray-900 sm:items-center sm:flex sm:flex-row sm:py-6 md:px-24 md:text-xl font-fira">
      <div className="flex flex-row items-center justify-center w-full p-2 sm:w-auto">
        <Link href={{ pathname: "/", hash: "about" }}>
          <a
            className={`${
              asPath === "/#about"
                ? "nav-item sm:text-sm lg:text-xl underline rounded-full p-0 m-0"
                : "nav-item sm:text-sm lg:text-xl no-underline rounded-full p-0 m-0"
            }`}
          >
            <div className="w-8 h-8 border-2 border-gray-900 rounded-full dark:border-gray-100 sm:h-10 sm:w-10 lg:h-16 lg:w-16">
              <Image
                src={jpmti2016}
                className="rounded-full"
                layout="responsive"
                alt="Yampier Medina avatar"
              />
            </div>
          </a>
        </Link>
        <div className="flex-shrink-0 ml-2">
          <span className="block text-xl font-extrabold leading-none no-underline whitespace-no-wrap sm:inline lg:text-3xl lg:leading-tight">
            jpmti2016
          </span>
        </div>
        <button
          aria-label="toggle dark mode"
          className="ml-4 font-semibold rounded-full sm:ml-8 dark:text-yellow-600 dark:hover:text-yellow-400 dark:bg-gray-900 hover:text-gray-600"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "dark" ? (
            <SunIcon className="w-5 h-5 sm:h-8 sm:w-8" />
          ) : (
            <MoonIcon className="w-5 h-5 sm:h-8 sm:w-8" />
          )}
        </button>
        <MobileButton setToggled={setToggled} toggled={toggled} />
      </div>

      <Menu setToggled={setToggled} toggled={toggled} />
    </nav>
  );
}
