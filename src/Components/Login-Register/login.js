import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/postData";
// import { Nav } from "react-bootstrap";
//import {Signup} from './signup';
import "./login.css";
import { MDBRow, MDBCol } from "mdbreact";
import logo from "../../public/image/logo.jpg";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      redirectToReferrer: false,
    };
    this.submitLogin = this.submitLogin.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  submitLogin = async () => {
    if (this.state.userName && this.state.password) {
      const response = await login(this.state);
      if (response.status === 200) {
        localStorage.setItem("user-info", response.data);
        //sessionStorage.setItem("userData", JSON.stringify(response.data.data));
        this.setState({ redirectToReferrer: true });
      } else if (response.status === 401) {
        alert(response.data.message);
      }
    }
  };
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    if (this.state.redirectToReferrer) {
      localStorage.getItem("user-info");
      return <Redirect to={"/product-load"} />;
    }
    return (
      <table border="1">
        <MDBRow>
          <MDBCol md="4">
            <img src={logo} alt="logo" className="img-header" />
            <h1 style={{ fontSize: "1.1rem", marginLeft: "6rem", width: "300px", marginTop: "5px" }}>
              BLUE CHIC Computer
            </h1>
          </MDBCol>
          <MDBCol md="4">
            <h4>Login</h4>
            <div className="form">
              <div className="form-group">
                <i class="far fa-user"></i>
                <input
                  type="text"
                  name="userName"
                  placeholder="username"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={this.onChange}
                />
              </div>
            </div>
            <input
              type="submit"
              className="button"
              value="Đăng nhập"
              onClick={this.submitLogin}
            />
            <a href="/signup">Đăng ký</a>
          </MDBCol>
        </MDBRow>
      </table>
    );
  }
}
export default Login;
