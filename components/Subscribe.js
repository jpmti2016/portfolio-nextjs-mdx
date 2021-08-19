import axios from "axios";
import React, { useRef, useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [state, setState] = useState("IDLE");

  const subscribe = async (e) => {
    setState("LOADING");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/subscribe", {
        email,
      });
      setState("SUCCESS");
      inputEl.current.value = "";

      console.log("FE response", response);
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-8 mt-8 border border-blue-400 border-solid rounded-sm">
      <h2 className="text-2xl font-bold text-center">
        Keep in the loop for new articles
      </h2>
      <p className="w-4/5 mt-2 font-light leading-relaxed text-center">
        I will drop in your inbox verery two week
      </p>
      <div className="flex flex-col justify-center w-1/2 mt-5 lg:2/3 lg:flex-row">
        <input
          className="w-full px-4 py-2 mb-2 leading-tight text-gray-700 border border-blue-400 rounded appearance-none lg:mb-0 lg:w-2/3 focus:outline-none focus:border-blue-600"
          type="text"
          placeholder="email@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className={`lg:ml-2 w-full lg:w-1/3 shadow bg-blue-600 focus:shadow focus:outline-none text-center text-blue-900 font-bold py-2 px-4 rounded flex ${
            state === "LOADING"
              ? "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
              : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
    </div>
  );
}
