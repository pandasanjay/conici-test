import React from "react";
import { SmartCheckout } from "./SmartCheckout";
import { shallow } from "enzyme";
describe("Smart checkout component with out data", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <SmartCheckout
        globalReducer={{}}
        getBillingAddress={jest.fn()}
        billingAddressReducer={{}}
      />
    );
  });
  it("should have match with snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("should have property", () => {
    expect(component.instance().props.globalReducer).toEqual({});
    expect(component.instance().props.getBillingAddress).toBeCalled();
  });
});
const globalReducerStub = {
  pageContents: {
    content: {
      heading: "some data",
      description: "Some desc"
    },
    global: {
      back: "back",
      submit: "Submit"
    }
  }
};
describe("Smart checkout component with data", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <SmartCheckout
        globalReducer={globalReducerStub}
        getBillingAddress={jest.fn()}
        billingAddressReducer={{}}
      />
    );
  });
  it("should have match with snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("should have property", () => {
    expect(component.instance().props.globalReducer).toEqual(globalReducerStub);
  });
});
