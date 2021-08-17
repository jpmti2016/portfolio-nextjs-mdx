import Link from "next/link";
import Image from "next/image";
import Subscribe from "./Subscribe";

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

const Notice = ({ children, ...otherProps }) => (
  <p {...otherProps}>{children}</p>
);

const MDXComponents = {
  Image,
  a: CustomLink,
  Notice,
  Subscribe,
};

export default MDXComponents;
