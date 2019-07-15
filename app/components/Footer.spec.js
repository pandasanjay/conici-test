import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
describe("Footer component", () => {
  let component;
  beforeEach(() => {
    component = shallow(<Footer copyright="@ 2018 - Hotel Beacons GmbH" />);
  });
  it("should have match with snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
