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
        <div className="w-full sm:w-min z-40 flex flex-row justify-center items-end sm:flex-col text-light">
          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "24px" }}
                icon={faGithub}
                className="opacity-90 transition-all hover:scale-110 hover:text-white hover:opacity-100 duration-75"
              />
            </a>
          </div>

          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "23px" }}
                icon={faTwitter}
                className="opacity-90 transition-all hover:scale-110 hover:text-white hover:opacity-100 duration-75"
              />
            </a>
          </div>
          <div className=" p-3 ">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "20px" }}
                icon={faMedium}
                className="opacity-90 transition-all hover:scale-110 hover:text-white hover:opacity-100 duration-75"
              />
            </a>
          </div>
          <div className="p-3">
            <a href="#">
              <FontAwesomeIcon
                style={{ fontSize: "26px" }}
                icon={faInstagram}
                className="opacity-90 transition-all hover:scale-110 hover:text-white hover:opacity-100 duration-75"
              />
            </a>
          </div>
        </div>
      </div>

      {/* color block */}
      <div className="absolute z-0 w-screen h-[50%] bg-dark top-[50%]"></div>
      {/* name */}
      <div className="absolute top-[32%] sm:top-[42%] flex flex-col z-20 justify-center left-[20%] sm:left-[15%]">
        <p className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold font-abc text-light ">
          Anmol Malik
        </p>
        <p className="z-10 mx-3 text-base sm:text-xl font-abc text-light">
          Developer ~ Designer
        </p>
      </div>

      {/* image */}
      <div className="absolute top-[40%] left-[35%] sm:top-[10%] right-0 sm:right-1 md:m-4 ">
        <Image
          src={portrait}
          className="z-10"
          weight={498}
          height={505}
          alt=""
        />
      </div>
    </div>
  );
};

export default Main;
