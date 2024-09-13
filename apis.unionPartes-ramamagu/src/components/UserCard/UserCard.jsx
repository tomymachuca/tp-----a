/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UserThumb } from "../UserThumb";
import "./style.css";

export const UserCard = ({
  role = "Senior Designer",
  name = "Jane Doe",
  layout,
  size,
  className,
  userThumbSizeMClassName,
  categoryClassName,
  categoryClassNameOverride,
}) => {
  return (
    <div className={`user-card ${layout} size-2-${size} ${className}`}>
      <UserThumb className={userThumbSizeMClassName} size={layout === "horizontal" && size === "s" ? "s" : "m"} />
      <div className="details">
        {(size === "l" || size === "m" || (layout === "vertical" && size === "s")) && (
          <>
            <div className={`category ${categoryClassName}`}>{name}</div>
            <div className={`div ${categoryClassNameOverride}`}>{role}</div>
          </>
        )}

        {layout === "horizontal" && size === "s" && <div className="category-2">{name}</div>}
      </div>
    </div>
  );
};

UserCard.propTypes = {
  role: PropTypes.string,
  name: PropTypes.string,
  layout: PropTypes.oneOf(["vertical", "horizontal"]),
  size: PropTypes.oneOf(["l", "m", "s"]),
};
