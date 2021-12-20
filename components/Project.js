import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import MDXComponents from "./MDXComponents";

export default function Project({
  title,
  image,
  stack,
  demo,
  info,
  mdxSource,
  openToPublic,
}) {
  return (
    <div className="flex flex-col p-4 bg-gray-200 shadow-lg dark:bg-gray-900 sm:p-4">
      <div>
        <h3 className="mb-1 text-xl font-semibold leading-tight font-playfair">
          {title}
        </h3>
        <div className="my-3 rounded-lg shadow-2xl sm:my-4 sm:w-full">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src={image}
            alt="css grid album"
            layout="responsive"
            width="700"
            height="500"
          />

          {/* <Image src={image} alt="css grid album" layout="responsive" /> */}
        </div>
        <p className="inline-block font-fira">
          {stack?.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2 mr-1 text-xs font-semibold tracking-wide uppercase bg-gray-100 rounded-full dark:bg-gray-800 sm:mb-1"
            >
              {tech}
            </span>
          ))}
        </p>
      </div>
      <div className="mt-2 prose dark:prose-p:text-gray-300 md:prose-lg dark:prose-dark dark:md:prose-lg-dark sm:mt-4">
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </div>
      <div className="mt-4 text-sm sm:pt-6 sm:text-base sm:mt-auto">
        <a
          className="shadow-lg btn btn-blue"
          href={demo}
          target="_blank"
          rel="noreferrer noopener"
        >
          Demo
        </a>
        <a
          className={
            openToPublic
              ? "shadow-lg btn btn-gray"
              : "hidden shadow-lg btn btn-red"
          }
          href={openToPublic ? info : "#"}
          target="_blank"
          rel="noreferrer noopener"
        >
          {openToPublic ? "Info" : "Private"}
        </a>
        <span className={openToPublic ? "hidden" : "ml-2"}>Private Repo</span>
      </div>
    </div>
  );
}
