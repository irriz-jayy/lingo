import React from "react";

function Courses() {
  return (
    <>
      <div className="flex h-20  items-center justify-center flex-col sm:flex-col lg:flex-row">
        <p className="text-2xl font-heading p-2">
          Choose your favourite{" "}
          <span className="font-logo text-main text-4xl">lingo</span> course and
          get started
        </p>
      </div>
      <div className="flex min-h-[100vh] items-center border flex-col sm:flex-col lg:flex-col">
        <div className="flex w-9/12 min-h-80 flex-col my-4 sm:flex-col sm:w-9/12 md:flex-col lg:h-80 lg:w-9/12 lg:flex-row ">
          <img src="" alt="" className=" h-80 w-full lg:w-1/2 lg:h-full" />
          <p className="flex flex-col font-paragraph items-center justify-center p-2 w-full  lg:w-1/2 lg:h-full">
            <p className="font-heading text-2xl">Name</p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            quos eligendi deserunt ipsam, cum ipsa eius pariatur ut aspernatur
            repellat fugit consequuntur consequatur ea minus officiis error
            cumque non possimus.
            <div className="flex-shrink-0 my-4">
              <button
                type="button"
                className="relative font-heading bg-yellow-400 inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-yellow-600  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span>Learn now</span>
              </button>
            </div>
          </p>
        </div>
      </div>
    </>
  );
}

export default Courses;
