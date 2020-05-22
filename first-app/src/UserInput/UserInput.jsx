import React from "react";

// this comp: have an input element --> default value and ability to change username

const userInput = (props) => {
  const style = {
    container: {
      padding: "8px",
      margin: "10px auto",
      width: "420px",
      backgroundColor: "skyblue",
      borderRadius: "8px",
      boxShadow: "2px 3px 2px #00000047",
    },

    label: {
      margin: "0 10px 0 0",
      color: "#fff",
    },

    input: {
      border: "none",
      borderRadius: "0",
      borderBottom: "2px solid #fff",
      backgroundColor: "transparent",
      fontWeight: 600,
      color: "#333",
    },
  };

  return (
    <div className="userInput" style={style.container}>
      <label htmlFor="changeUsername" style={style.label}>
        Change the user name:
      </label>
      <input
        style={style.input}
        type="text"
        id="changeUsername"
        value={props.username}
        onChange={props.changeUsername}
      />
    </div>
  );
};

export default userInput;
