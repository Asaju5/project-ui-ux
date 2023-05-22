import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { RxPerson } from "react-icons/rx";
import foto from "../../assets/bg.png";
import community from "../../assets/community.png";
import solo from "../../assets/solo.png";

function CreateAjoMobile() {
  return (
    <div className="flex flex-col p-4 overflow-scroll">
      <div className="flex items-center gap-16 md:gap-8">
        <MdKeyboardArrowLeft size={30} className="text-gray-200" />
        <h4 className="text-gray-200 font-semibold">Rotating Savings</h4>
      </div>
      <div className="flex flex-col items-center justify-center mt-4">
        <h4 className="text-gray-200 font-semibold">Oya, Let's Start!</h4>
        <p className="text-xs text-gray-400">Create your Ajo</p>
      </div>
      <div className="flex items-center justify-center mt-4">
        <Image src={foto} alt="create-ajo" />
      </div>
      <div>
        <div className="flex justify-center items-center mt-4 md:mt-8">
          <div className="w-[320px] py-2 rounded-lg bg-[#123F33] flex flex-col">
            <p className="text-sm text-gray-300 ml-4">Select</p>
            <p className="text-gray-300 ml-4">E.g Group Savings</p>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center gap-8 mt-4">
        <div className="px- py-5 bg-[#0A221C] rounded-lg relative">
          <Image
            src={community}
            alt="community"
            height={100}
            className="opacity-70"
          />
          <div className="absolute bottom-1 left-3">
            <SlPeople className="text-white" />
            <h4 className="text-xs font-semibold text-gray-300">
              Community Ajo
            </h4>
          </div>
        </div>
        <div className="px-2 py-5 bg-[#0A221C] rounded-lg relative">
          <Image src={solo} alt="solo" height={100} className="opacity-70" />
          <div className="absolute bottom-1 left-2 text-white">
            <RxPerson />
            <h4 className="text-xs font-semibold">Solo Ajo</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 md:mt-8">
        <button className="w-[320px] py-2 rounded-lg border border-[#4BF0A5] text-[#4BF0A5]">
          Next
        </button>
      </div>
    </div>
  );
}

export default CreateAjoMobile;
