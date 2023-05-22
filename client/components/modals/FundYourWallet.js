import React from "react";
import { FiArrowDownLeft, FiShare2 } from "react-icons/fi";
import { MdOutlineContentCopy } from "react-icons/md";

function FundYourWallet({ isFundWallet, onClose }) {
  if (!isFundWallet) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[600px] bg-[#0A221C] flex flex-col mx-4 rounded-lg py-2 relative">
        <div className="flex items-center justify-between mx-8 pt-4">
          <div className="flex flex-col">
            <h4 className="text-2xl font-semibold text-gray-200">
              Fund Your Wallet
            </h4>
            <p className="text-sm text-gray-500">Wallet Top Up</p>
          </div>

          <button
            onClick={() => onClose()}
            className="text-gray-400 text-xl cursor-pointer absolute top-4 right-5"
          >
            X
          </button>
        </div>
        <div className="flex flex-col items-center justify-center pt- md:pt-14">
          <h4 className="text-xl font-semibold text-[#4AECA3] tracking-tighter">
            Top Up Details
          </h4>
          <p className="text-gray-400 text-xs">
            Any transfer made to this account will automatically <br />
          </p>
          <p className="text-gray-400 text-xs">top up on your FaysaL wallet</p>
        </div>
        <div className="flex flex-col items-center py-4 gap-y-2">
          <div className="p-2 bg-[#4BF0A5] rounded-full">
            <FiArrowDownLeft size={30} />
          </div>
          <p className="text-gray-200 font-semibold text-xs">Account details</p>
        </div>
        <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row items-center justify-evenly md:py-8 py-4 ">
          <div className="items-center flex flex-col">
            <p className="text-xs text-gray-400">Account Name</p>
            <h4 className="text-lg text-gray-200">Shalom Jacobs</h4>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-xs text-gray-400">Bank</p>
            <h4 className="text-lg text-gray-200">Faysal MFB</h4>
          </div>
          <div className="items-center flex flex-col">
            <p className="text-xs text-gray-400">Account Number</p>
            <h4 className="text-lg text-gray-200">Shalom Jacobs</h4>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 pt-4 md:py-8 cursor-pointer">
          <div className="flex items-center gap-1 border border-[#4BF0A5] px-3 rounded-lg py-2">
            <MdOutlineContentCopy className="text-[#4BF0A5]" />
            <p className="text-xs text-[#4BF0A5]">Copy Account Details</p>
          </div>
          <div className="flex items-center gap-1 border border-[#4BF0A5] px-3 rounded-lg py-2">
            <FiShare2 className="text-[#4BF0A5]" />
            <p className="text-xs text-[#4BF0A5]">Share Account Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundYourWallet;
