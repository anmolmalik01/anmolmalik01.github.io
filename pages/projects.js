import React from "react";
import { Transition } from "@headlessui/react";


function Projects() {
  return (
    <div className="bg-gradient-to-br from-[#2e2e2e] via-black to-black text-white">
      <div className="flex justify-center">
        <p className="leading-normal font-abc pt-16 text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-left font-bold max-w-3xl lg:max-w-4xl">
          Projects
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full p-[3.5rem] ">
        {/* 1 */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://weights-custom.netlify.app"
          className="group flex flex-col overflow-hidden px-8 py-11 rounded-md bg-[#87bee7] 
                  transition-all ease-out duration-500 hover:shadow-[0px_0px_100px_70px_rgba(0,0,0,1)] z-0 hover:z-10"
        >
          <h3 className="text-2xl pb-3 sm:text-3xl sm:pb-6 leading-none border-b-2 border-black">
            weights-custom
          </h3>
          <h4 className="text-base py-2 sm:text-lg">Web Development</h4>
          <p className="text-black text-base h-full py-4 opacity-0 -translate-y-4 transition ease-out duration-500 group-hover:translate-y-1 group-hover:opacity-100">
            This is a React app that calculates weight on other planets.
          </p>
          <span className="flex flex-row pt-3">
            <p className="text-base sm:text-lg pt-1">View Information</p>
            <div className="px-3 py-2 transition ease-out duration-1000 group-hover:translate-x-2">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-black"
              >
                <path
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill=""
                />
              </svg>
            </div>
          </span>
        </a>

        {/* 2 */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://weights-custom.netlify.app"
          className="group flex flex-col overflow-hidden px-8 py-11 rounded-md bg-[#66c993]  
                  transition-all ease-out duration-500 hover:shadow-[0px_0px_100px_70px_rgba(0,0,0,1)] z-0 hover:z-10"
        >
          <h3 className="text-2xl pb-3 sm:text-3xl sm:pb-6 transition-all ease-out duration-500 leading-none border-b-2 border-black">
            package-installer
          </h3>
          <h4 className="text-base py-2 sm:text-lg">Python library</h4>
          <p className="text-black text-base h-full py-4 opacity-0 -translate-y-4 transition ease-out duration-500 group-hover:translate-y-1 group-hover:opacity-100">
            A package that allows you to easily add a package installer to your
            project that keeps all of the modules included in the project and
            allows others to utilise it.
          </p>
          <span className="flex flex-row pt-3">
            <p className="text-base sm:text-lg pt-1">View Information</p>
            <div className="px-3 py-2 transition ease-out duration-1000 group-hover:translate-x-2">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-black"
              >
                <path
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill=""
                />
              </svg>
            </div>
          </span>
        </a>
        {/* 3 */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://weights-custom.netlify.app"
          className="group flex flex-col overflow-hidden px-8 py-11 rounded-md bg-[#66c993]  
                  transition-all ease-out duration-500 hover:shadow-[0px_0px_100px_70px_rgba(0,0,0,1)] z-0 hover:z-10"
        >
          <h3 className="text-2xl pb-3 sm:text-3xl sm:pb-6 leading-none border-b-2 border-black">
            face-check
          </h3>
          <h4 className="text-base py-2 sm:text-lg">Python GUI</h4>
          <p className="text-black text-base h-full py-4 opacity-0 -translate-y-4 transition ease-out duration-500 group-hover:translate-y-1 group-hover:opacity-100">
            A openCV GUI app made in tkinter.
          </p>
          <span className="flex flex-row pt-3">
            <p className="text-base sm:text-lg pt-1">View Information</p>
            <div className="px-3 py-2 transition ease-out duration-1000 group-hover:translate-x-2">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-black"
              >
                <path
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill=""
                />
              </svg>
            </div>
          </span>
        </a>

        {/* 4 */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://weights-custom.netlify.app"
          className="group flex flex-col overflow-hidden px-8 py-11 rounded-md bg-[#fda381]  
                  transition-all ease-out duration-500 hover:shadow-[0px_0px_100px_70px_rgba(0,0,0,1)] z-0 hover:z-10"
        >
          <h3 className="text-2xl pb-3 sm:text-3xl sm:pb-6 leading-none border-b-2 border-black">
            Data Science Jobs Analysis
          </h3>
          <h4 className="text-base py-2 sm:text-lg">Data Science</h4>
          <p className="text-black text-base h-full py-4 opacity-0 -translate-y-4 transition ease-out duration-500 group-hover:translate-y-1 group-hover:opacity-100">
            A data science project
          </p>
          <span className="flex flex-row pt-3">
            <p className="text-base sm:text-lg pt-1">View Information</p>
            <div className="px-3 py-2 transition ease-out duration-1000 group-hover:translate-x-2">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-black"
              >
                <path
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill=""
                />
              </svg>
            </div>
          </span>
        </a>

        {/* 5 */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="  "
          className="group flex flex-col overflow-hidden px-8 py-11 rounded-md bg-[#ad9ff4]   
                  transition-all ease-out duration-500 hover:shadow-[0px_0px_100px_70px_rgba(0,0,0,1)] z-0 hover:z-10"
        >
          <h3 className="text-2xl pb-3 sm:text-3xl sm:pb-6 leading-none border-b-2 border-black">
            Sign language predication
          </h3>
          <h4 className="text-base py-2 sm:text-lg">Machine learning</h4>
          <p className="text-black text-base h-full py-4 opacity-0 -translate-y-4 transition ease-out duration-500 group-hover:translate-y-1 group-hover:opacity-100">
            Machine learning
          </p>
          <span className="flex flex-row pt-3">
            <p className="text-base sm:text-lg pt-1">View Information</p>
            <div className="px-3 py-2 transition ease-out duration-1000 group-hover:translate-x-2">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-black"
              >
                <path
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill=""
                />
              </svg>
            </div>
          </span>
        </a>

        {/* 6 */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href=""
          className="group flex flex-col overflow-hidden px-8 py-11 rounded-md bg-[#fda381]  
                  transition-all ease-out duration-500 hover:shadow-[0px_0px_100px_70px_rgba(0,0,0,1)] z-0 hover:z-10"
        >
          <h3 className="text-2xl pb-3 sm:text-3xl sm:pb-6 leading-none border-b-2 border-black">
            Cabon Dioxide emission data analysis
          </h3>
          <h4 className="text-base py-2 sm:text-lg">Data science</h4>
          <p className="text-black text-base h-full py-4 opacity-0 -translate-y-4 transition ease-out duration-500 group-hover:translate-y-1 group-hover:opacity-100">
            Machine learning
          </p>
          <span className="flex flex-row pt-3">
            <p className="text-base sm:text-lg pt-1">View Information</p>
            <div className="px-3 py-2 transition ease-out duration-1000 group-hover:translate-x-2">
              <svg
                width="25"
                height="16"
                viewBox="0 0 25 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:fill-white"
              >
                <path
                  d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
                  fill=""
                />
              </svg>
            </div>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
