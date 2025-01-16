export const Map = () => {
  return (
    <div className="w-1/2 h-full px-1 justify-between flex items-center pr-9">
      <img src="/public/map.gif" className="h-[98%] w-[66%] pt-1" alt="" />
      <div className="flex flex-col gap-8 w-[33%] items-center pl-7 justify-between">
        <div className="bg-[#3298d8] rounded-xl w-[10vw] h-[11vh] flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold">35</span>
          <span className="text-center text-sm font-normal">Mwh Installed</span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[10vw] h-[11vh] flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold">158</span>
          <span className="text-center text-sm font-normal">Cities Covered</span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[10vw] h-[11vh] flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold">150k</span>
          <span className="text-center text-sm font-normal">
            Vehicles in action
          </span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[10vw] h-[11vh] flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold">20</span>
          <span className="text-center text-sm font-normal">Unique Brands</span>
        </div>
      </div>
    </div>
  );
};
