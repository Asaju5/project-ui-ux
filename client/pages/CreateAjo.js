import Layout from "@/components/Layout";
import Image from "next/image";
import avatar from "../assets/user.png";
import { MdKeyboardArrowLeft, MdPersonOutline } from "react-icons/md";
import CreateAjoMobile from "@/components/ajo/CreateAjoMobile";

function CreateAjo() {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="hidden lg:flex flex-col md:overflow-scroll max-h-screen p-4">
          <div className="flex justify-end text-white">
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
          <div>
            <div className="hidden lg:flex flex-col gap-y-4">
              <div className="flex items-center gap-4 text-gray-300">
                <MdKeyboardArrowLeft size={30} />
                <h4 className="text-sm font-medium">Go back</h4>
              </div>
              <div className="font-medium text-xl text-gray-200">
                Create Ajo
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#0A221C] mt-4 rounded-lg px-4 py-8">
              <div className="flex flex-col mx-8">
                <div className="flex items-center p-1 border-b w-[80%]">
                  <input
                    type="text"
                    placeholder="Enter Savings group name here"
                    className="w-full p-0 h-8 border-none focus:outline-none bg-[#0A221C] focus:ring-0 mb-[1px] text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="flex flex-col mt-4 w-[80%]">
                  <div className="text-xs text-gray-400">
                    Select Savings Type
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="bg-[#113A2F] w-[300px] py-3 rounded-md">
                      <div className="mx-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input type="radio" />
                          <h4 className="text-gray-200">Solo Ajo</h4>
                        </div>
                        <div className="bg-[#24725D] p-1.5 rounded-md text-[#4BF0A5]">
                          <MdPersonOutline size={20} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#0A221C] border w-[300px] py-3 rounded-md">
                      <div className="mx-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <input type="radio" />
                          <h4 className="text-gray-500">Community Ajo</h4>
                        </div>
                        <div className="bg-[#103028] p-1.5 rounded-md text-[#4BF0A5]">
                          <MdPersonOutline size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-8 flex items-center justify-between mt-8">
                <div className="flex flex-col gap-y-4">
                  <h4 className="text-md font-semibold text-gray-200">
                    Savings Information
                  </h4>

                  <div className="py-1 px-6  bg-[#113A2F] rounded-lg flex flex-col">
                    <label className="text-xs text-gray-400">Amount</label>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-200">NGN</p>
                      <input
                        type="number"
                        inputMode="numeric"
                        className="h-8 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] text-white text-lg"
                      />
                    </div>
                  </div>
                  <div className="py-1 px-6  bg-[#113A2F] rounded-lg flex flex-col">
                    <label className="text-xs text-gray-400">
                      Cordinator Fee
                    </label>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-200 ">NGN</p>
                      <input
                        type="number"
                        inputMode="numeric"
                        className="h-8 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] text-white text-lg"
                      />
                    </div>
                  </div>
                  <div className="py-1 px-6  bg-[#113A2F] rounded-lg flex flex-col">
                    <label className="text-xs text-gray-400">Start Date</label>
                    <div className="flex items-center">
                      <p className="text-gray-200">Date</p>
                      <input
                        type="date"
                        inputMode="numeric"
                        className="h-8 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] text-white text-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4">
                  <h4 className="text-md font-semibold text-gray-200">
                    Rotation Information
                  </h4>

                  <div className="py-1 px-6  bg-[#113A2F] rounded-lg flex flex-col">
                    <label className="text-xs text-gray-400">
                      Number of Hands
                    </label>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-200">NGN</p>
                      <input
                        type="number"
                        inputMode="numeric"
                        className="h-8 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] text-white text-lg"
                      />
                    </div>
                  </div>
                  <div className="py-1 px-6  bg-[#113A2F] rounded-lg flex flex-col">
                    <label className="text-xs text-gray-400">
                      Frequency of Contribution
                    </label>
                    <div className="flex items-center justify-center">
                      <p className="text-gray-200 ">NGN</p>
                      <input
                        type="number"
                        inputMode="numeric"
                        className="h-8 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] text-white text-lg"
                      />
                    </div>
                  </div>
                  <div className="py-1 px-6  bg-[#113A2F] rounded-lg flex flex-col">
                    <label className="text-xs text-gray-400">
                      Disburstment Date
                    </label>
                    <div className="flex items-center">
                      <p className="text-gray-200">Date</p>
                      <input
                        type="date"
                        inputMode="numeric"
                        className="h-8 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px] text-white text-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-4 py-2">
                <button className="bg-[#4BF0A5] w-[300px] py-2 rounded-lg text-md font-semibold">
                  Create Group
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex flex-col">
          <CreateAjoMobile />
        </div>
      </div>
    </Layout>
  );
}

export default CreateAjo;
