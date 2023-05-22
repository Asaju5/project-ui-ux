import Layout from "@/components/Layout";
import { MdKeyboardArrowLeft } from "react-icons/md";

function AjoInformation() {
  return (
    <Layout>
      <div className="lg:hidden flex flex-col">
        <div className="flex flex-col p-4 overflow-scroll">
          <div className="flex items-center gap-16 md:gap-8">
            <MdKeyboardArrowLeft size={30} className="text-gray-200" />
            <h4 className="text-gray-200 font-semibold">Rotating Savings</h4>
          </div>

          <div>
            <div className="flex items-center justify-center mt-8">
              <h4 className="text-gray-200 font-semibold text-sm">
                Savings Information
              </h4>
            </div>

            <div>
              <div className="flex justify-center items-center mt-4 md:mt-8">
                <div className="w-[320px] py-2 rounded-lg bg-[#123F33] flex flex-col">
                  <p className="text-sm text-gray-400 ml-4">Amount</p>
                  <div className="flex items-center gap-1 mx-4">
                    <p className="font-semibold text-gray-200">NGN</p>
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="0.00"
                      className="h-8 border-none focus:outline-none bg-[#123F33] focus:ring-0 mb-[1px] text-white text-lg placeholder:text-gray-200 p-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mt-4 md:mt-8">
                <div className="w-[320px] py-2 rounded-lg bg-[#123F33] flex flex-col">
                  <p className="text-sm text-gray-400 ml-4">Cordinator Fee</p>
                  <div className="flex items-center gap-1 mx-4">
                    <p className="font-semibold text-gray-200">NGN</p>
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="0.00"
                      className="h-8 border-none focus:outline-none bg-[#123F33] focus:ring-0 mb-[1px] text-white text-lg placeholder:text-gray-200 p-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mt-4 md:mt-8">
                <div className="w-[320px] py-2 rounded-lg bg-[#123F33] flex flex-col">
                  <p className="text-sm text-gray-400 ml-4">Start Date</p>
                  <div className="flex items-center gap-1 mx-4">
                    <p className="font-semibold text-gray-200 md:text-sm">
                      Date
                    </p>
                    <input
                      type="date"
                      inputMode="numeric"
                      className="h-8 border-none focus:outline-none bg-[#123F33] focus:ring-0 mb-[1px] text-white text-lg placeholder:text-gray-200 p-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mt-12">
              <h4 className="text-gray-200 font-semibold text-sm">
                Rotation Information
              </h4>
            </div>

            <div>
              <div className="flex justify-center items-center mt-4 md:mt-8">
                <div className="w-[320px] py-2 rounded-lg bg-[#123F33] flex flex-col">
                  <p className="text-sm text-gray-400 ml-4">Number of Hands</p>
                  <div className="flex items-center gap-1 mx-4">
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="0.00"
                      className="h-8 border-none focus:outline-none bg-[#123F33] focus:ring-0 mb-[1px] text-white text-lg placeholder:text-gray-200 p-0"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mt-4 md:mt-8">
                <div className="w-[320px] py-2 rounded-lg bg-[#123F33] flex flex-col">
                  <p className="text-sm text-gray-400 ml-4">Frequency</p>
                  <div className="flex items-center gap-1 mx-4">
                    <select className="border-none focus:outline-none bg-[#123F33] focus:ring-0 mb-[1px] text-white text-lg">
                      <option>Select Frequency</option>
                      <option>Select Frequency</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center mt-4 md:mt-8">
                <div className="w-[320px] py-2 rounded-lg bg-[#123F33] flex flex-col">
                  <p className="text-sm text-gray-400 ml-4">Start Date</p>
                  <div className="flex items-center gap-1 mx-4">
                    <p className="font-semibold text-gray-200 md:text-sm">
                      Date
                    </p>
                    <input
                      type="date"
                      inputMode="numeric"
                      className="h-8 border-none focus:outline-none bg-[#123F33] focus:ring-0 mb-[1px] text-white text-lg placeholder:text-gray-200 p-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4 md:mt-8">
            <button className="w-[320px] py-2 rounded-lg border border-[#4BF0A5] text-[#4BF0A5]">
              Create
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AjoInformation;
