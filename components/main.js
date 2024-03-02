import Image from "next/image";
import portrait from "../public/images/portrait.png";

import Side from "./side";
import MovingText from "./round";

const Main = ({ className }) => {
  return (
    <div className={className} >

      {/* shotting starts */}
      <section className="star z-0">
        <span className="star-child"></span>
        <span className="star-child"></span>
        <span className="star-child"></span>
        <span className="star-child"></span>
        <span className="star-child"></span>
        <span className="star-child"></span>
        <span className="star-child"></span>
        <span className="star-child"></span>
        <span className="star-child"></span>
        <span className="star-child"></span>
      </section>


      <div className="flex flex-col sm:flex-row h-screen w-screen">

        {/* ============ 1st column ======================= */}
        <div className="hidden sm:flex w-min p-4">
          <Side />
        </div>

        {/* ============== 2nd column ============= */}
        <div className="flex flex-row sm:flex-col h-1/2 sm:h-screen justify-center items-center z-10 px-10 sm:pl-[5rem] py-[2rem] sm:py-[4rem]">
          <div className="flex justify-center items-center h-1/2">
            <div>
              <p className="text-2xl sm:text-5xl md:text-6xl font-bold font-abc text-light">
                <span className="">Hi, I'm</span>
                <span className="text-white px-4">Anmol Malik</span>
              </p>
              <div className="py-1 sm:py-2 leading-tight">
                <span className="text-sm sm:text-base md:text-xl text-light font-serif">- Transforming Binary to Brilliance</span>
              </div>
            </div>
          </div>
          <div className="flex h-1/2 justify-center items-center">
            <MovingText />
          </div>
        </div>


        {/* 3rd column */}
        <div className="flex justify-center">
          <div className="flex justify-center items-center w-3/4 w-screen sm:h-full sm:w-full ">
            <Image
              src={portrait}
              className="z-10"
              weight={498}
              height={505}
              alt=""
            />
          </div>
        </div>

        <div className="sm:hidden p-4 absolute bottom-0 left-0 right-0 z-10">
          <Side />
        </div>

      </div>


      {/* color block */}
      <div className="absolute z-0 w-screen h-[50%] bg-light top-[50%]">
      </div>
    </div >
  );
};

export default Main;
