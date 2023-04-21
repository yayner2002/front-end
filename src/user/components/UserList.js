import React from "react";
import userListStyles from "./UserList.module.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="center">
        <h1>No User Found.</h1>
      </div>
    );
  }
  return (
    <ul>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          placesCount={user.places}
          name={user.name}
        />
      ))}
    </ul>
  );
};

export default UserList;
