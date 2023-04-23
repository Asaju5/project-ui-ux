import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

function WelcomePage() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="w-[90%] lg:w-[50%] h-[70%] md:h-[85%] bg-[#0A221C] rounded-lg">
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-white text-sm p-4 md:p-4 lg:p-8">
              Welcome to Faysal
            </h4>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-bold text-3xl md:text-4xl lg:text-2xl mb-4 text-white"
            >
              Hi Olumide
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-center justify-center text-gray-300 text-md md:w-1/2 px-4 md:tracking-widest lg:tracking-wider"
            >
              Welcome to Faysal, you have successfully created an account
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="space-y-4 md:space-y-8 -mt-8 md:-mt-0"
            >
              <div className="flex flex-col items-center justify-center pt-12 lg:pt-6">
                <div className="flex flex-col justify-center items-center bg-[#223524] w-[200px] h-[200px] rounded-full">
                  <div className="flex flex-col bg-[#64683A] items-center justify-center w-[85%] h-[85%] rounded-full">
                    <div className="flex flex-col bg-[#B2A353] items-center justify-center w-[85%] h-[85%] rounded-full">
                      <div className="flex flex-col bg-[#ffdf6c] items-center justify-center w-[75%] h-[75%] rounded-full">
                        <IoIosCheckmark className="h-[400px] w-[300px] text-[#0A221C] border-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-10">
                <Link href={"/HomeScreen"}>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 3 }}
                    type="submit"
                    className="px-8 md:px-28 py-2 rounded-lg shadow-md bg-[#4BF0A5] font-semibold"
                  >
                    Let's get started
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
