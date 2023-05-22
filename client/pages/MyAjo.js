import Layout from "@/components/Layout";
import {
  MdKeyboardArrowLeft,
  MdOutlinePeopleOutline,
  MdLockOutline,
} from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import avatar from "../assets/user.png";
import bg2 from "../assets/ajopix.png";

import AjoGroup from "@/components/ajo/AjoGroup";

import AjoGroupMobile from "@/components/ajo/AjoGroupMobile";

function MyAjo() {
  return (
    <Layout>
      <div className="flex flex-col md:overflow-scroll max-h-screen py-4">
        <div className="hidden lg:flex items-center justify-between px-4">
          <div />
          <div className="flex justify-center text-white p-4">
            <div className="mr-2">
              <Image
                src={avatar}
                alt="avatar"
                priority
                quality={70}
                height={40}
                width={40}
              />
            </div>
            <div className="mb-3 flex flex-col items-center">
              <h4 className="font-semibold text-sm">Olumide Ajayi</h4>
              <p className="text-xs text-gray-300">Faysalid Lumijay</p>
            </div>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 p-6 lg:p-0">
          <div className="lg:hidden flex items-center gap-12 text-gray-300">
            <MdKeyboardArrowLeft size={30} />
            <h4 className="text-md font-semibold">Rotation Savings</h4>
          </div>
          <div className="hidden lg:flex flex-col gap-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <MdKeyboardArrowLeft size={30} />
              <h4 className="text-md font-medium">Go back</h4>
            </div>
            <div className="font-medium text-xl text-gray-200">
              Rotation Savings
            </div>
          </div>
        </div>
        <div className="md:w-[80%] w-[90%] flex bg-[#172723] mt-3 rounded-md ml-6 md:ml-0">
          <div className="flex items-center ml-0 md:ml-6">
            <div className="hidden md:flex font-semibold text-lg text-[#ECD06A]">
              Save for the Future
            </div>
            <div>
              <Image
                src={bg2}
                alt="avatar"
                priority
                quality={70}
                className="h-32 w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ajo menu mobile */}
        <div className="lg:hidden flex items-center justify-evenly mt-4 md:mr-32">
          <div className="flex flex-col items-center">
            <div className="flex p-3 bg-[#0A221C] rounded-xl text-white mb-1">
              <AiOutlinePlus size={30} />
            </div>
            <p className="text-white text-xs">Create Ajo</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex p-3 bg-[#0A221C] rounded-xl text-white mb-1">
              <MdOutlinePeopleOutline size={30} />
            </div>
            <p className="text-white text-xs">Join Ajo</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex p-3 bg-[#0A221C] rounded-xl text-white mb-1">
              <HiOutlineSquares2X2 size={30} />
            </div>
            <p className="text-white text-xs">Manage Ajo</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex p-3 bg-[#0A221C] rounded-xl text-white mb-1">
              <MdLockOutline size={30} />
            </div>
            <p className="text-white text-xs">My Ajo</p>
          </div>
        </div>

        {/*ajo menu lg screens */}
        <div className="hidden lg:flex items-center w-[80%] py-4 mt-4 bg-[#123F33] rounded-md">
          <div className="mx-6 flex justify-between items-center w-full">
            <div className="hidden lg:flex flex-col">
              <p className="text-lg font-semibold text-gray-300">
                Quick Actions
              </p>
              <p className="text-sm text-gray-400">What would you like to do</p>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col items-center">
                <div className="flex p-3 bg-[#0A221C] rounded-xl text-white mb-1">
                  <AiOutlinePlus size={30} />
                </div>
                <p className="text-white text-xs">Create Ajo</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex p-3 bg-[#0A221C] rounded-xl text-white mb-1">
                  <MdOutlinePeopleOutline size={30} />
                </div>
                <p className="text-white text-xs">Join Ajo</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex p-3 bg-[#0A221C] rounded-xl text-white mb-1">
                  <HiOutlineSquares2X2 size={30} />
                </div>
                <p className="text-white text-xs">Manage Ajo</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex p-3 bg-[#0A221C] rounded-xl text-white mb-1">
                  <MdLockOutline size={30} />
                </div>
                <p className="text-white text-xs">My Ajo</p>
              </div>
            </div>
          </div>
        </div>
        {/* search/filter mobile */}

        <div className="lg:hidden flex items-center mt-4">
          <div className="bg-[#1B5344] flex justify-center items-center mx-8 rounded-md py-2 w-full md:w-[75%]">
            <FiSearch size={25} className="text-gray-300 ml-4" />
            <input
              placeholder="Search by ID or Name"
              type="text"
              className="h-8 w-full border-none focus:outline-none bg-[#1B5344] focus:ring-0 mb-[1px] text-white placeholder:text-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="lg:hidden grid mt-4 md:w-[75%] bg-[#0A221C] mx-8 rounded-lg p-4">
          <AjoGroupMobile />
        </div>

        {/* filter/search  */}
        <div className="hidden lg:flex flex-col mt-4 w-[80%] bg-[#123F33] py-2 rounded-md mb-5">
          <div className="mx-4 flex items-center">
            <div className="flex items-center text-gray-300 bg-[#1B5344] px-2 rounded-md">
              <FiSearch size={20} />
              <input
                type="text"
                placeholder="Search AjoID"
                className="border-none focus:outline-none bg-[#1B5344] focus:ring-0 mb-[1px] text-gray-300 rounded-md"
              />
            </div>
            <div className="mx-4 text-gray-300 md:text-[12px] lg:text-sm">
              Sort by
            </div>
            <div className="mr-4">
              <select className="border-none focus:outline-none bg-[#1B5344] focus:ring-0 mb-[1px] text-gray-300 rounded-md text-sm">
                <option>Amount</option>
                <option>Amount</option>
              </select>
            </div>
            <div>
              <select className="border-none focus:outline-none bg-[#1B5344] focus:ring-0 mb-[1px] text-gray-300 rounded-md text-sm">
                <option>0-100k</option>
                <option>Amount</option>
              </select>
            </div>
          </div>
          <div className="py-3">
            <AjoGroup />
          </div>
          <div className="mx-4 pt-8 pb-4 flex justify-end items-center gap-3">
            <div className="text-sm text-gray-200">showing 1 0f 3</div>
            <div className="flex gap-2 cursor-pointer">
              <div className="p-0.5 bg-[#1A5446] text-gray-200 rounded">
                <RiArrowLeftSLine />
              </div>
              <div className="p-0.5 bg-[#1A5446] text-gray-200 rounded">
                <RiArrowRightSLine />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyAjo;
