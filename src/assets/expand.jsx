import React from "react";

const Expand = ({ color }) => {
  return (
    <svg
      width="11"
      height="7"
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.585652"
        y1="0.531479"
        x2="4.58565"
        y2="5.53148"
        stroke={color ? color : "#7E91AE"}
        strokeWidth="1.5"
      />
      <line
        x1="9.57617"
        y1="0.480138"
        x2="4.57617"
        y2="6.48014"
        stroke={color ? color : "#7E91AE"}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default Expand;
