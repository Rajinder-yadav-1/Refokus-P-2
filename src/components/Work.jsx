import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10-p-500.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203-p-1080.webp",
      top: "56%",
      left: "43%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203-p-1080.webp",
      top: "45%",
      left: "65%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cbf37cf4d6ddc1f21b_Umault%20-%204%203-p-1080.webp",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9-p-500.webp",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203-p-1080.webp",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto">
        <h1 className="text-[30vw] leading-none font-semibold select-none tracking-tight">
          work
        </h1>
        <div>
          {images.map((elem, i) =>
            elem.isActive && (
              <img
                key={i} // Add a key prop for each element
                className="absolute w-60 rounded-lg -translate-x-50% -translate-y-50%"
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                alt=""
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;