import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Feed, Label } from "semantic-ui-react";
import PostService from "../services/postService";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let postService = new PostService();
    postService.getPosts().then((result) => {
      if (result) {
        const { data } = result;
        setPosts(data?.data);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,25%)",
        gridGap: "15px",
      }}
    >
      {posts.map((post, i) => (
        <Card key={i}>
          <Image src={post.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              <Feed size="large">
                <Feed.Event>
                  <Feed.Label image={post.owner.picture} />
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User
                        as={Link}
                        to={`/user/${post.owner.id}`}
                      >{`${post.owner.firstName} ${post.owner.lastName}`}</Feed.User>
                      <Feed.Date>{post.publishDate}</Feed.Date>
                    </Feed.Summary>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Card.Header>
            <Card.Meta>
              {post &&
                post.tags.map((tag, i) => (
                  <Label key={i} color="grey">
                    {tag}
                  </Label>
                ))}
            </Card.Meta>
            <Card.Description>{post.text}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="like" size="large" />
            {post.likes}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
