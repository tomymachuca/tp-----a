/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconJamIconsFilledCircleF = ({ color = "#E11D48", className }) => {
  return (
    <svg
      className={`icon-jam-icons-filled-circle-f ${className}`}
      fill="none"
      height="11"
      viewBox="0 0 10 11"
      width="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M5 9.69375C2.69875 9.69375 0.833332 7.82833 0.833332 5.52708C0.833332 3.22583 2.69875 1.36042 5 1.36042C7.30125 1.36042 9.16667 3.22583 9.16667 5.52708C9.16667 7.82833 7.30125 9.69375 5 9.69375Z"
        fill={color}
      />
    </svg>
  );
};

IconJamIconsFilledCircleF.propTypes = {
  color: PropTypes.string,
};
