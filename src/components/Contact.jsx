import React from "react";

function Contact() {
  return (
    <>
      <div className="flex h-[70vh] items-center justify-center flex-col sm:flex-col lg:flex-row">
        <div>
          <p className="text-4xl font-heading p-2">
            Contact us to start your journey with{" "}
            <span className="font-logo">lingo </span> today
          </p>
          <p className="text-gray-500 font-paragraph">
            12 Terry Francine Drive San Fransisco, CA 12345
          </p>
          <p className="text-gray-500 font-paragraph">Tel: +020 00567 03485</p>
          <p className="text-gray-500 font-paragraph">
            Email: lingo@education.com
          </p>
        </div>
      </div>
      <div className="flex h-[70vh] items-center justify-center  flex-col bg-main sm:flex-col lg:flex-col">
        <div>
          <p className="text-4xl text-white pb-4 font-heading">
            Send us a message
          </p>
        </div>
        <div>
          <form className="grid grid-cols-2 gap-4 font-paragraph">
            <input
              type="text"
              placeholder="Name"
              className="bg-white rounded-md h-16 pl-3"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-white rounded-md h-16 pl-3"
            />
            <input
              type="text"
              placeholder="Write your message"
              className="bg-white rounded-md col-span-2 h-16 pl-3"
            />
            <button className="col-span-2 bg-button2 h-16 rounded-md hover:bg-opacity-30 hover:border hover:border-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
