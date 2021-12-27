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
    <div className="flex flex-col p-4 bg-gray-200 shadow-lg dark:bg-gray-900 sm:p-8">
      <div>
        <h3 className="mb-1 text-xl font-semibold sm:text-3xl font-playfair">
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
              className="inline-block px-2 mb-1 mr-1 text-lg font-medium tracking-wide uppercase bg-gray-100 rounded-full md:text-xl dark:bg-gray-800 sm:mb-2"
            >
              {tech}
            </span>
          ))}
        </p>
      </div>
      <div className="mt-2 prose-lg dark:prose-p:text-gray-300 md:prose-xl dark:prose-dark dark:md:prose-xl-dark sm:mt-4 prose-p:text-gray-700 prose-code:text-gray-900 prose-pre:shadow-sm prose-img:rounded-lg prose-pre:shadow-gray-300 dark:prose-headings:text-gray-200 dark:prose-blockquote:border-l-gray-700 dark:prose-blockquote:text-gray-300 dark:prose-hr:border-gray-700 dark:prose-ol:text-gray-400 dark:prose-ul:text-gray-400 dark:prose-tr:text-gray-400 dark:prose-thead:text-gray-200 dark:prose-tr:border-b-gray-700 dark:prose-strong:text-gray-300 dark:prose-code:text-gray-200 prose-a:text-amber-800 dark:prose-a:text-amber-500 hover:dark:prose-a:text-amber-300 hover:prose-a:text-amber-500 sm:max-w-3xl">
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </div>
      <div className="mt-4 text-lg md:text-xl sm:pt-6 sm:text-base sm:mt-auto">
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
              ? "shadow-lg btn btn-gray sm:ml-8 ml-5"
              : "hidden shadow-lg btn btn-red"
          }
          href={openToPublic ? info : "#"}
          target="_blank"
          rel="noreferrer noopener"
        >
          {openToPublic ? "Info" : "Private"}
        </a>
        <span className={openToPublic ? "hidden" : "ml-5 sm:ml-8"}>
          Private Repo
        </span>
      </div>
    </div>
  );
}
