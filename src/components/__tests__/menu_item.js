import React from "react";
import renderer from "react-test-renderer";
import { PureMenuItem as MenuItem } from "../menu_item";

describe("Menu item", () => {
  it("renders correctly", () => {
    const data = { path: "/test", name: "Test menu item" };
    const tree = renderer.create(<MenuItem data={ data } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
    
