import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Test the App component", function() {
  it("Component Ready", function() {
    expect(true).toEqual(true);
  });
  it("render component", () => {
    shallow(<App />);
  });
});
