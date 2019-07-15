import React from "react";
import Icon from "./Icon";
import { shallow } from "enzyme";
describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Icon iconname="icon-name" />);
  });
  it("should have match with snapshot", () => {
    expect(component).toMatchSnapshot();
  });
  it("should have class", function() {
    expect(component.find(".sh-icon.sh-i-icon-name").length).toEqual(1);
  });
});
