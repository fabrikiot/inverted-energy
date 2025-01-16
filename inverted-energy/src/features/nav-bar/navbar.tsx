import myImage from "../../assets/Inverted-Logo.png";

export const Navbar = () => {
  return (
    <div className="w-full h-20 flex flex-row justify-between p-2 border-b-2 border-[#41E1F2] items-center">
      <div className="text-[#41E1F2] mx-20 font-bold  text-3xl">FLUX</div>
      <div className="mx-20 ">
        <img src={myImage} alt="" className="h-[62px] w-[150px]" />
      </div>
    </div>
  );
};
