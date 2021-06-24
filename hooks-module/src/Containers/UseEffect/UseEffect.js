import React, { useEffect, useState, useCallback, useContext } from "react";
import UserContext from "../../services/user-auth";
import "./UseEffect.css";

import Posts from "../Posts/Posts";
import FilteredPosts from "../../Components/FilteredPosts/FilteredPosts";

function UseEffect(props) {
  const [idToFilter, setIdToFilter] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const { userData } = useContext(UserContext);

  const searchFilterHandler = (e) => {
    const value = e.target.value;
    if (!isNaN(Number(value))) {
      setIdToFilter(Number(value));
    }
  };

  const filterPostsHandler = useCallback((posts) => {
    setFilteredPosts(posts);
  }, []);

  return (
    <div className="UseEffect-Main">
      <div className="Page-Header">
        <h2>Working with useEffect!</h2>
      </div>
      <div className="LoggedUserInfo">
        <h3>username: {userData.username}</h3>
        <h4>userId: {userData.userId}</h4>
      </div>
      <main className="UseEffect-Main">
        <section className="Blog-Posts">
          <Posts idToFilter={idToFilter} filterPosts={filterPostsHandler} />
        </section>
        <section className="SearchByUserId">
          <div className="SearchBox">
            <label htmlFor="search-user">Search By Id:</label>
            <input
              onChange={searchFilterHandler}
              id="search-user"
              type="text"
              value={idToFilter}
            />
          </div>
          <FilteredPosts posts={filteredPosts} />
        </section>
      </main>
    </div>
  );
}

export default UseEffect;
