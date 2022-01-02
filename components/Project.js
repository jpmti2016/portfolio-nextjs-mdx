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
        <h3 className="mb-1 font-semibold font-playfair">{title}</h3>
        <div className="my-3 shadow-lg shadow-gray-700 dark:shadow-gray-200 rounded-xl sm:my-4 sm:w-full">
          <Image
            className="absolute inset-0 object-cover w-full h-full rounded-xl"
            src={image}
            alt="css grid album"
            layout="responsive"
            width="640"
            height="360"
          />

          {/* <Image src={image} alt="css grid album" layout="responsive" /> */}
        </div>
        <p className="inline-block font-fira">
          {stack?.map((tech) => (
            <span
              key={tech}
              className="inline-block px-2 mb-1 mr-1 font-medium tracking-wide uppercase bg-gray-100 rounded-full md: dark:bg-gray-800 sm:mb-2"
            >
              {tech}
            </span>
          ))}
        </p>
      </div>
      <div className="mt-2 prose-pre:shadow-sm prose-pre:shadow-gray-300 prose-pre:bg-gray-800 prose-img:rounded-md prose-a:text-amber-800 dark:prose-a:text-amber-500 hover:dark:prose-a:text-amber-300 hover:prose-a:text-amber-500 sm:max-w-3xl">
        <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
      </div>
      <div className="mt-4 md: sm:pt-6 sm:mt-auto">
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
