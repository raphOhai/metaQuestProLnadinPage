import React from "react";
import './loader.css'
const Loader = () => {
  return (
    <div id="loaderBox" className="flex center loader display">
{/*         
      <p className="boldText">loading...</p> */}
      <img style={{height:"100px"}} src="/oculus.webp" alt="" />
    </div>
  );
};

export default Loader;
