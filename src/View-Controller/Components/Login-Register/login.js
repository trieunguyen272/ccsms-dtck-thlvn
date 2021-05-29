import React, { useState } from "react";
import { Col, Form, Button, Row } from "react-bootstrap";
import userApi from "../../../Model/services/userApi";
import "./login.css";

function Login() {
  const [validated, setValidated] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
    }
    if (userName && password) {
      const params = {
        userName: userName,
        password: password,
      };

      await userApi.login(params).then(
        (response) => {
          localStorage.setItem("userData", JSON.stringify(response));
          window.location = "/";
        },
        (error) => {
          if (error.response) {
            alert(error.response.data.message);
          }
        }
      );
    }
    setValidated(true);
  };

  const onChangeUsername = (e) => {
    const userName = e.target.value;
    setUsername(userName);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  return (
    <div className="login">
      <div
        className="form"
        style={{
          fontSize: "1.4rem",
          width: "100%",
          marginTop: "0rem",
        }}
      >
        <Form noValidate validated={validated}>
          <Form.Label
            column
            sm={4}
            style={{
              fontSize: "2rem",
              fontWeight: "400",
            }}
          >
            Đăng nhập
          </Form.Label>
          <Form.Group as={Row} controlId="validationUsername">
            <Col sm={2}></Col>
            <Form.Label column sm={1}>
              <i class="fa fa-user-circle"></i>
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="text"
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={onChangeUsername}
                required
              />
            </Col>
            <Col sm={2}></Col>
          </Form.Group>
          <Form.Group as={Row} controlId="validationPassword">
            <Col sm={2}></Col>
            <Form.Label column sm={1}>
              <i class="fas fa-lock"></i>
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChangePassword}
                required
              />
            </Col>
            <Col sm={2}></Col>
          </Form.Group>
          <Button onClick={handleSubmit}>Đăng nhập</Button>
          <Col>
            <Form.Label column sm={8} style={{ fontSize: "1rem" }}>
              Bạn chưa có tài khoản? <a href="/signup">Đăng ký</a>
            </Form.Label>
          </Col>
        </Form>
      </div>
    </div>
  );
}
// }
export default Login;
