import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function Subscribe({ className, ...rest }) {
  const { t, lang } = useTranslation("common");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");

  async function subscribe(e) {
    e.preventDefault();

    setState("LOADING");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });

      const { success, message } = await res.json();

      setState({ success, message });
      setEmail("");
      if (!success) {
        throw new Error(message);
      }
    } catch (error) {
      console.log("Something went wrong");
    }
  }

  return (
    <form
      className={`relative p-4 mt-10 rounded-sm sm:p-8 sm:mt-20 ring-1 ring-gray-200 dark:ring-gray-50 sm:max-w-3xl ${className}`}
      onSubmit={subscribe}
      {...rest}
    >
      <p className="my-0 text-2xl font-semibold sm:text-3xl">
        {t("subscribeTitle")}
      </p>

      <div className="relative w-full my-4">
        <input
          className={"w-full rounded-sm h-11 placeholder-gray-900"}
          autoComplete="email"
          type="email"
          placeholder={t("subscribeInputPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={
            "absolute flex items-center justify-center px-3 h-9 font-bold capitalize rounded-r-sm shadow-lg right-1 top-1 sm:w-28 text-blue-200 hover:text-blue-900 hover:bg-blue-600 dark:hover:text-gray-900 dark:hover:bg-blue-600 bg-blue-900 umami--click--subscribe-btn"
          }
          type="submit"
          value={
            state === "LOADING"
              ? t("subscribeInputSubmitLoading")
              : t("subscribeInputSubmitText")
          }
        />
      </div>

      <p className={""}>{state?.success ? t("subscribeSuccessMessage") : ""}</p>

      <p className={"text-red-500"}>
        {state?.success === false ? t("subscribeErrorMessage") : ""}
      </p>
    </form>
  );
}
