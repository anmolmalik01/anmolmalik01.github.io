import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import Image from "next/image";

import Logo from "../images/Logo.js";

const Nav = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className}>
      <div className="text-xl font-semibold font-abc text-white">
        <nav>
          <div className="mx-full px-4 pt-3 sm:px-6 lg:px-8">
            <div className="flex justify-between w-full">
              <div className="flex items-center pl-3"></div>
              <div className="hidden md:block w-full">
                <div className="flex items-baseline justify-between space-x-4 w-full font-abc">
                  <div className="px-6 py-2">
                    <a
                      href="./about"
                      className="relative transition ease-out duration-100 w-min-content pb-1
                  before:w-0 before:h-[3px] before:absolute before:bottom-0 before:right-0 before:bg-extra before:transition-all before:duration-100
                  before:w-full before:left-0 before:bg-extra hover:text-light"
                    >
                      About
                    </a>
                  </div>

                  <div className="px-6 py-2">
                    <a
                      href="./projects"
                      className="relative transition ease-out duration-100 w-min-content pb-1
                  before:w-0 before:h-[3px] before:absolute before:bottom-0 before:right-0 before:bg-extra before:transition-all before:duration-100
                  before:w-full before:left-0 before:bg-extra hover:text-light"
                    >
                      Projects
                    </a>
                  </div>
                  <div className="px-6 py-2">
                    <a
                      href="./contact"
                      className="relative transition ease-out duration-100 w-min-content pb-1
                  before:w-0 before:h-[3px] before:absolute before:bottom-0 before:right-0 before:bg-extra before:transition-all before:duration-100
                  before:w-full before:left-0 before:bg-extra hover:text-light"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-extra inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="md:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-extra">
                  <a
                    href="./about"
                    className="text-gray-300 hover:bg-light hover:text-extra block px-3 py-2 rounded-md text-base font-medium"
                  >
                    About
                  </a>

                  <a
                    href="./projects"
                    className="text-gray-300 hover:bg-light hover:text-extra block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="./contact"
                    className="text-gray-300 hover:bg-light hover:text-extra block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
