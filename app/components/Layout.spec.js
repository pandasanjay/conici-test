import React from "react";
import Layout from "./Layout";
import { shallow } from "enzyme";
describe("Header component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Layout />);
  });
  it("should have match with snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
