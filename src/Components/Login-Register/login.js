import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/postData";
import "./login.css";

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
        this.setState({ redirectToReferrer: true });

        localStorage.setItem("userData", JSON.stringify(response.data));
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
      return <Redirect to={"/product-load"} />;
    }
    return (
      <div className="login">
        <div
          className="form"
          style={{
            fontSize: "1.4rem",
            marginLeft: "-10rem",
            width: "100%",
            marginTop: "0rem",
          }}
        >
          <h4
            style={{
              fontSize: "2rem",
              textAlign: "center",
              marginLeft: "30px",
            }}
          >
            Đăng nhập
          </h4>
          <div
            className="form-group"
            style={{
              fontSize: "1.3rem",
              marginLeft: "80px",
              width: "100%",
              textAlign: "center",
              marginTop: "50px",
            }}
          >
            <i class="far fa-user"></i>
            <input
              type="text"
              name="userName"
              placeholder="Tên đăng nhập"
              onChange={this.onChange}
            ></input>
          </div>
          <div
            className="form-group"
            style={{
              fontSize: "1.3rem",
              marginLeft: "91px",
              width: "100%",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <i class="fas fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              onChange={this.onChange}
            />
          </div>
          <input
            type="submit"
            className="button"
            value="Đăng nhập"
            onClick={this.submitLogin}
            style={{ marginLeft: "150px" }}
          />
          <h4
            style={{
              fontSize: "1.4rem",
              textAlign: "center",
              marginLeft: "30px",
              marginTop: "20px",
            }}
          >
            Bạn chưa có tài khoản?
          </h4>
          <a
            href="/signup"
            style={{
              fontSize: "1.4rem",
              textAlign: "center",
              marginLeft: "10rem",
              marginTop: "20px",
            }}
          >
            Đăng ký
          </a>
        </div>
      </div>
    );
  }
}
export default Login;
