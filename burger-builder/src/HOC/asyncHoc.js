import React, { Suspense } from "react";

import Spinner from "../Components/UI/Spinner/Spinner";

function AsyncComponent(Component, routerProps) {
  return function (props) {
    return (
      <Suspense fallback={<Spinner />}>
        <Component {...props} {...routerProps} />
      </Suspense>
    );
  };
}
export default AsyncComponent;
