import { useRef, useState } from "react";

export default function Subscribe() {
  const inputEl = useRef(null);
  const [message, setMessage] = useState("");
  const [state, setState] = useState("IDLE");

  const subscribe = async (e) => {
    setState("LOADING");
    setMessage(null);
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        body: JSON.stringify({
          email: inputEl.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      console.log("api response", res);
      //   const { error } = await res.json();

      inputEl.current.value = "";
      setMessage("Success! You are now subscribed to the newsletter");
    } catch (error) {
      setMessage(error);
      setState("ERROR");
      console.log("error", error);
      // const { error } = await respose.json();
    }
  };
  return (
    <form
      onSubmit={subscribe}
      className="relative p-4 mt-10 bg-blue-100 rounded-sm sm:p-8 ring sm:mt-20"
    >
      <p className="mb-2 font-bold">Subscribe to the newsletter</p>
      <div>
        {message ? message : "I will only send you email about new content"}
      </div>
      <div className="relative w-full my-4">
        <input
          type="email"
          className="w-full px-4 py-2 mt-1 text-gray-900 bg-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-200"
          id="email"
          name="email"
          placeholder="your@email.com"
          ref={inputEl}
          required
        />

        <button
          className="absolute flex items-center justify-center h-8 px-2 text-blue-900 capitalize bg-blue-500 rounded-sm shadow-lg sm:h-9 right-1 top-2 sm:w-28"
          type="submit"
        >
          {"Subscribe"}
        </button>
      </div>
    </form>
  );
}
