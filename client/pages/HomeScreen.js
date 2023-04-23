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

function HomeScreen() {
  return (
    <Layout>
      <div>
        <Header />
        <div className="grid lg:grid-cols-2 gap-10 px-4 mt-4 lg:py-4">
          <div>
            <div className="p-3 bg-[#0A221C] rounded-lg">
              <div className="flex justify-between mx-4">
                <div>
                  <p className="flex items-center text-gray-300 gap-1 text-sm">
                    Available balance{" "}
                    <span>
                      <MdOutlineKeyboardArrowDown className="p-[0.5px] bg-slate-400 rounded-full text-black" />
                    </span>
                  </p>
                  <h2 className="text-2xl text-gray-100 font-semibold tracking-widest">
                    #3,500,100
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-[#4BF0A5] rounded-full">
                    <BsSend size={20} />
                  </div>
                  <div className="p-2 bg-[#4BF0A5] rounded-full">
                    <BsPlus size={20} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mt-6">
                <div className="flex flex-col">
                  <div className="flex p-4 bg-[#0A221C] rounded-xl text-white">
                    <GoCreditCard size={30} />
                  </div>
                  <p className="ml-4 text-white">Bills</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex p-4 bg-[#0A221C] rounded-xl text-white">
                    <MdLockOutline size={30} />
                  </div>
                  <p className="text-white">Ajo</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex p-4 bg-[#0A221C] rounded-xl text-white">
                    <BsCart3 size={30} />
                  </div>
                  <p className="text-white">Merchant</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex p-4 bg-[#0A221C] rounded-xl text-white">
                    <SiBuffer size={30} />
                  </div>
                  <p className="text-white">Voucher</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="pt-4 flex flex-col">
                  <div className="flex items-center text-gray-300 text-lg font-medium gap-2 mb-4">
                    <p>Promos & Discounts</p>
                    <span className="text-black p-[1px] bg-slate-400 rounded-full">
                      <MdKeyboardArrowRight />
                    </span>
                  </div>
                  <div className="relative bg-[#FFDF6C]">
                    <Image src={foto} alt=".." priority quality={50} />
                    <div className="p-3 bg-[#0a221c] absolute bottom-6 lg:w-[70%] left-0 rounded-lg">
                      <p className="text-md md:text-xl font-bold text-[#E46B34] md:ml-4">
                        30% OFF
                      </p>
                      <p className="text-lg md:text-2xl font-bold text-[#E46B34] md:ml-4">
                        Black Friday Deal
                      </p>
                      <p className="text-white text-sm md::text-md md:ml-4">
                        Get discount for every top up,
                        <br />
                        transfer and payment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-3 bg-[#0A221C] rounded-lg overflow-scroll">
              <div className="flex items-center justify-between mx-4">
                <div className="text-sm md:text-xl font-normal flex text-[#4BF0A5]">
                  Insight
                </div>
                <div className="flex flex-col items-center text-gray-300 border-r border-green-400 pr-4 ml-4 md:pr-12 md:ml-8 ">
                  <p className="text-xs md:text-sm">Income</p>
                  <h2 className="text-white font-semibold text-lg">#400,000</h2>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xs md:text-sm text-gray-300">Cashout</p>
                  <h2 className="text-white font-semibold text-lg ml-4">
                    #350,000
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#0A221C] rounded-lg mt-5">
              <div className="flex gap-3 items-center mx-4">
                <p className="text-gray-300 text-lg">Recent Activities</p>
                <div className="p-1 bg-slate-400 rounded-full">
                  <MdKeyboardArrowRight />
                </div>
              </div>

              <div className="pt-6 md:pt-1 lg:pt-6 mx-4 items-center">
                {recentActivities.map((item) => (
                  <div
                    className="flex gap-3 items-center py-4 md:py-1 lg:py-4"
                    key={item.id}
                  >
                    <div className="p-3 bg-[#E86B35] rounded-full text-white">
                      {item.icon}
                    </div>
                    <div className="flex flex-col mb-2">
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
      </div>
    </Layout>
  );
}

export default HomeScreen;
