import Nav from "../components/Nav";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/solid";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div id="welcome">
      <Nav />
      <main className="min-h-screen sm:py-6 md:">{children}</main>
      <Footer />
      <div className="fixed z-10 p-1 bg-gray-300 rounded-sm bottom-4 right-4 dark:bg-gray-700">
        <Link href="#welcome">
          <a className="" aria-label="back to top">
            <ArrowUpIcon className="w-4 h-4 sm:h-10 sm:w-10" />
          </a>
        </Link>
      </div>
    </div>
  );
}
