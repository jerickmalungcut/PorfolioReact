import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import PropTypes from "prop-types";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="outline-none border-none absolute top-0 left-0 transition-all duration-500"
    >
      {open ? (
        <VscChromeClose size={25} color="blue" />
      ) : (
        <GiHamburgerMenu size={25} color="blue" />
      )}
    </button>
  );
};

ToggleButton.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
};

export default ToggleButton;
