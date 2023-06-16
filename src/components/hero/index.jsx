import React from "react";
import { explore } from "../../hooks/fuctions";
import PlayBtn from "../../assets/playBtn";
import Controls from "../playBtn";

const Hero = () => {
  return (
    <div>
      <div className="">
        <div id="" className="hero fixed2 ">
          <video
            id="v0"
            className="video-background hideMobileAndTab"
            src="/mainVid.mp4"
            // src="https://res.cloudinary.com/daesuz8wk/video/upload/v1686822264/output_b6ofbt.mp4"
          ></video>
          <div className="relative">
            <video
              id="demo2"
              muted
              // autoPlay
              loop
              className="hideDexktop mobileVid"
              style={{ height: "35rem" }}
              // src="https://res.cloudinary.com/daesuz8wk/video/upload/v1686822264/output_b6ofbt.mp4"
              src="/mainVid.mp4"
            ></video>
            <div className="relativeCenterPlay">
              <Controls />
            </div>
          </div>

          {/* <div className="flex center1 shiftTop">
            <button onClick={()=> explore()} id="exploreMore" className="buynow gradientText boldText">Explore</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
