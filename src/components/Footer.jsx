import React from "react";

function Footer() {
  return (
    <div className="w-full bg-zinc-900">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5vw] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        
        <div className="flex basis-1/2  mt-10 gap-4">
        <div className="basis-1/3">
        <h4 className="text-zinc-400 capitalize mt-5 mb-5 ">Socials</h4>
        {["instagram","twitter (X?)" , "Linkedin"].map((elem)=>(<a className="block mt-2 text-zinc-500">{elem}</a>))}
        </div>

        <div className="basis-1/3">
        <h4 className="text-zinc-400 capitalize  mt-5 mb-5  ">Socials</h4>
        {["instagram","twitter (X?)" , "Linkedin"].map((elem)=>(<a className="block mt-2 text-zinc-500">{elem}</a>))}
        </div>

        <div className="basis-1/2 flex flex-col items-end">
        <p className="text-zinc-400 text-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam a tenetur Odio possimus</p>
        <img  className="mt-5" src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" alt="" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
