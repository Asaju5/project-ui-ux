import React from "react";
import { IoIosCheckmark } from "react-icons/io";

function CreateAjoModal({ isCreateAjo }) {
  if (!isCreateAjo) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[600px] flex flex-col mx-4 rounded-lg py-2">
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

        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col py-2 items-center">
            <h4 className="text-xl text-[#4BF0A5] font-semibold items-center flex flex-col">
              Ajo successfully created
            </h4>
            <p className="text-gray-400 text-center text-xs">
              You can now share a public link to your Ajo for members to join.
              You can check full details of your Ajo in Profile
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pt-4 pb-16">
          <button
            className="flex items-center justify-center py-2.5 w-full mx-8 md:mx-20
       bg-[#4BF0A5] gap-2 text-black font-semibold rounded-lg "
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateAjoModal;
