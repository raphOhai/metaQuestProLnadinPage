import React, { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ObserveVid } from "../../observeVid";
const VisionDemo2 = () => {
  useEffect(() => {}, []);
  ObserveVid("demo2")
  return (
    <>
      <div className="stack">
         <div style={{paddingTop:"2rem"}} className="stack center">
           <h1 id="mainHeading" className="boldText">Quest pro</h1>
           <p className="graySmallText ">New ways to create and Work! </p>
         </div>
        <div className="gridSection maxWidth shiftTop">
          <div className="cards">
            <div className="stack">
              <div style={{ paddingTop: "3rem" }} className="center">
                <h1 className="boldText gradientText">Quest pro</h1>
              </div>
              <div className="center">
                <img className="responsive" src="/mainDmo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="stack">
            <div className="cards fullHeight">
              <img className="responsive" src="/demo6.png" alt="" />
            </div>

            <div
              style={{ minHeight: "10rem", marginTop: "2rem" }}
              className="cards "
            >
              <div className="flex center textAlignCenter">
                <p
                  id="spec"
                  style={{ marginTop: "3rem" }}
                  className="boldText gradientText"
                >
                  Qualcomm Snapdragon XR2+ Platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="block2">
          <div className="gridSection2 maxWidth shiftTop">
            <div style={{ minHeight: "9rem" }} className="cards ">
              <div className="flex center textAlignCenter">
                <video id="demo2" muted autoPlay style={{height:"35rem"}}  src="/demovid.mp4"></video>
              </div>
            </div>

            <div className="stack">
              <div className="cards ">
                <img className="responsive" src="/demo2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionDemo2;
