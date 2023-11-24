import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "./index.module.css";


import { useState, useEffect } from "react";



function UserCard({user, onFriendInvite}) {
  const [isFriend, setIsFriend] = useState(false);

  function handleFriendInvite() {
    onFriendInvite(user);
    setIsFriend(true);
   
  }


  return (
    <Col xs={12} md={6} lg={4}>
      <Card  className={style["user-card"]}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Button  onClick={(e) => handleFriendInvite(e)} variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default UserCard;
