import * as React from "react";

function SimpleCounter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(0);
  return <CountUI count={count} increment={increment} reset={reset} />;
}

function InitialCounterAlmostThere({ initialCount = 0 }) {
  const [count, setCount] = React.useState(initialCount);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(initialCount);
  return <CountUI count={count} increment={increment} reset={reset} />;
}

function BugReproduced() {
  const [initialCount, setInitialCount] = React.useState(3);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setInitialCount(Math.floor(Math.random() * 50));
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <InitialCounterAlmostThere initialCount={initialCount} />;
}

function FinishedCounter({ initialCount = 0 }) {
  const { current: initialState } = React.useRef({ count: initialCount });
  const [count, setCount] = React.useState(initialState.count);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(initialState.count);
  return <CountUI count={count} increment={increment} reset={reset} />;
}

function KeyPropReset() {
  const [key, setKey] = React.useState(0);
  const resetCounter = () => setKey((k) => k + 1);
  return <KeyPropResetCounter key={key} reset={resetCounter} />;
}

function KeyPropResetCounter({ reset }) {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount((c) => c + 1);
  return <CountUI count={count} increment={increment} reset={reset} />;
}

function CountUI({ count, increment, reset }) {
  return (
    <div className="flex flex-col gap-4 max-w-['5rem'] dark:text-gray-300 text-gray-700 hover:text-gray-900 ">
      <button
        className="flex-1 border rounded-2xl border-gray-700 dark:border-gray-300 px-4 hover:bg-gray-400 dark:hover:text-gray-100"
        onClick={increment}
      >
        {count}
      </button>
      <button
        className="flex-1 border rounded-2xl border-gray-700 dark:border-gray-300 hover:bg-gray-400 px-4 dark:hover:text-gray-100"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
}

export {
  SimpleCounter,
  InitialCounterAlmostThere,
  BugReproduced,
  FinishedCounter,
  KeyPropReset,
};
