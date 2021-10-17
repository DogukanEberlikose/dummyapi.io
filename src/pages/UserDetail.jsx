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
  }, [id]);
  if (user)
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Item>
                <Item.Image size="small" src={user.picture} />
                <Item.Description>
                  {" "}
                  {user.id ? "ID:" + user.id : ""}
                </Item.Description>
              </Item>
            </Grid.Column>
            <Grid.Column width={3}>
              <Item>
                <Item.Content>
                  <Item.Header as="h4">{`${user.title ? user.title : ""} ${
                    user.firstName ? user.firstName : ""
                  } ${user.lastName ? user.lastName : ""}`}</Item.Header>
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
                {user.location && (
                  <Item.Content>
                    <Item.Header as="h4">Adress</Item.Header>
                    <Item.Description>
                      <List>
                        <List.Item>{user.location.street}</List.Item>
                        <List.Item>{user.location.city}</List.Item>
                        <List.Item>{user.location.state}</List.Item>
                        <List.Item>{user.location.country}</List.Item>
                      </List>
                    </Item.Description>
                  </Item.Content>
                )}
              </Item>
            </Grid.Column>
            <Grid.Column width={5}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24067.448778392783!2d28.98446305!3d41.0595685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e0!4m0!4m0!5e0!3m2!1sen!2str!4v1634467284909!5m2!1sen!2str"
                mapTypeControl={false}
                width="300"
                height="300"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}
