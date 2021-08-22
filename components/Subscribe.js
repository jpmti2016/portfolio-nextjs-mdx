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
      className={`relative p-4 mt-10 rounded-sm sm:p-8 sm:mt-20 ring ${className}`}
      onSubmit={subscribe}
    >
      <h2 className={"mb-1 font-bold text-lg sm:text-2xl"}>
        Keep me in the loop!
      </h2>

      <div className="relative w-full my-4">
        <input
          className={"w-full px-4 py-2 mt-1  rounded-md"}
          autoComplete="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={
            "absolute flex items-center justify-center h-8 px-2 font-bold capitalize rounded-r-sm shadow-lg sm:h-9 right-1 top-2 sm:w-28 hover:bg-blue-200 dark:hover:text-gray-900 dark:hover:bg-blue-400 bg-blue-600"
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
