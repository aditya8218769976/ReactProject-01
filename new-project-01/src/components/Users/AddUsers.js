import React, { useState } from "react";

import "./AddUsers.css";

import Button from "../UI/Button";

import Card from "../UI/Card";

import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Name and Age (non-empty value).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          removeErrorHandler={errorHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler} className="form-backgroundStyle">
          <label htmlFor="username" className="label-styleCss">
            UserName
          </label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            className="input-background"
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age" className="label-styleCss">
            Age
          </label>
          <input
            id="age"
            type="number"
            value={enteredUserAge}
            className="input-background"
            onChange={userAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
