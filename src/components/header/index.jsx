import React from "react";
import "./header.css";
import Logo2 from "../../assets/logo2";
import Cart from "../../assets/cart";
import Search from "../../assets/search";
const Header = () => {
  return (
    <div className="fixed padding">
      <div className="stack3 maxWidth2 defaultPadding ">
        <div className="headerBoxContent">
          <div className="smallText1 logo flex2 center1 ">
            <img style={{marginLeft:"-.6rem"}} src="/oculus.webp" alt="" />
            <p className="headingTex hideMobileFlex"> meta Quest</p>
            <p className="headingTex hideMobileFlex">RayBan stores</p>
          </div>

          <div className=" flex2 center1">
            <div>
              <Cart />
            </div>
            <div>
              <Search />
            </div>
          </div>
        </div>

        <div className="headerBoxContent">
          <div >
            <p id="productText" className="boldText ">
              Quest Pro
            </p>
          </div>

          <div className="headerBoxContent flex2 center1">
            <p id="product2" className="graySmallText hideMobileFlex">
              overview
            </p>
            <p id="product2" className="smallText1 hideMobileFlex">
              Tech Specs
            </p>
            <div>
              <button className="buynow">find a store</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
