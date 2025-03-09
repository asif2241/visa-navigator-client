import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // Log the error for debugging

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-5 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md">
        <h1 className="text-3xl font-bold text-gray-800">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-500 mt-2">
          {error?.statusText ||
            error?.message ||
            "An unexpected error occurred."}
        </p>
        <Link to="/">
          <button className="mt-5 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
