import { ajoHands } from "@/data";

function AjoGroup() {
  return (
    <div className="mx-4 mt-6">
      <div className="flex text-sm gap-8">
        <div className="text-[#4BF0A5] border-b border-[#4BF0A5]">
          Community Savings (8)
        </div>
        <div className="text-gray-200">My Ajo (2)</div>
      </div>
      <div className="pt-2 grid grid-cols-3 gap-2">
        {ajoHands.map((item) => (
          <div
            className="flex flex-col gap-y-3 p-3 bg-[#F17750] rounded-[8px]"
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
    </div>
  );
}

export default AjoGroup;
