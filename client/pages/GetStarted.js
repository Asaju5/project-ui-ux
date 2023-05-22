import Image from "next/image";
import React from "react";
import foto1 from "../assets/فيصل.png";
import foto2 from "../assets/Vector.png";
import foto3 from "../assets/Faysal.png";
import foto4 from "../assets/community.png";
import { MdKeyboardArrowRight } from "react-icons/md";

function GetStarted() {
  return (
    <div className="md:hidden flex flex-col justify-center items-center h-screen mt-5">
      <div className="relative">
        <div className="absolute right-1 bottom-8">
          <Image src={foto1} alt="فيصل" priority height={25} />
        </div>
        <div className="flex">
          <Image src={foto2} alt="vector" height="35" />
          <Image src={foto3} alt="faysal" height="35" priority />
        </div>
      </div>
      <div className="flex flex-col mt-[83px]">
        <h4 className="text-3xl font-semibold text-gray-200">
          Saving Made Simple
        </h4>
        <div className="mt-4">
          <p className="text-md text-gray-400 text-center">
            We offer faster and more efficient ways
          </p>
          <p className="text-md text-gray-400 text-center">
            {" "}
            to save and manage money through
          </p>
          <p className="text-md text-gray-400 text-center">
            various savings methods
          </p>
        </div>
      </div>
      <div className="mt-24">
        <Image src={foto4} alt="community" priority />
        <div className="flex items-center justify-center">
          <button className="bg-[#0A221C] rounded-md px-5 py-2 text-gray-200 flex items-center gap-2">
            Get Started
            <MdKeyboardArrowRight className="p-1 rounded-full bg-[#4BF0A5]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
