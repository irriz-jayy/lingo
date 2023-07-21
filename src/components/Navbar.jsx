import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

export default function Example() {
  const location = useLocation();

  const links = [
    {
      text: "Home",
      path: "/",
      className:
        "inline-flex items-center border-b-2 border-button px-1 pt-1 text-sm font-medium font-heading text-gray-900",
    },
    {
      text: "Courses",
      path: "/courses",
      className:
        "inline-flex items-center border-b-2 border-button px-1 pt-1 text-sm font-medium font-heading text-gray-900",
    },
    {
      text: "Contact",
      path: "/contact",
      className:
        "inline-flex items-center border-b-2 border-button px-1 pt-1 text-sm font-medium font-heading text-gray-900",
    },
  ];
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <p className="block  w-auto font-logo text-main text-xl lg:hidden">
                    lingo
                  </p>
                  <p className="hidden w-auto font-logo text-main text-xl lg:block">
                    lingo
                  </p>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {links.map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className={`inline-flex items-center border-b-2 ${
                        location.pathname === link.path
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      } px-1 pt-1 text-sm font-medium font-heading ${
                        link.className
                      }`}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className="relative font-heading  inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-black shadow-lg hover:text-white hover:bg-button2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>Sign up</span>
                  </button>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    className="relative font-heading bg-button inline-flex items-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-button2  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span>Sign in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4  font-heading border-button bg-button2 py-2 pl-3 pr-4 text-base font-medium text-white sm:pl-5 sm:pr-6"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 font-heading border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Courses
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="block border-l-4 font-heading border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
