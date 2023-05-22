import React from "react";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlinePeopleOutline,
  MdOutlineArrowOutward,
} from "react-icons/md";
import { HiOutlineClock } from "react-icons/hi2";
import hands from "../../assets/ajo1.png";
import ajopix from "../../assets/ajo3.png";
import Image from "next/image";

function HandsDetailMobile() {
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

        <div className="mt-6 bg-[#0A221C] rounded-xl p-4">
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
            <p className="text-gray-200">All Hands</p>
          </div>
          <div className="mx-4 flex items-center justify-between">
            <div className="mt-4 flex items-center gap-1 mb-3">
              <div className="">
                <Image src={ajopix} alt="profile pix" priority />
              </div>
              <div>
                <h4 className="text-gray-200 font-semibold text-sm">
                  Olumide Ajayi
                </h4>
                <p className="text-gray-400 text-[10px]">
                  Created Ajo, 11th April 2023
                </p>
              </div>
            </div>
            <div className="px-1 py-1 md:px-3 md:py-2 bg-[#E86B35] rounded-md font-semibold text-xs">
              Owner
            </div>
          </div>
          <div className="mx-4 flex items-center justify-between">
            <div className="mt-4 flex items-center gap-1 mb-3">
              <div className="">
                <Image src={ajopix} alt="profile pix" priority />
              </div>
              <div>
                <h4 className="text-gray-200 font-semibold text-sm">
                  Olumide Ajayi
                </h4>
                <p className="text-gray-400 text-[10px]">
                  Created Ajo, 11th April 2023
                </p>
              </div>
            </div>
            <div className="px-1 py-1 md:px-3 md:py-2 bg-[#E86B35] rounded-md font-semibold text-xs">
              Pending
            </div>
          </div>
          <div className="mx-4 flex items-center justify-between">
            <div className="mt-4 flex items-center gap-1 mb-3">
              <div className="">
                <Image src={ajopix} alt="profile pix" priority />
              </div>
              <div>
                <h4 className="text-gray-200 font-semibold text-sm">
                  Olumide Ajayi
                </h4>
                <p className="text-gray-400 text-[10px]">
                  Created Ajo, 11th April 2023
                </p>
              </div>
            </div>
            <div className="px-1 py-1 md:px-3 md:py-2 bg-[#E86B35] rounded-md font-semibold text-xs">
              Approved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HandsDetailMobile;
