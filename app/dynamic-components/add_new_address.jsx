import React from "react";
import Icon from "../components/Icon";
const AddNewAddress = ({ heading, description }) => {
  return (
    <div className="sh-add-card d-flex pt-5 pb-5 p-3 justify-content-between">
      <div>
        <div className="sh-h3 text-uppercase">{heading}</div>
        <div className="text-uppercase">{description}</div>
      </div>
      <div className="align-self-center">
        <Icon iconname="icon-add-active" />
      </div>
    </div>
  );
};

export default AddNewAddress;
