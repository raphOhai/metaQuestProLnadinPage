import React, { useEffect } from "react";
import { handleClickScroll } from "./fuctions/scrolltop";

export const Hooks = () => {
  useEffect(() => {
    const Element2 = document.getElementById("section-1");
    let vid = document.getElementById("v0");
    let MobileVid = document.querySelector(".mobileVid");
    console.log( "cdcdc",MobileVid)
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
      vid.onloadstart = function () {
        alert("Starting to load video");
      };
      vid.onloaded = function () {
        console.log("leaded");
      };

      // let vidBox2 = document.getElementById("v1")
      const increament = divid(window.scrollY);

      vid.currentTime = increament;
      console.log(vid.currentTime);

      if (vid.currentTime >= 10) {
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
