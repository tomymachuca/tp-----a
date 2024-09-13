/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconIconoirCancel17 = ({ color = "#F472B6", className }) => {
  return (
    <svg
      className={`icon-iconoir-cancel-17 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4.50551 11.4951L8.0006 8.00001L4.50551 11.4951ZM11.4957 4.50491L8.0006 8.00001L11.4957 4.50491ZM8.0006 8.00001L4.50551 4.50491L8.0006 8.00001ZM8.0006 8.00001L11.4957 11.4951L8.0006 8.00001Z"
        fill={color}
      />
      <path
        className="path"
        d="M8.0006 8.00001L11.4957 11.4951M4.50551 11.4951L8.0006 8.00001L4.50551 11.4951ZM11.4957 4.50491L8.0006 8.00001L11.4957 4.50491ZM8.0006 8.00001L4.50551 4.50491L8.0006 8.00001Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

IconIconoirCancel17.propTypes = {
  color: PropTypes.string,
};
