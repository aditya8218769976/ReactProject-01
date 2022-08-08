import React from "react";
import Card from "../UI/Card";
import "./UserList.css";

const UserList = (props) => {
  return (
    <Card className="user-card">
      <ul className="user-card-ul">
        {props.users.map((user) => (
          <li className="user-card-li" key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
