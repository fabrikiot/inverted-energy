export const Map = () => {
  return (
    <div className="w-1/2 h-full px-1  justify-between flex items-center">
      <img src="/public/map.png" className="h-[98%] pt-1" alt="" />
      <div className="flex flex-col gap-16">
        <div className="bg-[#3298d8] rounded-xl size-20 flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold">35</span>
          <span className="text-center text-sm font-thin">Mwh Installed</span>
        </div>
        <div className="bg-[#3298d8] rounded-xl size-20 flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold">158</span>
          <span className="text-center text-sm font-thin">Cities Covered</span>
        </div>
        <div className="bg-[#3298d8] rounded-xl size-20 flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold">150k</span>
          <span className="text-center text-sm font-thin">
            Vehicles in action
          </span>
        </div>
        <div className="bg-[#3298d8] rounded-xl size-20 flex flex-col items-center justify-center">
          <span className="text-[24px] font-bold">20</span>
          <span className="text-center text-sm font-thin">Unique Brands</span>
        </div>
      </div>
    </div>
  );
};
