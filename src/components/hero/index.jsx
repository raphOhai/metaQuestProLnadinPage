import React from "react";
import { explore } from "../../hooks/fuctions";

const Hero = () => {
  return (
    <div>
      <div className="">
        <div id="" className="hero fixed2 ">
          <video
            id="v0"
            className="video-background hideMobileAndTab"
            src="https://res.cloudinary.com/daesuz8wk/video/upload/v1686822264/output_b6ofbt.mp4"
          ></video>
          <video
            id="demo2"
            muted
            autoPlay
            className="hideDexktop mobileVid"
            style={{ height: "35rem" }}
            src="https://res.cloudinary.com/daesuz8wk/video/upload/v1686822264/output_b6ofbt.mp4"
          ></video>
          <div className="flex center1 shiftTop">
            <button onClick={()=> explore()} id="exploreMore" className="buynow gradientText boldText">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
