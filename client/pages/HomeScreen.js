import Header from "@/components/Header";
import Layout from "../components/Layout";
import {
  MdOutlineKeyboardArrowDown,
  MdLockOutline,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsSend, BsPlus, BsCart3 } from "react-icons/bs";
import { GoCreditCard } from "react-icons/go";
import { SiBuffer } from "react-icons/si";
import Image from "next/image";
import foto from "../assets/moneypix.png";
import { recentActivities } from "@/data";
import Link from "next/link";
import HomeMobile from "@/components/HomeMobile";

function HomeScreen() {
  return (
    <Layout>
      <div>
        <Header />
        <div className="flex flex-col mt-12 overflow-hidden">
          <div className="hidden lg:flex items-center justify-between mx-8">
            <div className="w-[400px] flex flex-col">
              <div className="bg-[#0A221C] w-full py-2 px-8 rounded-lg flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <p className="text-md text-gray-300 tracking-tighter">
                      Available balance
                    </p>
                    <MdOutlineKeyboardArrowDown className="bg-gray-400 rounded-full" />
                  </div>
                  <h4 className="text-white text-2xl font-semibold tracking-widest">
                    #3,520,100
                  </h4>
                </div>
                <div className="flex gap-2 cursor-pointer">
                  <div className="bg-[#4BF0A5] p-2 rounded-full">
                    <BsSend />
                  </div>
                  <div className="bg-[#4BF0A5] p-2 rounded-full">
                    <MdKeyboardArrowRight />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 mx-2 cursor-pointer">
                <div className="flex flex-col items-center text-white">
                  <div className="p-2 rounded-lg bg-[#0A221C]">
                    <GoCreditCard size={30} />
                  </div>
                  <p>Bills</p>
                </div>
                <div>
                  <Link
                    href={"/Ajo"}
                    className="flex flex-col items-center text-white"
                  >
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
              <div className="flex flex-col mt-4">
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold text-gray-300">
                    Promos and Discounts
                  </p>
                  <MdKeyboardArrowRight className="rounded-full bg-gray-400" />
                </div>
                <div className="bg-[#FFDF6C] rounded-lg mt-4 relative">
                  <Image src={foto} alt="homepage" priority />
                  <div className="bg-[#0A221C] rounded-lg w-[70%] absolute left-0 bottom-5">
                    <div className="mx-5 py-2">
                      <p className="text-[#E46B34]">30% OFF</p>
                      <h4 className="text-lg font-semibold text-[#E46B34]">
                        Black Friday Deal
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Get discount for every top-up, transfer and payment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[400px] flex flex-col">
              <div className="bg-[#0A221C] w-full py-3 px-8 rounded-lg flex items-center justify-between">
                <div className="text-[#4BF0A5] font-semibold">Insight</div>
                <div className="flex flex-col">
                  <p className="text-sm text-gray-300">Income</p>
                  <h4 className="text-xl font-semibold text-white">#409,000</h4>
                </div>
                <div className="flex flex-col border-l pl-3">
                  <p className="text-sm text-gray-300">Cashout</p>
                  <h4 className="text-xl font-semibold text-white">#309,000</h4>
                </div>
              </div>
              <div className="p-4 bg-[#0A221C] rounded-lg mt-5 overflow-y-scroll h-[320px]">
                <div className="flex gap-3 items-center mx-4">
                  <p className="text-gray-300 text-lg">Recent Activities</p>
                  <div className="p-1 bg-slate-400 rounded-full">
                    <MdKeyboardArrowRight />
                  </div>
                </div>

                <div className="pt-6  mx-4 items-center">
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
              </div>
            </div>
          </div>
          <div className="lg:hidden flex">
            <HomeMobile />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomeScreen;
