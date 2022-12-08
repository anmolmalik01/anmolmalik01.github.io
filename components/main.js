import Image from "next/image";
import portrait from "../images/portrait.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Main = ({ className }) => {
  return (
    <div className={className}>
      {/* ========================= main ======================= */}
      <div className="flex flex-row h-100v">
        {/* ========================= Left ======================== */}
        <div className="w-full sm:w-min z-40 flex flex-row justify-center items-end sm:flex-col">
          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "24px" }}
                icon={faGithub}
                className="opacity-90 transition-all hover:scale-110 hover:hover:text-black sm:hover:text-[#837A75] hover:opacity-100 duration-75"
              />
            </a>
          </div>

          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "23px" }}
                icon={faTwitter}
                className="opacity-90 transition-all hover:scale-110 hover:hover:text-black sm:hover:text-[#837A75] hover:opacity-100 duration-75"
              />
            </a>
          </div>
          <div className=" p-3 ">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faMedium}
                className="opacity-90 transition-all hover:scale-110 hover:text-black hover:opacity-100 duration-75"
              />
            </a>
          </div>
          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "26px" }}
                icon={faInstagram}
                className="opacity-90 transition-all hover:scale-110 hover:text-black hover:opacity-100 duration-75"
              />
            </a>
          </div>
        </div>
      </div>

      {/* color block */}
      <div className="absolute z-0 w-screen h-[50%] bg-[rgb(131,122,117)] top-[50%]"></div>
      {/* name */}
      <div className="absolute top-[35%] sm:top-[45%] flex flex-col z-20 justify-center left-[10%] sm:left-[15%]">
        <p className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold font-abc text-[#ffffff] ">
          Anmol Malik
        </p>
        <p className="z-10 text-white text-2xl font-abc">
          development is my sixth sense
        </p>
      </div>

      {/* image */}
      <div className="absolute top-[45%] left-[35%] sm:top-[10%] right-0 sm:right-1 md:m-4 ">
        <Image src={portrait} className="z-10" weight={498} height={505} />
      </div>
    </div>
  );
};

export default Main;
