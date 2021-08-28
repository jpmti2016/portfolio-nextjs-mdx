import { useState } from "react";

export default function Subscribe({ className, ...rest }) {
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
      className={`relative p-4 mt-10 rounded-sm sm:p-8 sm:mt-20 ring-1 ring-gray-200 dark:ring-gray-50 ${className}`}
      onSubmit={subscribe}
    >
      <h2 className={"mb-1 font-bold text-lg sm:text-2xl"}>
        Keep me in the loop!
      </h2>

      <div className="relative w-full my-4">
        <input
          className={"w-full rounded-sm h-11 placeholder-gray-900"}
          autoComplete="email"
          type="email"
          placeholder="janedoe@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={
            "absolute flex items-center justify-center px-3 h-9 font-bold capitalize rounded-r-sm shadow-lg right-1 top-1 sm:w-28 text-blue-200 hover:text-blue-900 hover:bg-blue-600 dark:hover:text-gray-900 dark:hover:bg-blue-600 bg-blue-900"
          }
          type="submit"
          value={state === "LOADING" ? "Loading" : "Subscribe"}
        />
      </div>

      {state?.success ? (
        <p className={""}>{state?.message}</p>
      ) : (
        <p className={"text-red-500"}>{state?.message}</p>
      )}
    </form>
  );
}
