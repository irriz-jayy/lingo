import React from "react";
import hero from "../assets/hero.jpeg";

function Landingpage() {
  return (
    <>
      <div className="flex h-[90vh] flex-col sm:flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center w-full h-1/2  sm:w-full sm:h-1/2 lg:w-1/2 lg:h-full">
          <div className="font-paragraph text-4xl text-black p-2">
            Welcome to <span className="font-logo">lingo</span>
          </div>
          <div className="font-paragraph text-lg text-gray-500 p-2">
            We offer a wide range of language courses taught by experienced and
            qualified instructors, who are passionate about teaching and
            dedicated to helping you achieve your language goals.
          </div>
          <div className="flex">
            <div className="flex-shrink-0 ml-4">
              <button
                type="button"
                className="relative font-heading bg-button inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-button2  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span>Join us</span>
              </button>
            </div>
            <div className="flex-shrink-0 ml-4">
              <button
                type="button"
                className="relative font-heading bg-yellow-400 inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-yellow-600  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span>Our courses</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-1/2  sm:w-full sm:h-1/2 lg:w-1/2 lg:h-full relative">
          <img src={hero} className="w-full h-full object-fit-cover" alt="" />
        </div>
      </div>
    </>
  );
}

export default Landingpage;
