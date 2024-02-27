import React from "react";

const ProjectCard = ({ color, name, description, field, link, style }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      style={{ backgroundColor: color, ...style }} // Apply the inline style here
      className={`group flex flex-col overflow-hidden px-5 sm:px-8 py-6 sm:py-11 rounded-md  
        transition-all ease-out duration-500 hover:shadow-[0px_0px_100px_70px_rgba(0,0,0,1)] z-0 hover:z-10`}
      >
      <h3 className="text-extra text-2xl pb-2 sm:pb-3 sm:text-3xl sm:pb-6 leading-none border-b-2 border-dark">
        {name}
      </h3>
      <h4 className="text-extra text-base py-2 sm:text-lg">{field}</h4>
      <p className="text-extra text-sm sm:text-base h-full py-2 px-2 sm:py-4 opacity-0 -translate-y-4 transition ease-out duration-500 group-hover:translate-y-1 group-hover:opacity-100">
        {description}
      </p>
      <span className="flex flex-row pt-2 sm:pt-3">
        <p className="text-gray-800 text-base sm:text-lg pt-1">View Information</p>
        <div className="px-3 py-2 transition ease-out duration-1000 group-hover:translate-x-2">
          <svg
            width="25"
            height="16"
            viewBox="0 0 25 16"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:text-black"
          >
            <path
              d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z"
              fill="#8924B9"
            />
          </svg>
        </div>
      </span>
    </a>
  );
};

export default ProjectCard;
