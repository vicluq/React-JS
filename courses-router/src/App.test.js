import React from "react";
import { shallow, configure } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";

import App from "./App";
import Website from "./Containers/Website/Website";

configure({ adapter: new Adaptor() });

describe("<App />", () => {
  it("should have the <Website /> component if isActive === true", () => {
    const tester = shallow(<App isActive={true} />); //in here we pass the props
    expect(tester.find(Website)).toHaveLength(1);
  });

  it("should not have the <Website /> component if isActive === false", () => {
    const tester = shallow(<App />); //in here we pass the props
    expect(tester.find(Website)).toHaveLength(0);
  });
});
