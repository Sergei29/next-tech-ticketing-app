"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="w-full h-screen flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl font-bold underline text-center text-red-500">
        An error occurred!
      </h1>
      {process.env.NODE_ENV === "development" && (
        <p className="text-xl font-semibold text-red-500">{error.message}</p>
      )}
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 focus:bg-red-700 flex gap-2 max-w-[150px]"
      >
        reset
      </button>
    </div>
  );
};

export default ErrorPage;
