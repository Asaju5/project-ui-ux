import Layout from "@/components/Layout";
import { TbShieldLock } from "react-icons/tb";
import { FiArrowDownLeft } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Headertwo from "@/components/Headertwo";

function Transactions() {
  return (
    <Layout>
      <div className="grid grid-cols-1 p-6 gap-x-6 mt-6 gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5">
          <div className="order-2 lg:order-1 md:mt-5 col-span-2">
            <div className="w-full bg-[#0A221C] p-4 text-white rounded-md overflow-hidden">
              <div className="flex items-center gap-2">
                <div className="bg-[#113A2F] p-2 text-[#4BF0A5] rounded-md">
                  <TbShieldLock size={20} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-md font-bold tracking-wide">
                    Transactions
                  </h4>
                  <p className="text-xs text-gray-400 tracking-tighter">
                    Track your cash flow
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <h2 className="text-xs text-gray-200">Today</h2>
                <div className="flex justify-between items-center p-4 bg-[#1A5446] rounded-lg mt-8">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0A221C] p-2 text-[#4BF0A5] rounded-full">
                      <FiArrowDownLeft size={20} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm tracking-tighter">
                        Shalom deposited to Ajo
                      </p>
                      <p className="text-xs text-gray-400 tracking-tighter">
                        January 18th, 12:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-[#4BF0A5]">
                    + #500,000
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#1A5446] rounded-lg mt-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0A221C] p-2 text-[#4BF0A5] rounded-full">
                      <FiArrowDownLeft size={20} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm tracking-tighter">
                        Shalom deposited to Ajo
                      </p>
                      <p className="text-xs text-gray-400 tracking-tighter">
                        January 18th, 12:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-[#4BF0A5]">
                    + #500,000
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-[#1A5446] rounded-lg mt-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0A221C] p-2 text-[#4BF0A5] rounded-full">
                      <FiArrowDownLeft size={20} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm tracking-tighter">
                        Shalom deposited to Ajo
                      </p>
                      <p className="text-xs text-gray-400 tracking-tighter">
                        January 18th, 12:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-[#4BF0A5]">
                    + #500,000
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xs text-gray-200">Last 7 days</h2>
                <div className="flex justify-between items-center p-4 bg-[#1A5446] rounded-lg mt-8">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#0A221C] p-2 text-[#4BF0A5] rounded-full">
                      <FiArrowDownLeft size={20} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm tracking-tighter">
                        Shalom deposited to Ajo
                      </p>
                      <p className="text-xs text-gray-400 tracking-tighter">
                        January 18th, 12:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-[#4BF0A5]">
                    + #500,000
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-4 pt-4">
                <div />
                <div className="flex gap-2 items-center">
                  <p className="text-xs text-gray-400">showing 1 of 3</p>
                  <div className="p-1 rounded-full bg-slate-400 text-white cursor-pointer">
                    <MdKeyboardArrowLeft />
                  </div>
                  <div className="p-1 rounded-full bg-slate-400 text-white cursor-pointer">
                    <MdKeyboardArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end text-white order-1 lg:order-2 p-4 relative">
            <Headertwo />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Transactions;
