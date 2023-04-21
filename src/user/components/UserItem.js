import React from "react";
import userItemStyles from "./UserItem.module.css";
const UserItem = (props) => {
  console.log(props);
  return <li>{props.name}</li>;
};

export default UserItem;
