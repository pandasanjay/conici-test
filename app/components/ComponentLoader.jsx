import React from "react";

const ComponentLoader = function({ name, data }) {
  const DynamicComponent = require("../dynamic-components/" + name).default;
  console.log(DynamicComponent);
  return <DynamicComponent {...data[name]} />;
};
export default ComponentLoader;
