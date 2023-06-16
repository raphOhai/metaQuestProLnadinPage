import React, { useEffect, useState } from "react";
import PlayBtn from "../../assets/playBtn";
import PulseBtn from "../../assets/pulseBtn";

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = document.getElementById("demo2");
  const VidChecker = () => {
    const video = document.getElementById("demo2");
    console.log(video);

    if (video !== null) {
      //   if (video.currentTime > 1.5) {
      //     setIsPlaying(true);
      //   }
      // Control()
      video.onplaying = function () {
        setIsPlaying(true);
      };
      if (!video.paused) {
       
        setIsPlaying(false);
      } else {
        
        setIsPlaying(true);
      }
    }
  };

  const Control = () => {
   const video = document.getElementById("demo2");
    if (!video.paused) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    VidChecker();
    Control()
  }, [video]);

  return <div onClick={Control}>{isPlaying ? <PulseBtn /> : <PlayBtn />}</div>;
};

export default Controls;
