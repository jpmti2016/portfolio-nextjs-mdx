export default function CookieBanner() {
  return (
    <div className="fixed bottom-0 z-50 flex flex-col items-center w-full p-4 text-sm bg-gray-300 border-t-2 border-gray-500 sm:flex-row sm:justify-center min-w-[320px]">
      <div className="max-w-2xl">
        By clicking “Accept All”, you consent to our website's use of cookies to
        give you the most relevant experience by remembering your preferences
        and repeat visits. However, you may visit “Cookie Settings” to provide
        controlled consent.
      </div>
      <div className="flex  items-center mt-4 justify-around sm:mt-0 min-w-[320px]">
        <div className="flex text-xs font-medium tracking-normal text-blue-700 sm:text-sm font-fira">
          <div className="pr-2 uppercase">Customize</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-blue-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
        <button className="inline-block px-1 py-1 text-xs font-normal tracking-normal uppercase bg-blue-700 rounded-sm sm:px-2 sm:text-sm font-fira text-blue-50">
          Reject All
        </button>
        <button className="inline-block px-1 py-1 text-xs font-normal tracking-normal uppercase bg-blue-700 rounded-sm sm:px-2 sm:text-sm font-fira text-blue-50">
          Accept All
        </button>
      </div>
    </div>
  );
}
