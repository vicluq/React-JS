import React from "react";
import { NavLink } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Course from "./Course";

configure({ adapter: new Adapter() }); //setup enzyme

//shallow receives the component to be tested

describe("The Single Course Component", () => {
  it("should render the teacher of the course", () => {
    const shallowWrapper = shallow(<Course />);

    expect(shallowWrapper.find("a")).toHaveLength(1);
    shallowWrapper.find("a").simulate("click");

    expect(shallowWrapper.find("a").hasClass("active"));
  });
});
