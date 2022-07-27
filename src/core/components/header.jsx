import React, {useContext} from "react";
import SidebarComp from "./sidebar/sidebar";
import NavbarComp from "./navbar/navbar";
import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import {Context} from "../../App";

const HeaderComp = ({ wide, setWide }) => {
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [slide, setSlide] = useState(false);

  const [darkMode] = useContext(Context)

  const handleWide = () => {
    if (!wide && !isMatch) {
      setWide(true);
    } else {
      setWide(false);
    }
  };

  const slideIn = () => {
    setSlide(true);
  };

  const slideOut = () => {
    setSlide(false);
  };

  return (
    <>
      {/* {!isMatch && <SidebarComp wide={wide} />} */}
      <SidebarComp
        wide={wide}
        isMatch={isMatch}
        slide={slide}
        slideOut={slideOut}
        darkTheme={darkMode.mode}
      />
      <NavbarComp
        wide={wide}
        handleWide={handleWide}
        isMatch={isMatch}
        slide={slide}
        slideIn={slideIn}
        darkTheme={darkMode.mode}
      />
    </>
  );
};

export default HeaderComp;
