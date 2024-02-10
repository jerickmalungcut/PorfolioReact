import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="flex flex-col justify-center items-center bg-white text-slate-900"
    >
      <motion.div
        variants={variants}
        className="fixed top-0 left-0 w-1/4 h-screen bg-white"
      >
        <Links />
      </motion.div>
      <div className="fixed top-9 left-9 h-12 w-12 z-10 rounded-full flex justify-center items-center">
        <ToggleButton setOpen={setOpen} open={open} />
      </div>
    </motion.div>
  );
};

export default Sidebar;
