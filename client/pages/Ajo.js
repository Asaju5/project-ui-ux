import Layout from "@/components/Layout";
import {
  MdKeyboardArrowLeft,
  MdOutlinePeopleOutline,
  MdLockOutline,
} from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { SlHourglass } from "react-icons/sl";
import Image from "next/image";
import avatar from "../assets/user.png";
import bg2 from "../assets/ajopix.png";

function Ajo() {
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

        <div className="flex items-center justify-center mt-12 md:mt-8 md:w-[80%]">
          <div className="flex flex-col items-center">
            <div className="bg-[#257857] p-4 rounded-full text-[#4BF0A5]">
              <SlHourglass size={20} />
            </div>
            <div className="flex flex-col items-center text-gray-400 text-sm mt-2">
              <p>You are yet to Create or Join any</p>
              <p>Savings group</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Ajo;
