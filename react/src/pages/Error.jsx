import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="flex-center mt-10  flex-col text-red-600">
      <h1>خطایی رخ داده است 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>
        بازگشت
        <AiOutlineArrowLeft className="mr-1 inline" />
      </button>
    </div>
  );
}

export default Error;
