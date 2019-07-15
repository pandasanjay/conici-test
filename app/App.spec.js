import React from "react";
import { shallow } from "enzyme";
import { HashRouter as Router, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import SmartCheckout from "./containers/SmartCheckout";
import App from "./App";

describe("Test the App component", function() {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });
  it("should have match with snapshot", function() {
    expect(component).toMatchSnapshot();
  });
  it("should have route", () => {
    expect(component.find(Router).length).toEqual(1);
    expect(component.find(Layout).length).toEqual(1);
    expect(component.find(Route).length).toEqual(1);
    expect(component.find(Route).props().path).toEqual("/");
    expect(component.find(Route).props().component).toEqual(SmartCheckout);
  });
});
