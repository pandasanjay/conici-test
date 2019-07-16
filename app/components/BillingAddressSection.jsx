import React from "react";
import Icon from "./Icon";
import "./BillingAddressSection.scss";
const BillingAddress = ({ label, address, id, onSelect, selected }) => {
  const selectedClass = selected
    ? "btn-primary selected"
    : "btn-outline-primary";
  return (
    <div
      className={
        "sh-billing-address d-flex btn  p-3 justify-content-between mb-3 " +
        selectedClass
      }
      onClick={() => onSelect(id)}
    >
      <div>
        <div className="sh-h3 mb-2 text-left">{label}</div>
        <div className="sh-address text-left">
          <div className="sh-street">{address.street}</div>
          <div className="sh-street-address">
            {address.postal_code}
            {` ${address.separator} `}
            {address.city}
          </div>
          <div> {address.country}</div>
        </div>
      </div>
      <div className="align-self-end">
        {<Icon iconname={selected ? "edit-invert" : "edit"} />}
      </div>
      {selected ? (
        <div className="left-circle ">
          <Icon iconname="selected" className="sh-selected-inside-circle" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BillingAddress;
