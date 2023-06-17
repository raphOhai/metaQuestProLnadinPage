import React, { useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ObserveVid } from "../../observeVid";
import MultipleAnimator from "../../hooks/animator";
import Expand from "../../assets/expand";
import { explore } from "../../hooks/fuctions";
import Expand2 from "../../assets/Expand";
const VisionDemo2 = () => {
  useEffect(() => {}, []);
  ObserveVid("demo2");
  MultipleAnimator();
  return (
    <>
      <div className="defaultPadding">
        <div className="flex center fixed grayBox">
          <div
            id="ExpandIcon"
            onClick={() => explore()}
            className="rotatate transition cursorPointer "
          >
            <Expand2 color={"#fff"} />
          </div>
        </div>

        <div style={{ paddingTop: "1rem" }} className="stack center">
          <div className="flex center1">
            <p id="heading1" className="graySmallText ">
              New ways to create and Work!{" "}
            </p>
          </div>
          <div>
            <button className="buynow  cursorPointer">find a store</button>
          </div>
        </div>
        <div className="gridSection maxWidth shiftTop">
          <div className="cards">
            <div className="stack">
              <div style={{ paddingTop: "3rem" }} className="center">
                <h1 id="heading1" className="boldText gradientText">
                  Quest pro
                </h1>
              </div>
              <div className="center">
                <img className="responsive SlideUp" src="/mainDmo.png" alt="" />
              </div>
            </div>
          </div>
          <div className="stack">
            <div className="cards fullHeight ">
              <img className="responsive SlideUp" src="/demo6.png" alt="" />
            </div>

            <div
              style={{ minHeight: "10rem", marginTop: "1.7rem" }}
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
            <div
              style={{ minHeight: "9rem" }}
              className="cards  sideSlide1 group"
            >
              <div className="flex center textAlignCenter ">
                <video
                  id="demo2"
                  muted
                  autoPlay
                  style={{ height: "35rem" }}
                  src="/demovid.mp4"
                ></video>
              </div>
            </div>

            <div className="stack sideSlideLeft group">
              <div className="cards ">
                <img className="responsive" src="/demo2.png" alt="" />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <div className="maxWidth shiftTop ">
              <div
                style={{ maxHeight: "30rem" }}
                className="cards flex center1 "
              >
                <div className="gridSection2 ">
                  <div className="flex center1 sideSlide1 ">
                    <p
                      id="heading1"
                      style={{ marginTop: "3rem", padding: "2rem" }}
                      className="boldText gradientText"
                    >
                      Next Generation Optics
                    </p>
                  </div>
                  <div className=" maxWidth sideSlideLeft">
                    <img className="responsive" src="/demo1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionDemo2;
