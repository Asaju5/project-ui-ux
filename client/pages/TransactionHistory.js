import Headertwo from "@/components/Headertwo";
import Layout from "@/components/Layout";
import { TbShieldLock } from "react-icons/tb";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { HiOutlineArrowDownLeft } from "react-icons/hi2";

function TransactionHistory() {
  return (
    <Layout>
      <div className="grid grid-cols-1 p-6 gap-x-6 mt-6 gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5">
          <div className="order-2 lg:order-1 md:mt-5 col-span-2">
            <div className="w-full bg-[#0A221C] text-white rounded-md overflow-hidden">
              <div className="flex mb-6 gap-4 items-center p-4">
                <MdKeyboardArrowLeft size={30} />
                <p className="text-xs cursor-pointer">Go back</p>
              </div>
              <div className="flex items-center gap-2 px-4 pb-12">
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
              <div className="w-full bg-[#1A5446] mb-6">
                <div className="flex flex-col items-center justify-center pt-5">
                  <div className="p-4 bg-[#0A221C] rounded-full">
                    <HiOutlineArrowDownLeft
                      size={20}
                      className="text-[#4BF0A5]"
                    />
                  </div>
                  <div className="flex flex-col items-center py-4">
                    <h4 className="text-xl font-medium]">
                      Shalom Deposited to Ajo
                    </h4>
                    <p className="text-xs text-gray-300">January 28th, 12 PM</p>
                  </div>
                  <div className="pb-8">
                    <h4 className="text-2xl md:text-4xl font-semibold text-[#4BF0A5] tracking-wider">
                      + ₦500,000
                    </h4>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between px-6">
                <h2 className="text-md">Transaction Reference</h2>
                <h2 className="text-gray-400 text-sm">TWU4J3KPUYQA8J12Z7VI</h2>
              </div>
              <div className="w-full flex items-center justify-between p-6">
                <h2 className="text-md">Group:</h2>
                <h2 className="text-gray-400 text-sm">Ajo</h2>
              </div>

              <div className="flex items-center justify-center pb-4">
                <button className="bg-[#4BF0A5] px-8 md:px-16 py-3 rounded-md text-black font-semibold">
                  Print transaction receipt
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center text-white order-1 lg:order-2 p-4 relative">
            <Headertwo />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TransactionHistory;
