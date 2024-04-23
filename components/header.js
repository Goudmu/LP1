import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className=" h-12 w-full bg-[#600D40] flex">
      <div className=" flex-1 flex items-center justify-between ml-5">
        <Image src="/logo.svg" width={30} height={30} alt="" />
      </div>
      <div className=" flex-1 flex text-white items-center gap-8 justify-end mr-5">
        <div>
          <span className=" text-[#FB8B24]">Beranda</span>
        </div>
        <div>
          <span>Menu</span>
        </div>
        <div>
          <span>Lokasi</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
