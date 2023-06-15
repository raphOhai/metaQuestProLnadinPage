import React, { useEffect } from "react";
import { handleClickScroll } from "./fuctions/scrolltop";

export const Hooks = () => {
  useEffect(() => {
    const Element2 = document.getElementById("section-1");
    let vid = document.getElementById("v0");
    const divid = (item) => {
      const val = item / 500;
      return val;
    };
    const changeBackground = () => {
      vid.onloadstart = function () {
        alert("Starting to load video");
      };

      // let vidBox2 = document.getElementById("v1")
      const increament = divid(window.scrollY);

      vid.currentTime = increament;
      console.log(vid.currentTime);

      if (vid.currentTime >= 19.4) {
        Element2.classList.replace("fixedVid2", "fixed2");
        // console.log("yes")
      } else {
        Element2.classList.replace("fixed2", "fixedVid2");
      }

      // Box.classList.add("sticky")
    };

    window.addEventListener("scroll", changeBackground);
  }, []);
};
