import React from "react";
import User from "./User/User";

const UserList = (props) => {
  let users = props.users.map((user, index) => (
    <User
      key={user.id}
      id={user.id}
      username={user.username}
      email={user.email}
      click={props.click.bind(null, index)}
      changeUN={props.changeUN.bind(null, index)}
      theme={props.theme}
    />
  ));

  return <div className={props["class-name"]}>{users}</div>;
};

export default UserList;
