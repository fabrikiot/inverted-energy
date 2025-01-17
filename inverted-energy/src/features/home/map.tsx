export const Map = () => {
  return (
    <div className="w-[60%] h-full px-1 justify-end flex items-center">
      <img
        src="/public/map.gif"
        className="h-full  3xl:w-[51.6%] "
        alt="india"
      />
      <div className="flex flex-col h-full py-[3%] w-[35%]  items-center  justify-between">
        <div className="bg-[#3298d8] rounded-xl w-[40%] px-9 h-[20%] flex flex-col items-center justify-center">
          <span className="text-5xl font-bold 2xl:6xl">437</span>
          <span className="text-center text-sm font-normal">Mwh Installed</span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[40%] 2xl:px-9 h-[20%] flex flex-col items-center justify-center">
          <span className="text-5xl font-bold 2xl:6xl">158</span>
          <span className="text-center text-sm font-normal">
            Cities Covered
          </span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[40%] px-9 xl:px-1 h-[20%] flex flex-col items-center justify-center">
          <span className="text-5xl font-bold 2xl:6xl">2M</span>
          <span className="text-center text-sm font-normal">
            Vehicles in action
          </span>
        </div>
        <div className="bg-[#3298d8] rounded-xl w-[40%] px-9  h-[20%] flex flex-col items-center justify-center">
          <span className="text-5xl font-bold 2xl:6xl">20</span>
          <span className="text-center text-sm font-normal">Unique Brands</span>
        </div>
      </div>
    </div>
  );
};
