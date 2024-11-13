import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  const data = [    
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",
      number: 11,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
      number: 11,
    },
  ];

  return (
    <div className="flex items-center mt-20">
      {data.map((elem,i) => (
        <Stripe val={elem} />
      ))}
    </div>
  );
}

export default Stripes;
