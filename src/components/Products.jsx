import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  const Productsval = [
    {
      title: "aequitel",
      desc: "lorem is a good boy having a fait ona god is a great thing which we can do",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "lorem is a good boy having a fait ona god is a great thing which we can do",
      live: true,
      case: true,
    },
    {
      title: "YYR 2020",
      desc: "lorem is a good boy having a fait ona god is a great thing which we can do",
      live: true,
      case: false,
    },
    {
      title: "ECELOT",
      desc: "lorem is a good boy having a fait ona god is a great thing which we can do",
      live: true,
      case: true,
    },
  ];

  const [pos, setpost] = useState(0);

  const mover = (val) => {
    setpost(val * 23);
  };

  return (
    <div className="pt-32  relative gap-y-32 mt-12 bg-zinc-900">
      {Productsval.map((val, i) => (
        <Product val={val} mover={mover} count={i} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none mb-32">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute h-[23rem] w-[32rem] bg-white  left-[44%] overflow-hidden X"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-100"
          >
            <video
              autoPlay
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/layoutland-43.webm"
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-200"
          >
            <video
              autoPlay
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/cula-43.webm"
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-300"
          >
            <video
              autoPlay
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/umault-43.webm"
              muted
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-sky-400"
          >
            <video
              autoPlay
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"
              muted
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
