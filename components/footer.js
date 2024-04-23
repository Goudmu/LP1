import Image from "next/image";
import React from "react";

const location = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Semarang",
  "Palembang",
  "Makassar",
  "Tangerang",
  "South Tangerang",
  "Depok",
  "Batam",
  "Bekasi",
];

const Footer = () => {
  return (
    <div className=" h-[calc(35vh)] bg-[#600D40]">
      <div className=" flex flex-col gap-3 h-full w-full">
        <div>
          <h1 className=" text-white text-5xl text-center">Find Me At</h1>
        </div>
        <div className=" flex flex-row w-full h-full">
          <div className=" w-1/3 flex flex-col items-center justify-center">
            <div>
              <Image src="/logo.svg" width={100} height={100} alt="" />
            </div>
            <div className=" flex justify-between gap-5">
              <Image src="/tiktok.svg" width={25} height={25} alt="" />
              <Image src="/twitter.svg" width={25} height={25} alt="" />
              <Image src="/facebook.svg" width={25} height={25} alt="" />
              <Image src="/instagram.svg" width={25} height={25} alt="" />
            </div>
          </div>
          <div className=" w-2/3">
            <div className="grid grid-cols-3 gap-4 justify-between w-full h-full">
              {location.map((data, index) => {
                return (
                  <p key={index} className=" text-white text-lg cursor-pointer">
                    {data}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
