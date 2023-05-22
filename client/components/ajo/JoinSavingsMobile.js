import { ajoDetails } from "@/data";
import React from "react";
import {
  MdKeyboardArrowLeft,
  MdOutlinePeopleOutline,
  MdKeyboardArrowRight,
  MdOutlineStarOutline,
} from "react-icons/md";
import foto from "../../assets/review.png";
import Image from "next/image";

function JoinSavingsMobile() {
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
        <div className="mt-4 flex items-center justify-between md:mt-8">
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
        <div className="items-center justify-center flex mt-4 md:mt-8">
          <button className="bg-[#4BF0A5] w-full py-2 rounded-lg font-semibold">
            Join Ajo
          </button>
        </div>
        <div className="mt-4 md:mt-8 flex flex-col bg-[#0A221C] rounded-lg p-4">
          <div className="flex flex-col gap-y-2">
            <p className="text-lg text-gray-300 font-medium">Target Ajo</p>
            <h4 className="md:text-4xl text-2xl font-semibold text-gray-200">
              ₦5,000,000
            </h4>
          </div>
          <div className="flex flex-col gap-y-1 mt-8">
            <div className="bg-[#174B37] h-4 rounded-md">
              <div className="w-[85%] bg-[#4BF0A5] h-4 rounded-lg"></div>
            </div>
            <div className="mx-4 flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500">20 hands</p>
              <p className="text-xs font-semibold text-gray-500">
                3 hands left
              </p>
            </div>
          </div>
          <div className="mt-8">
            <div className="text-md font-semibold text-gray-200">
              Ajo Details
            </div>
            {ajoDetails.map((item) => (
              <div
                className="flex items-center justify-between mt-2"
                key={item.id}
              >
                <p className="text-xs text-[#64857D]">{item.title}</p>
                <p className=" text-xs text-gray-200">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 bg-[#0A221C] rounded p-4">
          <div className="flex flex-col ml-5">
            <div className="flex gap-2 items-center">
              <p className="text-md text-gray-200 font-semibold">Reviews</p>
              <div className="p-0.5 rounded-full bg-gray-500">
                <MdKeyboardArrowRight />
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <div className="mt-1">
                <Image src={foto} alt="review-image" height={100} priority />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">
                  Shalom Jacobs
                </h4>
                <div className="flex gap-3 items-center text-orange-500 pb-3">
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                </div>
                <p className="text-xs text-gray-300">
                  Overall, thrift groups are a fantastic way to save money and
                  find unique items. If you love the thrill of the hunt
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <div className="mt-1">
                <Image src={foto} alt="review-image" height={100} priority />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">
                  Shalom Jacobs
                </h4>
                <div className="flex gap-3 items-center text-orange-500 pb-3">
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                </div>
                <p className="text-xs text-gray-300">
                  Overall, thrift groups are a fantastic way to save money and
                  find unique items. If you love the thrill of the hunt
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-2">
              <div className="mt-1">
                <Image src={foto} alt="review-image" height={100} priority />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200">
                  Shalom Jacobs
                </h4>
                <div className="flex gap-3 items-center text-orange-500 pb-3">
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                  <MdOutlineStarOutline />
                </div>
                <p className="text-xs text-gray-300">
                  Overall, thrift groups are a fantastic way to save money and
                  find unique items. If you love the thrill of the hunt
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinSavingsMobile;
