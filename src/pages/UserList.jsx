import React, { useState, useEffect } from "react";
import { List, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import UserService from "../services/userService";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new UserService();
    userService.getUsers().then((result) => setUsers(result.data.data));
  },[]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,50%)",
        gridGap: "15px",
      }}
    >
      {users.map((user) => (
        <List key={user.id} selection verticalAlign="middle">
          <List.Item as={Link} to={`/user/${user.id}`}>
            <Image src={user.picture} />
            <List.Content>
              <List.Header>{`${user.title}. ${user.firstName} ${user.lastName}`}</List.Header>
              <List.Description>{user.id}</List.Description>
            </List.Content>
          </List.Item>
        </List>
      ))}
    </div>
  );
}
