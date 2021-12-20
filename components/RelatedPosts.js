import Link from "next/link";
import dayjs from "dayjs";

export default function RelatedPosts({ related }) {
  return (
    <div>
      {related.length > 0 && (
        <h2 className="pt-10 text-2xl font-semibold sm:text-4xl">
          Related Posts
        </h2>
      )}
      {related &&
        related.map((r) => {
          return (
            <Link href={`/posts/${r.slug}`} key={r.slug}>
              <a className="no-underline">
                <div className="flex flex-col items-start p-4 my-10 no-underline bg-gray-200 rounded-md shadow-xl sm:max-w-3xl sm:p-10 dark:bg-gray-600/10">
                  <h2 className="text-xl font-semibold sm:text-3xl">
                    {r.title}
                  </h2>
                  <p className="text-base">
                    {dayjs(r.date).format("MMM-DD-YYYY")}{" "}
                    {` | ${r?.timeToRead?.text}`}
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
    </div>
  );
}
