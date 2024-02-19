import { Link, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  return (
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-red-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          صفحه یافت نشد!
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-600">
          متاسفم ما نتوانستیم صفحه ای که به دنبال آن هستید را بیابیم ...
        </p>
        <p>{error.message || error.data}</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to={'/'}
            class="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
