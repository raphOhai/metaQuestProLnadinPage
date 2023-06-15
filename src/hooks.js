import React, { useEffect } from "react";
import { handleClickScroll } from "./fuctions/scrolltop";

export const Hooks = () => {
  useEffect(() => {
    const changeBackground = () => {
      const playbackConst = 3000;
      const Element2 = document.getElementById("section-1");
      let vid = document.getElementById("v0");
      vid.onloadstart = function() {
        alert("Starting to load video");
    };

      // let vidBox2 = document.getElementById("v1")
  
      vid.currentTime = window.scrollY / 101;
      // console.log(vid.currentTime)

      if (vid.currentTime >= 30) {
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
