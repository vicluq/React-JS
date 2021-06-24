import React, { useState } from "react";

import PersonForm from "../../Components/PersonForm/PersonForm";
import PersonList from "../../Components/PersonList/PersonList";

import "./UseState.css";

const INITIAL_STATE = {
  formData: {
    name: "",
    age: "",
  },
  personList: [],
  searchEngine: "",
};

function UsingUseState(props) {
  //states
  const [formData, setFormData] = useState(INITIAL_STATE.formData);
  const [personList, setPersonList] = useState(INITIAL_STATE.personList);
  const [searchEngine, setsearchEngine] = useState(INITIAL_STATE.searchEngine);

  const inputValueHandler = (type, event) => {
    const form = { ...formData };
    form[type] = event.target.value;

    setFormData((old) => ({ ...old, ...form }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    const list = [...personList];

    const person = {
      name: formData.name,
      age: formData.age,
      id: Math.floor(Math.random() * 10 ** 6).toString(),
    };

    list.push(person);
    setPersonList(list);
    setFormData({ name: "", age: "" });
  };

  const searchUserHandler = (e) => {
    setsearchEngine(e.target.value);
  };

  const deletePersonHandler = (id) => {
    const personIndex = personList.findIndex((p) => p.id === id);

    const newList = [...personList];
    newList.splice(personIndex, 1);

    setPersonList(newList);
  };

  return (
    <div className="UseState">
      <div className="Page-Header">
        <h2>Working With use state!</h2>
      </div>
      <main className="UseState-Main">
        <PersonForm
          nameVal={formData.name}
          ageVal={formData.age}
          change={inputValueHandler}
          submit={submitFormHandler}
        />
        <hr />
        <section className="User-Display">
          <div className="SearchBox">
            <label htmlFor="search-user">Search By Name:</label>
            <input
              onChange={searchUserHandler}
              id="search-user"
              type="text"
              value={searchEngine}
            />
          </div>
          <PersonList
            people={personList}
            searchValue={searchEngine}
            deletePerson={deletePersonHandler}
          />
        </section>
      </main>
    </div>
  );
}

export default UsingUseState;
