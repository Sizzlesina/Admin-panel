import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div className="flex-center mt-10 flex-col">
      <p className="text-6xl font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        صفحه موردنظر یافت نشد !
      </h1>
      <p className="mt-5 text-3xl font-semibold text-stone-500">
        {error.data || error.message}
      </p>

      <div className=" mt-5 flex items-center justify-center ">
        <button
          onClick={() => navigate('/')}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          بازگشت
        </button>
      </div>
    </div>
  );
}

export default Error;
