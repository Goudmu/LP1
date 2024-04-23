"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BestSeller = ({ isSkillRefInView }) => {
  return (
    <div className=" h-screen bg-[#FEFAF6] flex p-16">
      <div className=" flex-1 flex flex-col gap-5 px-3 py-10">
        {/* TEXT */}
        <div className=" w-fit">
          {/* <h1 className="text-[#FB8B24] text-5xl mb-2">BEST SELLER</h1> */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-3xl text-[#AA4B0F]"
          >
            BEST SELLER
          </motion.h1>
          <div className=" h-1 bg-[#9A031E]"></div>
        </div>
        <motion.p
          initial={{ x: "-1000px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className=" text-[#AA4B0F] text-lg"
        >
          Introducing Supreme Delight: A best-seller with hand-tossed crust,
          zesty sauce, and melty mozzarella.
        </motion.p>
        <motion.p
          initial={{ x: "-1000px" }}
          animate={isSkillRefInView ? { x: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#AA4B0F] text-lg"
        >
          Topped with pepperoni, sausage, mushrooms, peppers, onions, and
          olives, its a flavor explosion. Finished with fresh basil, its pizza
          perfection!
        </motion.p>
      </div>
      <div className=" flex-1 flex items-center justify-center ">
        {/* IMAGE */}
        <Image src="/p1.png" width={500} height={500} alt="" />
      </div>
    </div>
  );
};

export default BestSeller;
