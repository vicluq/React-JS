import React from "react";

const personList = (props) => {
  const allUsers = props.people.map((p) => (
    <li onClick={props.deletePerson.bind(null, p.id)}>
      Name: {p.name} <br />
      Age: {p.age}
    </li>
  ));

  let filteredUsers = props.people
    .filter((p) =>
      p.name.toLowerCase().includes(props.searchValue.toLowerCase())
    )
    .map((p, index) => (
      <li onClick={props.deletePerson.bind(null, p.id)}>
        Name: {p.name} <br />
        Age: {p.age}
      </li>
    ));

  if (filteredUsers.length === 0) {
    filteredUsers = <p>No users with that name...</p>;
  }

  return (
    <ul className="PersonList">
      {props.searchValue.trim() ? filteredUsers : allUsers}
    </ul>
  );
};

export default React.memo(personList);
