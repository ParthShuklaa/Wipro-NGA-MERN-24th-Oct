import React from "react";
import { shallow } from "enzyme";
import Contactus from "./contactus";

describe("Contactus", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Contactus />);
    expect(wrapper).toMatchSnapshot();
  });
});
