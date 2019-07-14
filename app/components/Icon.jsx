import React from "react";
import "./Icon.scss";
const Icon = ({ iconname }) => {
  return <span className={"sh-icon sh-i-" + iconname} />;
};
export default Icon;
