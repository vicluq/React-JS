import React from "react";

const homePage = (props) => (
  <div className="Home-Page">
    <h2>React Hooks Introduction</h2>
    <article>
      <h3>Intro</h3>
      <p>
        Hooks allows us to work with functional components using all the
        features of Class based components. <br />
        They provide an <b>optimal and compact code</b>. <br />
        The functional component is a <b>big render( ) method</b> with all of
        the Component features!
      </p>
    </article>
    <article>
      <h3>What is a hook?</h3>
      <p>
        Hooks are functions that substitute Class functionalities. <br />
        The are named "<b>useXXX</b>". We can also create custom hooks, like
        redux has theirs, etc.
      </p>
    </article>
  </div>
);

export default homePage;
