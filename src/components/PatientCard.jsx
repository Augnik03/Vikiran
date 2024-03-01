import React, { useState } from "react";

export default function PatientCard() {
  const [showDetail, setShowDetail] = useState(false);

  const handleReadMoreClick = () => {
    setShowDetail(true);
  };

  const handleCloseClick = () => {
    setShowDetail(false);
  };
  return (
    <div>
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col items-center pb-10 pt-10">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="./vite.svg"
            alt="Bonnie image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Bonnie Green
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">Patient</span>
          <div class="flex mt-4 md:mt-6">
            <a
              href="#"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleReadMoreClick}
            >
              Show Profile
            </a>
            <a
              href="#"
              class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Message
            </a>
          </div>
        </div>
      </div>
      {showDetail && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white w-1/2 h- rounded-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleCloseClick}
            >
              X
            </button>
            <div className="flex">
              <div className="w-1/2 p-4">
                <h1>Patient info from Backend</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
