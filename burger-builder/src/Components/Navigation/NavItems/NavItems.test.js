import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavItems from "./NavItems";
import NavItem from "./NavItem/NavItem";

configure({ adapter: new Adapter() });

describe("Rendering NavItems", () => {
  it("Should Render Two NavItem if authenticated", () => {
    const ShallowWrapper = shallow(<NavItems />); //we should pass the props in here
    expect(ShallowWrapper.find(NavItem)).toHaveLength(2);
  });
});
