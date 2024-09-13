/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconJamIconsOutlineLogosArrowRight2 } from "../../icons/ArrowChevronDown/IconJamIconsOutlineLogosArrowRight2";
import { IconJamIconsOutlineLogosPlus3 } from "../../icons/ArrowChevronDown/IconJamIconsOutlineLogosPlus3";
import "./style.css";

export const ConcreteComponentNode = ({
  notification = false,
  text = true,
  text1 = "Button Text",
  iconLeft = true,
  iconRight = true,
  style,
  size,
  brand,
  styleFilledSizeXlClassName,
  overlapGroupClassName,
  vector = "/img/vector-34.svg",
  img = "/img/vector-35.svg",
  vector1 = "/img/vector-36.svg",
  vector2 = "/img/vector-37.svg",
  vector3 = "/img/vector-38.svg",
  vector4 = "/img/vector-39.svg",
}) => {
  return (
    <>
      {["google-play", "one"].includes(brand) && (
        <div
          className={`concrete-component-node style-filled-size-XL ${brand} ${style} ${size} ${styleFilledSizeXlClassName}`}
        >
          {brand === "one" && (
            <>
              <>
                {iconLeft && (
                  <IconJamIconsOutlineLogosPlus3
                    className="icon-jam-icons"
                    color={["link", "outline"].includes(style) ? "#2563EB" : "white"}
                  />
                )}
              </>
              <>
                {text && (
                  <div className="text-container">
                    <div className="button-text">{text1}</div>
                  </div>
                )}
              </>
              <>
                {iconRight && (
                  <IconJamIconsOutlineLogosArrowRight2
                    className="icon-jam-icons"
                    color={["link", "outline"].includes(style) ? "#2563EB" : "white"}
                  />
                )}
              </>
            </>
          )}

          {brand === "google-play" && (
            <div className="overlap-group-wrapper">
              <div className={`overlap-group ${overlapGroupClassName}`}>
                <img className="vector" alt="Vector" src={vector} />
                <div className="text-wrapper">GET IT ON</div>
                <img className="img" alt="Vector" src={img} />
                <img className="vector-2" alt="Vector" src={vector1} />
                <img className="vector-3" alt="Vector" src={vector2} />
                <img className="vector-4" alt="Vector" src={vector3} />
                <img className="vector-5" alt="Vector" src={vector4} />
              </div>
            </div>
          )}
        </div>
      )}

      {brand === "app-store" && (
        <img
          className={`concrete-component-node style-filled-size-m ${styleFilledSizeXlClassName}`}
          alt="Style filled size m"
          src={
            style === "filled"
              ? "/img/style-filled-size-m-brand-app-store.svg"
              : style === "outline"
              ? "/img/style-outline-size-m-brand-app-store.svg"
              : undefined
          }
        />
      )}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  notification: PropTypes.bool,
  text: PropTypes.bool,
  text1: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  style: PropTypes.oneOf(["danger", "filled", "outline", "link", "disabled"]),
  size: PropTypes.oneOf(["l", "m", "XL", "s"]),
  brand: PropTypes.oneOf(["app-store", "google-play", "one"]),
  vector: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  vector4: PropTypes.string,
};
