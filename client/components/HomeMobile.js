import {
  MdOutlineKeyboardArrowDown,
  MdLockOutline,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsSend, BsPlus, BsCart3 } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import { SiBuffer } from "react-icons/si";
import Link from "next/link";
import { recentActivities } from "@/data";
import Image from "next/image";
import foto from "../assets/moneypix.png";

function HomeMobile() {
  return (
    <div className="w-full">
      <div className="bg-[#0A221C] mx-8 px-5 py-4 rounded-lg flex items-center justify-between ">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-gray-300 text-sm tracking-tighter">
              Available balance
            </p>
            <MdOutlineKeyboardArrowDown className="bg-gray-400 rounded-full" />
          </div>
          <div className="text-xl font-semibold text-white tracking-wider">
            #3,500,000
          </div>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <div className="bg-[#4BF0A5] p-2 rounded-full">
            <BsSend />
          </div>
          <div className="bg-[#4BF0A5] p-2 rounded-full">
            <BsPlus />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 mx-8 cursor-pointer">
        <div className="flex flex-col items-center text-white">
          <div className="p-2 rounded-lg bg-[#0A221C]">
            <GoCreditCard size={30} />
          </div>
          <p>Bills</p>
        </div>
        <div>
          <Link href={"/Ajo"} className="flex flex-col items-center text-white">
            <div className="p-2 rounded-lg bg-[#0A221C]">
              <MdLockOutline size={30} />
            </div>
            <p>Ajo</p>
          </Link>
        </div>
        <div className="flex flex-col items-center text-white">
          <div className="p-2 rounded-lg bg-[#0A221C]">
            <BsCart3 size={30} />
          </div>
          <p>Merchant</p>
        </div>
        <div className="flex flex-col items-center text-white">
          <div className="p-2 rounded-lg bg-[#0A221C]">
            <SiBuffer size={30} />
          </div>
          <p>Voucher</p>
        </div>
      </div>
      <div className="bg-[#0A221C] mx-8 px-5 py-4 rounded-lg flex flex-col mt-8">
        <div className="flex items-center gap-2">
          <p className="text-gray-300"> Recent Activities</p>
          <MdKeyboardArrowRight className="bg-gray-400 rounded-full" />
        </div>

        <div className="pt-6  mx-4 items-center max-h-[300px] overflow-y-scroll">
          {recentActivities.map((item) => (
            <div className="flex gap-3 items-center py-4" key={item.id}>
              <div className="p-3 bg-[#E86B35] rounded-full text-white">
                {item.icon}
              </div>
              <div className="flex flex-col mb-1">
                <h4 className="text-sm text-gray-200">{item.name}</h4>
                <p className="text-xs text-gray-500">
                  {item.day}, {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden sm:flex flex-col mt-8">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold text-gray-300">
              Promos and Discounts
            </p>
            <MdKeyboardArrowRight className="rounded-full bg-gray-400" />
          </div>
          <div className="rounded-lg mt-4 relative">
            <Image
              src={foto}
              alt="homepage"
              priority
              className="object-cover bg-[#FFDF6C]"
            />
            <div className="bg-[#0A221C] rounded-lg w-[70%] absolute left-1 bottom-0">
              <div className="mx-5">
                <p className="text-[#E46B34] text-xs">30% OFF</p>
                <h4 className="text-md font-semibold text-[#E46B34]">
                  Black Friday Deal
                </h4>
                <p className="text-gray-300 text-xs">
                  Get discount for every top-up, transfer and payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMobile;
