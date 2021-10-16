import React, { useState, useEffect } from "react";
import UserService from "../services/userService";
import { useParams } from "react-router";
import { List, Item, Grid } from "semantic-ui-react";

export default function UserDetail() {
  let { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    let userService = new UserService();
    userService.getByUserId(id).then((result) => setUser(result.data));
  }, []);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Item>
              <Item.Image size="small" src={user.picture} />
              <Item.Description>ID: {user.id}</Item.Description>
            </Item>
          </Grid.Column>
          <Grid.Column width={3}>
            <Item>
              <Item.Content>
                <Item.Header as="h4">{`${user.title}. ${user.firstName} ${user.lastName}`}</Item.Header>
                <Item.Description>
                  <List>
                    <List.Item>{user.gender}</List.Item>
                    <List.Item>{user.email}</List.Item>
                    <List.Item>{user.phone}</List.Item>
                    <List.Item>{user.dateOfBirth}</List.Item>
                  </List>
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
          <Grid.Column width={4}>
            <Item>
              <Item.Content>
                <Item.Description>
                <List>
                    {/* <List.Item>{user.location.street}</List.Item>
                    <List.Item>{user.location.city}</List.Item>
                    <List.Item>{user.location.state}</List.Item>
                    <List.Item>{user.location.country}</List.Item>
                     */}
                  </List>
                </Item.Description>
              </Item.Content>
            </Item>
          </Grid.Column>
          <Grid.Column width={5}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
