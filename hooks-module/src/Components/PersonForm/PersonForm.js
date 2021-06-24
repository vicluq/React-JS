import React from "react";

const PersonForm = (props) => {
  return (
    <div className="PersonForm">
      <h3>Add a Person</h3>
      <form onSubmit={props.submit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            onChange={props.change.bind(null, "name")}
            type="text"
            name="name"
            id="name"
            value={props.nameVal}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            onChange={props.change.bind(null, "age")}
            type="text"
            name="age"
            id="age"
            value={props.ageVal}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default React.memo(PersonForm);
