import React, { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUsers from "./components/Users/AddUsers";

function App(props) {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
