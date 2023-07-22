import React from "react";

function Courses() {
  const courses = [
    {
      image:
        "https://img2.storyblok.com/f/89778/784x584/3081659268/fr_-_2022_m.png",
      name: "French",
      details:
        "Learn the language of love. French is one of the best languages offered here and is very easy to learn.",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/spanish-flag-spain-country-national-identity_8071-1617.jpg",
      name: "Spanish",
      details:
        "Hola! You no longer need to go the whole way to Spain to feel some spanish blood flowing through you. Leanr from basics to advanced spanish right here and at your comfort.",
    },
    {
      image: "https://wallpapercave.com/wp/wp1939737.jpg",
      name: "Mandarin Chinese",
      details:
        "It's time to stop shouting ununderstandable words in the name of chinise. Learn the language now and be a step closer to being a highly skilled martial artists",
    },
    {
      image:
        "https://a-z-animals.com/media/2022/12/shutterstock_1988775971.jpg",
      name: "Ukranian",
      details:
        "Stand up abd be patriotic as you learn the language spoken in Ukraine. It's not that hard to learn but feel free to engage yourself.",
    },
    {
      image:
        "https://img.freepik.com/free-photo/abstract-background-with-union-jack-flag_1048-15819.jpg",
      name: "English",
      details:
        "Also known as the language of the world. You can now be able to learn this language from basic spoken to advanced written language with ease. And also at your own time",
    },
    {
      image:
        "https://media.istockphoto.com/id/961226424/photo/indian-flag-waving-symbol-of-india.webp?b=1&s=170667a&w=0&k=20&c=5SyGNguB6cxydsT94ma8Kxwq_gGWrqNYjvsQcX4T9Jo=",
      name: "Hindi",
      details:
        "Be able to learn the lovely language of Asia now with as much ease. You'll be taken from normal dialogue to advanced easily and at your own pace too.",
    },
  ];
  return (
    <>
      <div className="flex h-20  items-center justify-center flex-col sm:flex-col lg:flex-row">
        <p className="text-2xl font-heading p-2">
          Choose your favourite{" "}
          <span className="font-logo text-main text-4xl">lingo</span> course and
          get started
        </p>
      </div>
      <div className="flex min-h-[100vh] items-center  flex-col sm:flex-col lg:flex-col">
        {courses.map((course, index) => (
          <div className="flex w-9/12 min-h-80 flex-col my-4 sm:flex-col sm:w-9/12 md:flex-col lg:h-80 lg:w-9/12 lg:flex-row ">
            <img
              src={course.image}
              alt=""
              className=" h-80 w-full lg:w-1/2 lg:h-full"
            />
            <p className="flex flex-col font-paragraph items-center justify-center p-2 w-full  lg:w-1/2 lg:h-full">
              <p className="font-heading text-2xl">{course.name}</p>
              {course.details}
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
        ))}
      </div>
    </>
  );
}

export default Courses;
