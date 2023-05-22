import React from "react";
import { IoIosCheckmark } from "react-icons/io";

function TransferSuccessful({ isTransferSuccessful, onClose }) {
  if (!isTransferSuccessful) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center mx-4">
      <div className="w-[600px] bg-[#0A221C] flex flex-col mx-4 rounded-lg py-2">
        <button
          onClick={() => onClose()}
          className="text-gray-300 text-xl place-self-end mr-4 cursor-pointer"
        >
          X
        </button>

        <div className="flex flex-col items-center justify-center pt-10">
          <div className="flex flex-col py-4 items-center">
            <h4 className="text-xl text-gray-200 font-semibold items-center flex flex-col">
              #400,00 is on its way <span>to SHALOM JACOBS</span>
            </h4>
          </div>
        </div>

        <div className="pb-10">
          <div className="space-y-4 md:space-y-8 -mt-8 md:-mt-0">
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
          </div>
        </div>

        <div className="flex items-center justify-center pt-4 pb-16">
          <button
            className="flex items-center justify-center py-2.5 w-full mx-8 md:mx-20
       bg-[#4BF0A5] gap-2 text-black font-semibold rounded-lg "
          >
            Good to go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransferSuccessful;
