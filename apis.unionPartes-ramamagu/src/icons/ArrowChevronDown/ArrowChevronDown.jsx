/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowChevronDown = ({ color = "#2E3A59", className }) => {
  return (
    <svg
      className={`arrow-chevron-down ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" opacity="0.5">
        <path
          className="path"
          d="M9.99997 13.0942L15.0083 8.08584L13.8308 6.90668L9.99997 10.74L6.16997 6.90668L4.99164 8.08501L9.99997 13.0942Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

ArrowChevronDown.propTypes = {
  color: PropTypes.string,
};
