import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./index.module.css";
import { getUser } from "../../api";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserCard from "../UserCard";

function Login() {
  const [users, setUsers] = useState([]);
  // const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [loginUser, setLoginUser] = useState({
    name: "",
    password: "",
    friends: [],
  });


  function handleFriendInvite(selectedUser) {


  }


 


  useEffect(() => {
    async function loadData() {
      const data = await getUser();
      setUsers(data);
    }
    loadData();
  }, [setUsers]);

  function handleSubmit(e) {
    e.preventDefault();

    users.forEach((user) => {
      if (
        loginUser.name === user.name &&
        loginUser.password === user.password
      ) {
        setCurrentUser(user);
        setIsLogin(true);
        alert("Hesaba Daxil olundu");
      }
    });
  }

  return (
    <>
      {!isLogin && (
        <div>
          <h1 className="text-center mt-5 ">Login</h1>
          <Form className={style["login-form"]}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setLoginUser({ ...loginUser, name: e.target.value })
                }
                value={loginUser.name}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  setLoginUser({ ...loginUser, password: e.target.value })
                }
                value={loginUser.password}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              onClick={(e) => handleSubmit(e)}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      )}
      {isLogin && (
        <div>
          <Container>
            <h1 className="text-center mt-5 ">Users</h1>
            <Row>
              {users.map((user, id) => {
                if (user.name != currentUser.name) {
                  return (
                    <UserCard
                      key={id}
                      user={user}
                      id={id}
                      onFriendInvite={(selectUser) => handleFriendInvite(selectUser)}
                    />
                  );
                }
              })}
            </Row>
          </Container>
        </div>
      )}
    </>
  );
}
export default Login;
