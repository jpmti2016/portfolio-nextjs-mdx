export default function Project() {
  return (
    <div class="flex flex-col p-2 bg-gray-200 sm:p-4">
      <div>
        <h3 class="mb-1 text-xl font-semibold leading-tight text-gray-800 font-playfair">
          Money Tracker
        </h3>

        <img
          class="my-3 rounded-lg shadow-xl sm:my-4 sm:w-full sm:object-cover sm:object-center lazyload"
          data-src="img/trackingmyfinance.jpg"
          loading="lazy"
          data-srcset="
                    img/trackingmyfinance240_173.jpg 240w,
                    img/trackingmyfinance272_196.jpg 272w,
                    img/trackingmyfinance400_288.jpg 400w,
                    img/trackingmyfinance528_380.jpg 528w,
                    img/trackingmyfinance559_402.jpg 559w
                  "
          data-sizes="(min-width: 1280px) 528px, (min-width: 1040px) 400px, (min-width: 780px) 272px, (min-width: 640px) 208px, calc(100vw - 80px)"
          alt="personal desktop"
        />
        <p class="inline-block font-code">
          <span class="inline-block px-2 mr-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-full sm:mb-1">
            JS
          </span>
          <span class="inline-block px-2 mr-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-full sm:mb-1">
            AWS Amplify
          </span>
          <span class="inline-block px-2 mr-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-full sm:mb-1">
            GraphQL
          </span>

          <span class="inline-block px-2 mr-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-full sm:mb-1">
            ReactJS
          </span>
          <span class="inline-block px-2 mr-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-full sm:mb-1">
            React Hook Form
          </span>
          <span class="inline-block px-2 mr-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-full sm:mb-1">
            Bulma
          </span>
          <span class="inline-block px-2 mr-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-full sm:mb-1">
            Git
          </span>
          <span class="inline-block px-2 mr-1 text-xs font-semibold tracking-wide text-gray-800 uppercase bg-gray-100 rounded-full sm:mb-1">
            GitHub
          </span>
        </p>
      </div>
      <p class="mt-2 text-lg text-gray-800 sm:mt-4">
        Keeping records of every day expenses is hard work. Increasing amount of
        receipts are prone to be lost or overflow in household drawers. Also
        hundreds of card transactions that don't show any hint of the store,
        product or products's category involved.
      </p>
      <p class="mt-2 text-lg text-gray-800">
        How to
        <span class="font-semibold">detect trends</span> in the buying habits or
        how to know the
        <span class="font-semibold">size of the budget still alive</span>?
      </p>
      <p class="mt-2 text-lg text-gray-800">
        <span class="font-semibold">Money Tracker</span> works to delete present
        and future personal finance managing issues.
      </p>
      <p class="mt-2 text-lg text-gray-800">
        Try the app <span class="font-code">sign in </span> or use
        <span class="font-code">user: test, password: test2020 </span>
      </p>
      <div class="mt-4 text-sm sm:pt-6 sm:text-base sm:mt-auto">
        <a
          class="shadow-lg btn btn-blue"
          href="https://www.trackingmyfinance.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Demo
        </a>
        <a
          class="shadow-lg btn btn-gray"
          href="https://github.com/jpmti2016/trackingmyfinance"
          target="_blank"
          rel="noreferrer noopener"
        >
          Info
        </a>
      </div>
    </div>
  );
}
