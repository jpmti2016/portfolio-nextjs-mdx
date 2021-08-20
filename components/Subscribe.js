import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [message, setMessage] = useState("");

  async function subscribe(e) {
    e.preventDefault();

    setState("LOADING");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify({ email: email }),
      });

      const { success, message } = await res.json();
      setState(success ? "SUCCESS" : "ERROR");
      setMessage(message);
      if (!success) {
        throw new Error(message);
      }
    } catch (error) {
      setMessage(message);
    }
  }

  return (
    <form className={""} onSubmit={subscribe}>
      <h2 className={""}>Subscribe to my newsletter!</h2>
      <p className={""}>
        It includes interesting tech content as well as some information on how
        to live life to the fullest!
      </p>
      <div>
        <input
          className={""}
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="submit"
          value={state === "LOADING" ? "Loading" : "Subscribe"}
        />
      </div>
      {state === "ERROR" && <p className={""}>{message}</p>}
      {state === "SUCCESS" && <p className={""}>{message}</p>}
    </form>
  );
}
