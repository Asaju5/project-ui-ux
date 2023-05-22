import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlinePeopleOutline,
  MdOutlineArrowOutward,
} from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi2";
import hands from "../../assets/ajo1.png";
import Image from "next/image";

function AjoDetailsMobile() {
  return (
    <div className="p-8 md:p-4 mt-4">
      <div className="flex flex-col">
        <div className="flex items-center text-gray-200 gap-10">
          <MdKeyboardArrowLeft size={30} />
          <h4 className="text-lg font-semibold">Rotation Savings</h4>
        </div>
        <div className="flex flex-col items-center justify-center mt-8 md:mt-12 gap-y-2">
          <div>
            <div className="p-4 bg-[#E86B35] rounded-full text-[#0A221C]">
              <MdOutlinePeopleOutline size={40} />
            </div>
          </div>
          <div className="text-lg font-semibold text-gray-200">Loop Ajo</div>
        </div>
        <div className="mt-4 flex items-center justify-between md:mt-8 mx-4">
          <div className="items-center text-center">
            <p className="text-xs text-gray-400">AjoID</p>
            <p className="text-sm font-semibold text-gray-200">000000000</p>
          </div>
          <div className="items-center text-center">
            <p className="text-xs text-gray-400">Hands</p>
            <p className="text-sm font-semibold text-gray-200">47/50</p>
          </div>
          <div className="items-center text-center">
            <p className="text-xs text-gray-400">Ajo Type</p>
            <p className="text-sm font-semibold text-gray-200">Community</p>
          </div>
        </div>

        <div className="mt-4 md:mt-8 flex flex-col bg-[#0A221C] rounded-lg p-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-lg text-gray-300 font-medium">Total Saved</p>
            <div className="flex items-center justify-between">
              <h4 className="md:text-4xl text-xl font-semibold text-gray-200">
                ₦5,000,000
              </h4>
              <div className="flex items-center gap-1 md:gap-3">
                <div className=" p-1.5 md:p-3 rounded-full bg-[#4BF0A5]">
                  <HiOutlineClock size={20} />
                </div>
                <div className=" p-1.5 md:p-3 rounded-full bg-[#4BF0A5]">
                  <MdKeyboardArrowRight size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-1 mt-8">
            <div className="bg-[#174B37] h-4 rounded-md">
              <div className="w-[85%] bg-[#4BF0A5] h-4 rounded-lg"></div>
            </div>
            <div className="mx-4 flex items-center">
              <p className="text-xs font-semibold text-gray-200">
                89% saved of #5,000,000 target
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-[#0A221C] rounded p-4">
          <div className="mb-4 flex items-center gap-2">
            <p className="font-semibold text-gray-300">Hands</p>
            <div className="p-0.5 bg-[#4BF0A5] rounded-full">
              <MdKeyboardArrowRight />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <Image src={hands} alt="..." priority />
              <p className="text-gray-200">Fiyin</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={hands} alt="..." priority />
              <p className="text-gray-200">Fiyin</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={hands} alt="..." priority />
              <p className="text-gray-200">Fiyin</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={hands} alt="..." priority />
              <p className="text-gray-200">Fiyin</p>
            </div>
          </div>
        </div>
        <div className="bg-[#0A221C] py-2 rounded-md mt-4 flex flex-col">
          <div className="mx-4">
            <p className="text-gray-200">Yesterday</p>
          </div>
          <div className="mx-4 mt-4 flex items-center gap-1 mb-3">
            <div className="p-2 bg-[#4BF0A5] rounded-full">
              <MdOutlineArrowOutward size={20} />
            </div>
            <div>
              <h4 className="text-gray-200 font-semibold text-[10px]">
                Fiyin Deposited #500,000 to Ajo
              </h4>
              <p className="text-gray-400 text-xs">January 28th, 12PM</p>
            </div>
          </div>
          <div className="mx-4 mt-4 flex items-center gap-1 mb-3">
            <div className="p-2 bg-[#4BF0A5] rounded-full">
              <MdOutlineArrowOutward size={20} />
            </div>
            <div>
              <h4 className="text-gray-200 font-semibold text-[10px]">
                Fiyin Deposited #500,000 to Ajo
              </h4>
              <p className="text-gray-400 text-xs">January 28th, 12PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AjoDetailsMobile;
