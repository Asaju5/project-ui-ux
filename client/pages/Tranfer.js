import Headertwo from "@/components/Headertwo";
import Layout from "@/components/Layout";
import { TbShieldLock } from "react-icons/tb";
import { MdArrowBackIosNew } from "react-icons/md";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";
import moneybag from "../assets/mineybag.png";
import Image from "next/image";
import { recentlyPaid } from "@/data";

function Tranfer() {
  return (
    <Layout>
      <div className="grid grid-cols-1 p-6 gap-x-6 mt-6 gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5">
          <div className="order-2 lg:order-1 md:mt-5 col-span-2">
            <div className="w-full bg-[#0A221C] p-4 text-white rounded-md relative">
              <div className="pb-8 cursor-pointer">
                <Link href="/" className="flex items-center gap-2">
                  <MdArrowBackIosNew />
                  <p className="text-xs">Go back</p>
                </Link>
              </div>
              <div className="flex items-center gap-2 ml-4 md:ml-0">
                <div className="bg-[#113A2F] p-2 text-[#4BF0A5] rounded-md">
                  <TbShieldLock size={20} />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-md font-bold tracking-wide">Transfer</h4>
                  <p className="text-xs text-gray-400 tracking-tighter">
                    Send money anywhere
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center pt-8">
                <div className="py-2 md:px-8 px-4  bg-[#113A2F] rounded-lg flex flex-col">
                  <label className="text-xs text-gray-500">Amount</label>
                  <div className="flex items-center justify-center">
                    <p>NGN</p>
                    <input
                      type="number"
                      inputMode="numeric"
                      className="h-8 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center pt-8">
                <div className="py-2 md:px-8 px-4 flex flex-col space-y-4">
                  <label className="text-xs text-gray-500">Destination</label>
                  <div className="flex items-center">
                    <div className="px-8 py-3 bg-[#113A2F] flex flex-col rounded-lg gap-y-4 items-center border border-[#43d694]">
                      <div className="p-2 bg-[#4BF0A5] h-10 w-10 rounded-full items-center">
                        <TbTopologyStarRing3
                          size={20}
                          className="ml-0.5 text-black"
                        />
                      </div>
                      <p className="text-xs font-semibold ml-3 md:ml-0">
                        MyFaysal Wallet
                      </p>
                    </div>
                    <div className="px-8 py-3 flex flex-col rounded-lg gap-y-4 items-center">
                      <div className="p-2 bg-[#4BF0A5] h-10 w-10 rounded-full items-center top-1">
                        <Image
                          src={moneybag}
                          alt="moneybag"
                          priority
                          className="h-5"
                          quality={50}
                        />
                      </div>
                      <p className="text-xs font-semibold ml-3 md:ml-0">
                        Other bank
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center pt-8">
                <div className="py-2 md:px-8 px-4  bg-[#113A2F] rounded-lg flex flex-col">
                  <label className="text-xs text-gray-500">
                    Faysal Wallet or Alias
                  </label>
                  <div className="flex items-center justify-center">
                    <FiSearch />
                    <input
                      type="text"
                      className="h-8 border-none focus:outline-none bg-[#113A2F] focus:ring-0 mb-[1px]"
                    />
                  </div>
                </div>
                <div className="ml-32 mt-1 text-sm">See Beneficiaries</div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 mb-2">Recently paid</p>
                  <div className="flex">
                    {/* {recentlyPaid.map((item) => (
                      <div className="py-1 bg-[#113A2F] rounded-t-lg w-[250px]">
                        <div
                          className="flex items-center justify-between mx-2"
                          key={item.id}
                        >
                          <Image
                            src={item.img}
                            alt={item.name}
                            priority
                            height={40}
                          />
                          <h1 className="text-xs font-semibold">
                            {item.name} <br />{" "}
                            <span className="text-[10px] font-light">
                              {item.subId}
                            </span>
                          </h1>

                          <div className="h-8 w-8 bg-[#4BF0A5] rounded-full items-center">
                            <ImArrowUpRight2 className="text-black mt-2 ml-2" />
                          </div>
                        </div>
                      </div>
                    ))} */}
                  </div>
                </div>
              </div>

              <div className="mt-8 mx-2 border-t border-gray-700 py-4">
                <div className="flex items-center justify-center mt-2">
                  <button className="bg-[#4BF0A5] py-2 px-6 md:px-8 rounded-lg text-gray-900 font-semibold">
                    Tranfer NGN 4000
                  </button>
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

export default Tranfer;
