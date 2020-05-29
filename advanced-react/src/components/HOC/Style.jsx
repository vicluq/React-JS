import React from "react";
import Theme from "../../theme/themeContext";

const style = (Component) => {
  return (props) => {
    return (
      <Theme.Provider>
        <Component {...props} />
      </Theme.Provider>
    );
  };
};

export default style;
