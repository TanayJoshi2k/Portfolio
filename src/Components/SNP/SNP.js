import React from "react";
import classes from "./snp.module.css";
import encoders from "../../assets/encoders.png";
import unet from "../../assets/UNet.png";
import pokedex from "../../assets/pokedex.png";

import Skills from "./Skills";
const SNP = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#283449"
          fillOpacity="1"
          d="M0,160L18.5,186.7C36.9,213,74,267,111,250.7C147.7,235,185,149,222,122.7C258.5,96,295,128,332,122.7C369.2,117,406,75,443,80C480,85,517,139,554,144C590.8,149,628,107,665,80C701.5,53,738,43,775,58.7C812.3,75,849,117,886,154.7C923.1,192,960,224,997,218.7C1033.8,213,1071,171,1108,165.3C1144.6,160,1182,192,1218,218.7C1255.4,245,1292,267,1329,240C1366.2,213,1403,139,1422,101.3L1440,64L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
        ></path>
      </svg>

      <Skills />


      
    </div>
  );
};

export default SNP;