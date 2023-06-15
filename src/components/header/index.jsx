import React from "react";
import "./header.css";
import Logo2 from "../../assets/logo2";
import Cart from "../../assets/cart";
import Search from "../../assets/search";
const Header = () => {
  return (
    <div className="fixed maxWidth2 ">
      <div className=" defaultPadding">
        <div className="stack3  ">
          <div className="headerBoxContent">
            <div className="smallText1 logo flex2 center1 ">
              <img className="cursorPointer" src="/oculus.webp" alt="" />
              <p className="headingTex hideMobileFlex  cursorPointer ">
                {" "}
                meta Quest
              </p>
              <p className="headingTex hideMobileFlex  cursorPointer">
                RayBan stores
              </p>

              <p className="headingTex hideMobileFlex  cursorPointer">
                Support
              </p>
              <p className="headingTex hideMobileFlex  cursorPointer">
                Where to buy
              </p>
            </div>

            <div className=" flex2 center1">
              <div className=" cursorPointer">
                <Cart />
              </div>
              <div className=" cursorPointer">
                <Search />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "-1rem" }} className="headerBoxContent">
            <div>
              <p id="productText" className="boldText  cursorPointer">
                Quest Pro
              </p>
            </div>

            <div className="headerBoxContent flex2 center1">
              <p
                id="product2"
                className="graySmallText hideMobileFlex  cursorPointer"
              >
                overview
              </p>
              <p
                id="product2"
                className="smallText1 hideMobileFlex  cursorPointer"
              >
                Tech Specs
              </p>
              <div>
                <button className="buynow  cursorPointer">find a store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
