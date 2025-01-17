export const Map = () => {
  return (
    <div className="w-[65%] h-full px-1 justify-end flex items-center">
      <img src="/public/map.gif" className="h-[98%] w-[60%] pt-1" alt="india" />
      <div className="flex flex-col gap-8 w-[35%]  items-center  justify-between">
        <div className="bg-[#3298d8] rounded-xl w-[8vw] px-9 h-[11vh] flex flex-col items-center justify-center">
          <span className="text-5xl font-bold">437</span>
          <span className="text-center text-sm font-normal">Mwh Installed</span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[8vw] px-9 h-[11vh] flex flex-col items-center justify-center">
          <span className="text-5xl font-bold">158</span>
          <span className="text-center text-sm font-normal">
            Cities Covered
          </span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[8vw] px-9 h-[11vh] flex flex-col items-center justify-center">
          <span className="text-5xl font-bold">2M</span>
          <span className="text-center text-sm font-normal">
            Vehicles in action
          </span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[8vw] px-9 h-[11vh] flex flex-col items-center justify-center">
          <span className="text-5xl font-bold">20</span>
          <span className="text-center text-sm font-normal">Unique Brands</span>
        </div>
      </div>
    </div>
  );
};
