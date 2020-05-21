import React from "react";
import "./UserOutput.css";
/* this comp: have two p's 
- pass a username via state to props
*/

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p className="text">
        This funny tag syntax <b>is neither a string nor HTML</b>. It is called
        <strong>JSX</strong>, and it is a syntax extension to JavaScript. We
        recommend using it with React to describe what the UI should look like.
        JSX may remind you of a template language, but it comes with the full
        power of JavaScript. JSX produces React “elements”. We will explore
        rendering them to the DOM in the next section. Below, you can find the
        basics of JSX necessary to get you started.
      </p>
      <p className="username">
        Written by: <span>{props.username}</span>
      </p>
    </div>
  );
};

export default userOutput;
