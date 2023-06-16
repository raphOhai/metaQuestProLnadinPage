import React from "react";

const Expand2 = ({ color }) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12L12 18L6 12"
        stroke={color ? color : "#33363F"}
        stroke-width="2"
      />
      <path
        d="M18 6L12 12L6 6"
        stroke={color ? color : "#33363F"}
        stroke-width="2"
      />
    </svg>
  );
};

export default Expand2;
