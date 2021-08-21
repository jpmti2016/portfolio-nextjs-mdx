import { useState } from "react";

export default function Subscribe() {
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

      console.log("{ success, message }", { success, message });
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
      className={
        "relative p-4 mt-10 bg-blue-100 rounded-sm sm:p-8 ring sm:mt-20"
      }
      onSubmit={subscribe}
    >
      <h2 className={"mb-1 font-bold text-lg sm:text-2xl"}>
        Keep me in the loop!
      </h2>

      <div className="relative w-full my-4">
        <input
          className={
            "w-full px-4 py-2 mt-1 text-gray-900 bg-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
          }
          autocomplete
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={
            "absolute flex items-center justify-center h-8 px-2 font-bold capitalize bg-blue-500 rounded-r-sm shadow-lg sm:h-9 right-1 top-2 sm:w-28 hover:bg-blue-200"
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
