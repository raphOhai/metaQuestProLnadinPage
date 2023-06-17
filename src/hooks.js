import React, { useEffect } from "react";
import { handleClickScroll } from "./fuctions/scrolltop";
import {
  AddBorderRadius,
  Loading,
  RemoveBorder,
  explore,
} from "./hooks/fuctions";

export const Hooks = () => {
  useEffect(() => {
    const Element2 = document.getElementById("section-1");
    let vid = document.getElementById("v0");
    let MobileVid = document.querySelector(".mobileVid");
    const Icon = document.getElementById("ExpandIcon");

    console.log("cdcdc", MobileVid);
    const divid = (item) => {
      const val = item / 500;
      return val;
    };

    if (MobileVid.currentTime >= 10) {
      Element2.classList.replace("fixedVid2", "fixed2");
    } else {
      Element2.classList.replace("fixed2", "fixedVid2");
    }
    const changeBackground = () => {
      const increament = divid(window.scrollY);

      vid.currentTime = increament;
      console.log(vid.currentTime);

      if (vid.currentTime >= 10) {
        Element2.classList.replace("fixedVid2", "fixed2");
        RemoveBorder();
      } else {
        Element2.classList.replace("fixed2", "fixedVid2");
        AddBorderRadius();
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);
};
