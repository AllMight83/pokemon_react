import React from "react";
import { shallow } from "enzyme";
import One from "./One";

describe("One", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<One />);
    expect(wrapper).toMatchSnapshot();
  });
});
