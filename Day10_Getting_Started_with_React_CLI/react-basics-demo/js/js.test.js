import React from "react";
import { shallow } from "enzyme";
import Js from "./js";

describe("Js", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Js />);
    expect(wrapper).toMatchSnapshot();
  });
});
