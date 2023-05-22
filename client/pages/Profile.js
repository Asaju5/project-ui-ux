import Layout from "@/components/Layout";
import { TbShieldLock } from "react-icons/tb";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdContentCopy,
} from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsQuestionCircle, BsPencil } from "react-icons/bs";
import { motion } from "framer-motion";
import Security from "@/components/Profile/Security";
import Image from "next/image";
import foto from "../assets/ajo3.png";
import qrcode from "../assets/qrcode.png";
import { useState } from "react";

function Profile() {
  const menu_toggle = {
    //device view
    open: {
      transition: {
        damping: 40,
      },
    },

    closed: {
      transition: {
        damping: 40,
      },
    },
  };
  const [isOpen, setOpenMenu] = useState(true);
  return (
    <Layout>
      <div className="hidden lg:flex flex-col overflow-scroll max-h-screen py-5">
        <div className="flex gap-4">
          <div className="w-3/5 bg-[#0A221C] p-4 rounded-md max-h-[600px] overflow-scroll pb-6">
            <div className="bg-[#113A2F] py-2 mt-2 rounded-lg mb-4">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className=" bg-[#216755] p-2 text-[#4BF0A5] rounded-md">
                    <TbShieldLock size={20} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-md font-bold tracking-wide text-gray-200">
                      Security
                    </h4>
                    <p className="text-xs text-gray-400 tracking-tighter">
                      Password, Pin and Others...
                    </p>
                  </div>
                </div>
                <motion.div
                  onClick={() => setOpenMenu(!isOpen)}
                  animate={isOpen ? { rotate: 0 } : { rotate: 180 }}
                  transition={{ duration: 0 }}
                  className="bg-[#4BF0A5] p-2 rounded-full"
                >
                  <MdOutlineKeyboardArrowDown />
                </motion.div>
              </div>
              {isOpen ? <Security /> : ""}
            </div>
            {/* <div className="bg-[#113A2F] py-2 mt-2 rounded-lg mb-4">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className=" bg-[#216755] p-2 text-[#4BF0A5] rounded-md">
                    <IoIosCheckmarkCircleOutline size={20} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-md font-bold tracking-wide text-gray-200">
                      Account Verification
                    </h4>
                    <p className="text-xs text-gray-400 tracking-tighter">
                      Verify BVN and Phone Number
                    </p>
                  </div>
                </div>
                <motion.div
                  onClick={() => setOpenMenu(!isOpen)}
                  animate={isOpen ? { rotate: 0 } : { rotate: 180 }}
                  transition={{ duration: 0 }}
                  className="bg-[#4BF0A5] p-2 rounded-full"
                >
                  <MdOutlineKeyboardArrowDown />
                </motion.div>
              </div>
            </div> */}
            {/* <div className="bg-[#113A2F] py-2 mt-2 rounded-lg ">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className=" bg-[#216755] p-2 text-[#4BF0A5] rounded-md">
                    <BsQuestionCircle size={20} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-md font-bold tracking-wide text-gray-200">
                      Get Help
                    </h4>
                    <p className="text-xs text-gray-400 tracking-tighter">
                      Support and Feedback
                    </p>
                  </div>
                </div>
                <motion.div className="bg-[#4BF0A5] p-2 rounded-full">
                  <MdOutlineKeyboardArrowUp />
                </motion.div>
              </div>
              <Security />
            </div> */}
          </div>
          <div className="w-2/5 bg-[#0A221C] p-4 rounded-md max-h-screen overflow-scroll pb-3 mr-5">
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-y-2">
                <div className="relative cursor-pointer">
                  <Image src={foto} alt="profile-pics" priority />
                  <BsPencil
                    size={15}
                    className="bg-[#E86B35] rounded-xl bottom-1 right-0 absolute text-white"
                  />
                </div>
                <h4 className="text-md font-semibold text-gray-200">
                  Olumide Ajayi
                </h4>
              </div>
            </div>
            <div className="py-2 bg-[#113A2F] px-3 rounded-md mt-5 flex items-center justify-between">
              <div className="flex flex-col text-gray-200">
                <h4 className="text-xs">Account No.</h4>
                <div className="flex gap-2 items-center">
                  <p className="font-semibold">95708578587</p>
                  <MdContentCopy className="text-[#4BF0A5]" />
                </div>
              </div>
              <div className="border-l border-[#4BF0A5] px-2 flex flex-col text-gray-200">
                <div className="flex flex-col text-gray-200">
                  <h4 className="text-[10px]">Faysal ID</h4>
                  <p className="font-semibold text-xs">Lumijay</p>
                </div>
              </div>
            </div>
            <div className="py-2 bg-[#113A2F] px-3 rounded-md mt-5 flex flex-col">
              <div className="flex items-center justify-between text-xs text-gray-200">
                <p>Your Details</p>
                <BsPencil className="text-[#4BF0A5]" size={15} />
              </div>
              <div className="flex flex-col gap-y-2 mt-4">
                <div className="flex flex-col">
                  <p className="text-xs text-gray-400">Full Name</p>
                  <h4 className="text-sm font-semibold text-gray-200">
                    Olumide Ajayi
                  </h4>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-400">Mobile Number</p>
                  <h4 className="text-sm font-semibold text-gray-200">
                    080123456789
                  </h4>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-gray-400">Email</p>
                  <h4 className="text-sm font-semibold text-gray-200">
                    Olumide Ajayi
                  </h4>
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-center h-25 mt-4">
              <Image src={qrcode} alt="qrcode" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
