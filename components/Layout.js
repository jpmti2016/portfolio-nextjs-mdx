import Nav from "../components/Nav";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/solid";

export default function Layout({ children }) {
  return (
    <div id="top">
      <Nav />
      <main>{children}</main>
      <div className="fixed z-10 p-1 bg-gray-200 rounded-sm bottom-4 right-4 dark:bg-gray-700">
        <Link href="#top">
          <a className="">
            <ArrowUpIcon className="w-4 h-4 sm:h-10 sm:w-10" />
          </a>
        </Link>
      </div>
    </div>
  );
}
