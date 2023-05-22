import { IoEyeSharp } from "react-icons/io5";

function Security() {
  return (
    <div className="mx-14 mt-4 flex flex-col">
      <div className=" border-b pb-4 border-[#4BF0A5]">
        <div className="bg-[#0A221C] py-2 px-3 flex items-center justify-between w-[80%] rounded-md text-gray-200">
          <div>Password</div>
          <div>Transaction Pin</div>
        </div>
      </div>
      <div className="mt-5 flex flex-col">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-gray-400 text-sm">Current Password</h4>
          <input
            type="text"
            className="h-10 border-none focus:outline-none bg-[#0A221C] focus:ring-0 mb-[1px] text-gray-200 w-[80%] rounded-lg"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col">
        <div className="flex flex-col gap-y-2">
          <h4 className="text-gray-400 text-sm">New Password</h4>
          <input
            type="text"
            className="h-10 border-none focus:outline-none bg-[#0A221C] focus:ring-0 mb-[1px] text-gray-200 w-[80%] rounded-lg"
          />
        </div>
      </div>
      <div className="mt-6 pb-4">
        <button className="py-1.5 px-4 bg-[#4BF0A5] rounded-md font-semibold text-sm">
          Save
        </button>
      </div>
    </div>
  );
}

export default Security;
