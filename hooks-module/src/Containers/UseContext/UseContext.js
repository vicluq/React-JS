import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../services/user-auth";

function UseContext(props) {
  const userAuth = useContext(UserContext);

  return (
    <div className="UseContext-Main">
      <div className="Page-Header">
        <h2>Working with useContext!</h2>
      </div>
      <section className="User-Panel">
        <h3>username: {userAuth.userData.username}</h3>
        <h4>userId: {userAuth.userData.userId}</h4>
      </section>
      <div className="Edit-User-Panel">
        <label htmlFor="new_username">New Username</label>
        <input
          type="text"
          onChange={userAuth.setUserData}
          value={userAuth.username}
        />
      </div>
    </div>
  );
}

export default UseContext;
