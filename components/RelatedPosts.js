import Link from "next/link";
import dayjs from "dayjs";

export default function RelatedPosts({ related, locale }) {
  return (
    <div>
      {related.length > 0 && (
        <h2 className="pt-10 font-semibold">
          {locale === "en" ? "Related Posts" : "Artículos Relacionados"}
        </h2>
      )}
      {related &&
        related.map((r) => {
          return (
            <Link href={`/posts/${r?.slug}`} key={r?.slug}>
              <a className="no-underline">
                <div className="flex flex-col items-start p-4 my-10 no-underline bg-gray-200 rounded-md shadow-xl sm:max-w-3xl sm:p-10 dark:bg-gray-600/10">
                  <h2 className="font-semibold ">{r?.title}</h2>
                  <p className="">
                    {`${
                      locale === "en"
                        ? `Updated ${dayjs(r?.date).format("MMMM-DD-YYYY")}`
                        : `Actualizado ${dayjs(r?.date).format("DD-MM-YYYY")}`
                    } | ${
                      locale === "en"
                        ? r?.timeToRead?.text
                        : `${Math.ceil(r?.timeToRead?.minutes)} min de lectura`
                    }`}
                  </p>
                </div>
              </a>
            </Link>
          );
        })}
    </div>
  );
}
