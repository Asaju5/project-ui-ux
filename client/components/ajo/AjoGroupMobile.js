import { ajoHands } from "@/data";

function AjoGroupMobile() {
  return (
    <>
      <div>
        {ajoHands.map((item) => (
          <div
            className="flex flex-col gap-y-3 p-3 bg-[#F17750] rounded-[8px] mb-4"
            key={item.id}
          >
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-black">{item.title}</p>
                <p className="text-xs tracking-tighter">{item.subtitle}</p>
              </div>
              <div className="p-1 rounded-full bg-[#0A221C] text-white">
                {item.icons}
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="w-[85%] bg-gray-500  h-2 rounded-lg">
                <div className="w-[85%] bg-[#0A221C]  h-2 rounded-lg"></div>
              </div>
              <div className="flex items-center justify-between text-xs w-[85%]">
                <p>{item.hands}</p>
                <p>{item.handsLeft}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AjoGroupMobile;
