import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header title="Smart Check-out" />);
  });
  it("should have match with snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
