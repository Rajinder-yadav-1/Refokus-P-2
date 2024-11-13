import React from "react";
import Button from "./Button";

function Product({ val , mover,count}) {
  return (
    <div className="w-full py-24  bg-zinc-900">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center" onMouseEnter={()=>{mover(count)}}>
        <h1 className="text-6xl font-semibold capitalize ">{val.title}</h1>
        <div className="dets w-1/3 ">
          <p className="mb-10">{val.desc}</p>
          <div className="flex gap-5 items-center">
            {val.live && <Button />}
            {val.case && <Button title={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
