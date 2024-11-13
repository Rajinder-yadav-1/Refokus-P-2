import { motion } from "framer-motion";
import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Card({ width, start, para ,hover=false}) {
  return (
    <motion.div 
    whileHover={{backgroundColor : hover === "true" && "#7443ff",padding:"30px"}}
    className={`bg-zinc-800  ${width} rounded-xl p-5 min-h-[60vh]  flex  flex-col justify-between `}>
      <div
     
      className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>dfgdfg</h3>
          <MdOutlineArrowRightAlt />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever heading</h1>
      </div>
      <div className="w-full  down">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tighter leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-100 ">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm font-medium text-zinc-500 mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,?
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
