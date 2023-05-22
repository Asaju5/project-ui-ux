import Layout from "@/components/Layout";

import {
  MdKeyboardArrowLeft,
  MdOutlinePeopleOutline,
  MdKeyboardArrowRight,
  MdOutlineArrowOutward,
} from "react-icons/md";

import Image from "next/image";
import avatar from "../assets/user.png";
import bgfoto from "../assets/rectangle.png";
import { ajoDetails } from "@/data";
import ajo1 from "../assets/ajo1.png";
import AjoDetailsMobile from "@/components/ajo/AjoDetailsMobile";

function AjoDetails() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="hidden lg:flex flex-col overflow-scroll max-h-screen py-5">
          <div className="flex flex-col py-4">
            <div className="flex items-center justify-between px-4">
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
              <div className="hidden lg:flex flex-col gap-y-4">
                <div className="flex items-center gap-4 text-gray-300 cursor-pointer">
                  <MdKeyboardArrowLeft size={30} />
                  <h4 className="text-md font-medium">Go back</h4>
                </div>
                <div className="flex items-center gap-2">
                  <div className="font-medium text-xl text-gray-200">
                    Rotation Savings
                  </div>
                  <div className="text-xl text-gray-200 mt-1">{`>`}</div>
                  <div className="text-xl font-semibold text-gray-200">
                    {" "}
                    Loop Ajo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2/5 bg-[#0A221C] p-2 rounded-md">
              <div className="flex flex-col justify-center items-center py-3">
                <div className="p-4 bg-[#E86B35] rounded-full text-[#0A221C]">
                  <MdOutlinePeopleOutline size={40} />
                </div>
                <div className="mt-4 text-xl font-semibold text-gray-200">
                  Loop Ajo
                </div>
              </div>

              <div className="bg-[#123F33] mx-4 py-4 rounded-md">
                <div className="mx-3 flex items-center justify-between">
                  <div className="flex flex-col items-center text-center">
                    <p className="text-sm text-gray-400">AjoID</p>
                    <p className="text-sm font-semibold text-gray-200">
                      00000000
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <p className="text-sm text-gray-400">Hands</p>
                    <p className="text-sm font-semibold text-gray-200">47/50</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <p className="text-sm text-gray-400">Ajo Type</p>
                    <p className="text-sm font-semibold text-gray-200">
                      Community
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#123F33] mx-4 py-2 rounded-md mt-4">
                <div className="mx-3 flex flex-col gap-y-4">
                  <div className="flex items-center justify-between cursor-pointer">
                    <div className="text-gray-200 flex items-center gap-1">
                      <p>Hands</p>
                      <div className="p-0.5 rounded-full text-black bg-[#4BF0A5]">
                        <MdKeyboardArrowRight />
                      </div>
                    </div>
                    <div className="text-[#4BF0A5]">See All</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Image src={ajo1} alt="ajopix" priority />
                      <h4 className="text-gray-300 text-md">Fiyin</h4>
                    </div>
                    <div>
                      <Image src={ajo1} alt="ajopix" priority />
                      <h4 className="text-gray-300 text-md">Fiyin</h4>
                    </div>
                    <div>
                      <Image src={ajo1} alt="ajopix" priority />
                      <h4 className="text-gray-300 text-md">Fiyin</h4>
                    </div>
                    <div>
                      <Image src={ajo1} alt="ajopix" priority />
                      <h4 className="text-gray-300 text-md">Fiyin</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#123F33] mx-4 py-2 rounded-md mt-4 flex flex-col">
                <div className="mx-4 flex items-center justify-between">
                  <p className="text-gray-200">Yesterday</p>
                  <p className="text-[#4BF0A5]">See All</p>
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
            <div className="w-3/5">
              <div className="mx-4 mt-4">
                <div className="relative">
                  <Image
                    src={bgfoto}
                    alt="..."
                    priority
                    className="rounded-lg"
                  />
                  <div className="flex items-center justify-end absolute bottom-12 left-8 text-2xl text-[#ECD06A] font-semibold">
                    Save for the <br /> Future
                  </div>
                  <div className="flex items-center justify-end absolute bottom-12 right-8">
                    <button className="px-4 py-2 bg-[#4BF0A5] rounded-lg font-semibold cursor-pointer">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-[#0A221C] mx-4 mt-6 rounded-md py-8">
                <div className="p-4">
                  <div className="flex flex-col">
                    <p className="text-[#4BF0A5] text-md">Ajo Target</p>
                    <h4 className="text-2xl font-semibold text-gray-200 tracking-wider">
                      ₦5,000,000
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col gap-y-1">
                  <div className="mx-4 bg-[#174B37] h-4 rounded-md">
                    <div className="w-[85%] bg-[#4BF0A5] h-4 rounded-lg"></div>
                  </div>
                  <div className="mx-4 flex items-center justify-between">
                    <p className="text-xs font-semibold text-gray-500">
                      20 hands
                    </p>
                    <p className="text-xs font-semibold text-gray-500">
                      3 hands left
                    </p>
                  </div>
                </div>
                <div className="mt-8 mx-4">
                  <div className="text-md font-semibold text-gray-200">
                    Ajo Details
                  </div>
                  {ajoDetails.map((item) => (
                    <div
                      className="flex items-center justify-between mt-2"
                      key={item.id}
                    >
                      <p className="text-lg text-[#64857D]">{item.title}</p>
                      <p className=" text-lg text-gray-200">{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* mobile and medium screen */}
        <div className="flex flex-col mx-4 lg:hidden md:overflow-scroll max-h-screen">
          <AjoDetailsMobile />
        </div>
      </div>
    </Layout>
  );
}

export default AjoDetails;
