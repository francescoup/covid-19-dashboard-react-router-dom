import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh_-_60px)]">
      <div>
        <h4 class="text-8xl font-bold font-sans text-left text-gray-900 dark:text-gray-200">
          404
        </h4>
        <p class="text-2xl md:text-3xl font-light font-sans leading-normal text-gray-700">
          Sorry we couldn't find this page.
        </p>
        <p class="mb-8 text-gray-600">
          But dont worry, you can find plenty of other things on our homepage.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
