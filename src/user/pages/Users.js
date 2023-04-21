import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "John",
      image:
        "https://images.generated.photos/bNbZgF0pFH-Ktvme77y4m5vMHH6OaVhsNOhaY_toAvQ/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njc2MjUwLmpwZw.jpg",
      places: 3,
    },
  ];
  return <UserList users={USERS} />;
};

export default Users;
