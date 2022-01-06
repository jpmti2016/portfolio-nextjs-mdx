import Link from "next/link";
import Image from "next/image";

import {
  SimpleCounter,
  InitialCounterAlmostThere,
  BugReproduced,
  FinishedCounter,
  KeyPropReset,
} from "./components";

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Notice = ({
  className,
  title = "Attention needed",
  children,
  ...otherProps
}) => (
  <div
    className={`not-prose mb-1 bg-red-200 p-4 sm:p-10 text-red-800 font-medium ${className}`}
    {...otherProps}
  >
    <div className="flex flex-row items-center mb-2 font-bold sm:mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <p className="ml-1 sm:ml-2">{title}</p>
    </div>
    <div className="">{children}</div>
  </div>
);

const MDXComponents = {
  Image,
  a: CustomLink,
  Notice,
  SimpleCounter,
  InitialCounterAlmostThere,
  BugReproduced,
  FinishedCounter,
  KeyPropReset,
};

export default MDXComponents;
