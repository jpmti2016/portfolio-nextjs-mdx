export default function Footer() {
  return (
    <footer
      id="contact"
      //   className="py-8 sm:py-20"
      className="py-8 text-gray-900 bg-gray-100 sm:py-20 dark:bg-gray-900 dark:text-gray-200"
    >
      <div className="">
        {/* <div className="text-yellow-600 dark:bg-blue-900"> */}
        <div className="flex flex-col items-center content-center justify-center text-xl">
          <div className="flex mb-3 space-x-2 text-2xl sm:text-3xl sm:space-x-4">
            <a
              className="block"
              aria-label="personal tweeter account"
              href="https://twitter.com/jpmti2016"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className="w-8 h-8 rounded-full fill-current dark:text-gray-200 ring-gray-900 dark:ring-gray-200 ring-2 sm:h-10 sm:w-10 hover:bg-gray-600 hover:text-gray-200 dark:hover:text-gray-900"
                clipRule="evenodd"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="-89.009 -46.884 643.937 446.884"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052A205.304 205.304 0 00492 47.346c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 01-64.098 24.511C395.903 12.276 369.679 0 340.641 0c-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504A100.739 100.739 0 0020.57 69.24c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 01-45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 01-26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224A204.9 204.9 0 010 354.634c44.674 28.645 97.72 45.359 154.734 45.359"
                  fillRule="nonzero"
                />
              </svg>
            </a>
            <a
              className="block"
              aria-label="personal linkedin account"
              href="https://www.linkedin.com/in/yampier-medina-423641169"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2500"
                height="2500"
                viewBox="7.025 7.025 497.951 497.95"
                className="w-8 h-8 text-gray-200 bg-gray-900 border-gray-600 rounded-full fill-current dark:bg-gray-200 ring-gray-900 dark:ring-gray-200 ring-2 dark:text-gray-900 hover:text-gray-600 hover:bg-gray-200 dark:hover:text-gray-600 dark:hover:bg-gray-900 sm:h-10 sm:w-10"
              >
                <linearGradient
                  id="a"
                  gradientUnits="userSpaceOnUse"
                  x1="-974.482"
                  y1="1306.773"
                  x2="-622.378"
                  y2="1658.877"
                  gradientTransform="translate(1054.43 -1226.825)"
                >
                  <stop offset="0" stopColor="#2489be" />
                  <stop offset="1" stopColor="#0575b3" />
                </linearGradient>
                <path
                  className=""
                  d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                />
              </svg>
            </a>
            <a
              className="block"
              aria-label="personal email account"
              href="mailto:jpmti2016@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className="w-8 h-8 text-gray-200 bg-gray-900 rounded-full fill-current dark:bg-gray-200 sm:h-10 sm:w-10 ring-2 ring-gray-900 dark:ring-gray-200 dark:text-gray-900 hover:text-gray-600 hover:bg-gray-200 dark:hover:text-gray-600 dark:hover:bg-gray-900"
                clipRule="evenodd"
                fillRule="evenodd"
                imageRendering="optimizeQuality"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                viewBox="0 0 3000 3000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1500 0c828 0 1500 672 1500 1500s-672 1500-1500 1500S0 2328 0 1500 672 0 1500 0zm751 902l-1456-4 728 578zm-900 735l-636-500v950h1573v-930l-590 482c-200 163-140 160-347-2zM723 716h1569c127 0 230 104 230 230v1100c0 127-104 230-230 230H723c-127 0-230-104-230-230V946c0-127 104-230 230-230z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="block w-8 h-8"
              aria-label="personal github account"
              href="https://github.com/jpmti2016"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                className="w-8 h-8 text-gray-200 bg-gray-900 rounded-full fill-current dark:bg-gray-200 dark:text-gray-900 ring-gray-900 dark:ring-gray-200 ring-2 sm:h-10 sm:w-10 hover:bg-gray-200 hover:text-gray-600 dark:hover:text-gray-600 dark:hover:bg-gray-900"
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>
          <p className="text-base font-playfair">Created by Yampier Medina</p>
          <p className="text-sm font-code">© 2020 MIT Licence</p>
        </div>
      </div>
    </footer>
  );
}
