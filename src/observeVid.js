import React, { useEffect } from "react";

export const ObserveVid = (vid) => {
  useEffect(() => {
    const item = document.getElementById(vid);
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          item.play();
          console.log(item.currentTime, item);
        }
      });
    });

    observer.observe(item);
  }, []);
};
