import Image from "next/image";
import mtn from "../../assets/mtn.png";
import glo from "../../assets/glo.png";
import foto1 from "../../assets/9mobile.png";
import airtel from "../../assets/airtel.png";

function AirTimeTopup({ isBuyAirtime, onClose }) {
  if (!isBuyAirtime) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="w-[600px] bg-[#0A221C] flex flex-col mx-4 rounded-lg pt-2 pb-8">
        <button
          onClick={() => onClose()}
          className="text-gray-300 text-xl place-self-end mr-4 cursor-pointer"
        >
          X
        </button>

        <div className="p-4 ml-4">
          <h4 className="text-xl font-semibold text-[#4BF0A5]">Buy Airtime</h4>
          <p className="text-sm text-gray-400">Top up your airtime balance</p>
        </div>

        <div className="flex flex-col bg-[#123F33] mx-4 md:mx-20 py-1 rounded-lg">
          <div className="flex flex-col ml-4 md:ml-10">
            <p className="text-sm text-gray-300 py-2">
              Select your network provider
            </p>
            <div className="flex gap-4 mx-2 justify-between items-center py-2 cursor-pointer">
              <div className="flex flex-col gap-y-1 items-center">
                <Image
                  src={mtn}
                  alt="mtn"
                  priority
                  height={50}
                  width={50}
                  className="rounded-full mt-1"
                />
                <p className="text-gray-200 font-medium">MTN</p>
              </div>

              <div className="flex flex-col gap-y-1 items-center">
                <Image
                  src={airtel}
                  alt="airtel"
                  priority
                  height={0}
                  width={50}
                  className="rounded-full mt-1"
                />
                <p className="text-gray-200 font-medium mt-1.5">AIRTEL</p>
              </div>

              <div className="flex flex-col gap-y-1 items-center">
                <Image
                  src={foto1}
                  alt="mtn"
                  height={50}
                  width={50}
                  priority
                  className="rounded-full"
                />
                <p className="text-gray-200 font-medium">9MOBILE</p>
              </div>

              <div className="flex flex-col gap-y-1 items-center mr-2">
                <Image
                  src={glo}
                  alt="mtn"
                  priority
                  className="rounded-full mt-1"
                />
                <p className="text-gray-200 font-medium">GLO</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#123F33] mx-4 md:mx-20 py-1 rounded-lg mt-4">
          <div className="flex flex-col ml-4 md:ml-10">
            <p className="text-gray-400 text-sm ml-3">Phone Number</p>
            <input
              type="number"
              inputMode="numeric"
              placeholder="00000000"
              className="h-8 w-[80%] outline-none focus:outline-none focus:ring-0 border-none
               text-white bg-[#123f33] placeholder:text-white"
            />
          </div>
        </div>

        <div className="flex flex-col bg-[#123F33] mx-4 md:mx-20 py-1 rounded-lg mt-4">
          <div className="flex flex-col ml-4 md:ml-10">
            <p className="text-gray-400 text-sm ml-3">Phone Number</p>
            <input
              type="number"
              inputMode="numeric"
              placeholder="#10,000"
              className="h-8 w-[80%] outline-none focus:outline-none focus:ring-0 border-none text-white bg-[#123f33] placeholder:text-white"
            />
          </div>
        </div>

        <div className="flex flex-col bg-[#4BF0A5] mx-4 md:mx-20 py-2.5 rounded-lg mt-6">
          <button className="font-semibold">Buy Airtime</button>
        </div>
      </div>
    </div>
  );
}

export default AirTimeTopup;
