import React from "react";
import renderer from "react-test-renderer";
import { StaticQuery } from "gatsby";
import Index from "../index";
import indexdata from "../__fixtures__/index_data";


describe("Index", () => {
  const data = { ...indexdata,
    site: {
      siteMetadata: {
        title: `Default starter`
      }
    }
  }
  it("renders correctly", () => {
    const tree = renderer.create(<Index data={ data }/>).toJSON()
    expect(tree).toMatchSnapshot();
  });
});
