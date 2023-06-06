import React from "react";
import { shallow } from "enzyme";
import Welcome from "../welcome";

describe("Welcome", () => {
  it("should render a <div>", () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});
