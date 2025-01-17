import myImage from "../../assets/Inverted-Logo.png";

export const Navbar = () => {
  return (
    <div className="w-full h-full flex  justify-between px-4  items-center">
      <div className="w-full h-full flex  justify-between  border-b-2 border-[#41E1F2] items-center">
        <div className="text-[#41E1F2] mx-5 font-bold  text-5xl pb-1 h-full flex items-end ">FLUX</div>
        <div className="mx-8 h-full flex items-center">
          <img src={myImage} alt="inverted" className="h-[80%] w-[150px]" />
        </div>
      </div>
    </div>
  );
};
