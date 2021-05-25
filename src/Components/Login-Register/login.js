import React, { useState, useRef } from "react";
import { Col, Form, Button, Row, Container } from "react-bootstrap";
import { Redirect, useHistory } from "react-router-dom";
import userApi from "../../services/userApi";
import "./login.css";

function Login() {
  // constructor() {
  //   super();
  //   this.state = {
  //     userName: "",
  //     password: "",
  //     redirectToReferrer: false,
  //   };
  //   this.submitLogin = this.submitLogin.bind(this);
  //   this.onChange = this.onChange.bind(this);
  // }
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
    }
    if (username && password) {
      const params = {
        username: username,
        password: password,
      };

      await userApi.login(params).then(
        (response) => {
          const productUrl = "/";

          localStorage.setItem("userData", JSON.stringify(response));

          history.push(productUrl);
          // window.location.reload();
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
    const username = e.target.value;
    setUsername(username);
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
                name="username"
                value={username}
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
