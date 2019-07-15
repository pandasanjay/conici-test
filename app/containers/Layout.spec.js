import React from "react";
import { Layout } from "./Layout";
import { shallow } from "enzyme";
describe("Layout conatiner", () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <Layout
        globalReducer={{}}
        history={{ listen: jest.fn() }}
        globalContentAction={jest.fn()}
      />
    );
  });
  it("should have match with snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
