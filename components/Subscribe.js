import { useState } from "react";

export default function Subscribe({ className, locale, ...rest }) {
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
      <h2 className={"mb-1 font-bold text-lg sm:text-2xl"}>
        {locale === "en" ? "Keep me in the loop!" : "Manténme actualizado"}
      </h2>

      <div className="relative w-full my-4">
        <input
          className={"w-full rounded-sm h-11 placeholder-gray-900"}
          autoComplete="email"
          type="email"
          placeholder={
            locale === "en" ? "jhondoe@email.com" : "luisma@email.com"
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={
            "absolute flex items-center justify-center px-3 h-9 font-bold capitalize rounded-r-sm shadow-lg right-1 top-1 sm:w-28 text-blue-200 hover:text-blue-900 hover:bg-blue-600 dark:hover:text-gray-900 dark:hover:bg-blue-600 bg-blue-900"
          }
          type="submit"
          value={
            state === "LOADING"
              ? locale === "en"
                ? "Loading"
                : "Cargando"
              : locale === "en"
              ? "Subscribe"
              : "Suscríbeme"
          }
        />
      </div>

      <p className={""}>
        {state?.success
          ? locale === "en"
            ? state?.message
            : "Genial, gracias por la suscripción!"
          : ""}
      </p>

      <p className={"text-red-500"}>
        {state?.success === false
          ? locale === "en"
            ? state?.message
            : "Algo ha salido mal. Por favor envía un email a jpmti2016@gmail.com y te añado personalmente."
          : ""}
      </p>
    </form>
  );
}
