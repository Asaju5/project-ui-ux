import { MdOutlinePeopleOutline, MdLockOutline } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

function AjoMobileMenu() {
  return (
    <div className=" w-full flex p-4 bg-[#123F33] justify-between rounded-sm items-center cursor-pointer">
      <div className="flex flex-col items-center justify-center gap-y-1">
        <div className="p-3 bg-[#0A221C] rounded-md text-white">
          <AiOutlinePlus size={30} />
        </div>
        <p className="text-[12px] md:text-lg  font-medium text-white">
          Create Ajo
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-1">
        <div className="p-3 bg-[#0A221C] rounded-md text-white">
          <MdOutlinePeopleOutline size={30} />
        </div>
        <p className="text-[12px] md:text-lg  font-medium text-white">
          Join Ajo
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-1">
        <div className="p-3 bg-[#0A221C] rounded-md text-white">
          <HiOutlineSquares2X2 size={30} />
        </div>
        <p className="text-[12px] md:text-lg  font-medium text-white">
          Manage Ajo
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-1">
        <div className="p-3 bg-[#0A221C] rounded-md text-white">
          <MdLockOutline size={30} />
        </div>
        <p className="text-[12px] md:text-lg  font-medium text-white">My Ajo</p>
      </div>
    </div>
  );
}

export default AjoMobileMenu;
