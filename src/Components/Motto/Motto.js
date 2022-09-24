import React, { useState, useEffect } from "react";
import classes from "./Motto.module.css";
import { motion } from "framer-motion";

const Motto = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <motion.div
        className={classes.quote}
        initial={{ opacity: 0 }}
        animate={{ opacity: show ? 1 : 0 }}
      >
        <blockquote>Driven by curiosity; Augmenting my knowledge</blockquote>
      </motion.div>
      {/* <svg
        width="100%"
        height="10%"
        id="svg"
        viewBox="0 0 1440 350"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 76.58373205741626,183.55023923444975 153.1674641148325,167.10047846889952 260,185 C 366.8325358851675,202.89952153110048 503.91387559808607,255.14832535885165 606,251 C 708.0861244019139,246.85167464114835 775.1770334928229,186.30622009569376 855,186 C 934.8229665071771,185.69377990430624 1027.377990430622,245.62679425837325 1127,258 C 1226.622009569378,270.37320574162675 1333.311004784689,235.18660287081337 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#0f0f0fff"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg> */}
    </div>
  );
};

export default Motto;
