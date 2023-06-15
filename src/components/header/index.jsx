import React from "react";
import "./header.css";
import Logo2 from "../../assets/logo2";
import Cart from "../../assets/cart";
import Search from "../../assets/search";
const Header = () => {
  return (
    <div className="fixed ">
      <div className="headerBoxContent maxWidth2 defaultPadding">
        <div className="smallText1 logo flex2 center1 ">
          <img src="/oculus.webp" alt="" />
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
      <div></div>
    </div>
  );
};

export default Header;
