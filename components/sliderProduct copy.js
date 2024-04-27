"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const variantsH1 = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 4000 : -4000,
      opacity: 0,
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 4000 : -4000,
      opacity: 0,
    };
  },
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
const contents = [
  {
    title: "BBQ Chicken Delight",
    row2: "Indulge in the smoky goodness of BBQ Chicken Delight! Our signature dough is slathered with tangy barbecue sauce and piled high with tender grilled chicken, red onions, crispy bacon, and melted cheddar cheese. Every bite is a taste of barbecue heaven!",
    image: "./p1.png",
    compotition:
      "Signature pizza dough, BBQ sauce, Grilled chicken, Red onions, Bacon, Cheddar cheese",
  },
  {
    title: "Margarita Bliss",
    row2: "Experience pizza perfection with Margarita Bliss! A thin, crispy crust topped with vibrant tomato sauce, creamy mozzarella cheese, and fresh basil leaves. Simple yet sensational, it's a timeless classic that never fails to delight.",
    image: "./p2.png",
    compotition:
      "Thin crispy crust, Tomato sauce, Mozzarella cheese, Fresh basil leaves",
  },
];

export const SlideshowProduct = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setdirection] = useState(0);

  const paginate = (newDirection) => {
    setdirection(newDirection);
    if (imageIndex == 0) {
      if (newDirection == -1) {
        setImageIndex(contents.length - 1);
      } else {
        setImageIndex(imageIndex + newDirection);
      }
    } else if (imageIndex == contents.length - 1) {
      if (newDirection == -1) {
        setImageIndex(imageIndex + newDirection);
      } else {
        setImageIndex(0);
      }
    } else {
      setImageIndex(imageIndex + newDirection);
    }
  };

  if (contents.length != 0) {
    return (
      <div className=" h-[85vh] relative flex flex-row m-auto box-border">
        <div className=" relative flex flex-col md:flex-row w-full">
          <div className=" relative flex-1 h-full w-full flex items-center justify-center md:ml-20">
            <motion.img
              key={imageIndex}
              src={`${contents[imageIndex].image}`}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 1 },
                delay: 1,
              }}
              className=" rounded-full absolute md:w-96 md:h-96 w-52 h-52  "
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </div>
          <div className=" flex-1 w-full h-full relative md:mr-20 flex items-center">
            <motion.h1
              key={imageIndex}
              custom={direction}
              variants={variantsH1}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute top-[calc(10%)] md:top-[calc(10%)] text-[#FB8B24] font-bold md:font-extrabold text-lg md:text-4xl px-3 py-2 rounded-md underline"
            >
              {contents[imageIndex].title}
            </motion.h1>
            <motion.div
              key={imageIndex + 30000}
              custom={direction}
              variants={variantsH1}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute top-[calc(20%)] md:top-[calc(15%)] left-20 text-white font-bold text-xl py-[1px] rounded-md"
            >
              <h2 className="text-[#FB8B24] w-fit md:font-bold text-sm md:text-xl px-1 py-[1px] rounded-md my-5">
                {contents[imageIndex].row2}
              </h2>
            </motion.div>
            <motion.h1
              key={imageIndex + 40000}
              custom={direction}
              variants={variantsH1}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute top-[calc(60%)] md:top-2/4 left-20 text-[#FB8B24] font-bold md:font-extrabold text-lg md:text-4xl px-3 py-2 rounded-md underline"
            >
              Compotition
            </motion.h1>
            <motion.div
              key={imageIndex + 50000}
              custom={direction}
              variants={variantsH1}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
              }}
              className="absolute top-[calc(70%)] md:top-[calc(55%)] left-20 text-white font-bold text-xl py-[1px] rounded-md"
            >
              <h2 className="text-[#FB8B24] w-fit md:font-bold text-sm md:text-xl  px-1 py-[1px] rounded-md my-5">
                {contents[imageIndex].compotition}
              </h2>
            </motion.div>
          </div>
        </div>
        <div
          className="
         top-[calc(50%-30px)]
          absolute bg-[#9A031E] text-white rounded-md w-10 h-10 flex items-center justify-center cursor-pointer font-bold text-2xl z-10
         right-3 "
          onClick={() => paginate(1)}
        >
          {"‣"}
        </div>
        <div
          className="top-[calc(50%-30px)]
          absolute bg-[#9A031E] text-white rounded-md w-10 h-10 flex items-center justify-center cursor-pointer font-bold text-2xl z-10
          left-3 -scale-x-100
          "
          onClick={() => paginate(-1)}
        >
          {"‣"}
        </div>
      </div>
    );
  }
};
