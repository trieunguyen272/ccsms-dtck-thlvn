import React, { Component } from "react";
import { signup } from "../../services/postDataRegister";
import "./signup.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      name: "",
      phoneNumber: "",
      address: "",
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup = async () => {
    if (
      this.state.userName &&
      this.state.password &&
      this.state.name &&
      this.state.phoneNumber &&
      this.state.address
    ) {
      const response = await signup(this.state);
      console.log(response);
      if (response.status === 200) {
        alert(response.data.message);
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
    return (
      <div className="signup">
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
            Đăng ký
          </h4>
          <div
            className="form-group"
            style={{
              fontSize: "1.3rem",
              marginLeft: "70px",
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
            />
          </div>
          <div
            className="form-group"
            style={{
              fontSize: "1.3rem",
              marginLeft: "80px",
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
          <div
            className="form-group"
            style={{
              fontSize: "1.3rem",
              marginLeft: "70px",
              width: "100%",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <i class="fas fa-user"></i>
            <input
              type="text"
              name="name"
              placeholder="Họ và tên"
              onChange={this.onChange}
            />
          </div>
          <div
            className="form-group"
            style={{
              fontSize: "1.3rem",
              marginLeft: "80px",
              width: "100%",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <i class="fas fa-phone"></i>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Số điện thoại"
              onChange={this.onChange}
            />
          </div>
          <div
            className="form-group"
            style={{
              fontSize: "1.3rem",
              marginLeft: "80px",
              width: "100%",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            <i class="fas fa-map-marker-alt"></i>
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ"
              onChange={this.onChange}
            />
          </div>
          <input
            type="submit"
            className="button"
            value="Đăng ký"
            onClick={this.signup}
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
            Bạn đã có tài khoản?
          </h4>
          <a
            href="/login"
            style={{
              fontSize: "1.4rem",
              textAlign: "center",
              marginLeft: "10rem",
              marginTop: "20px",
            }}
          >
            Đăng nhập
          </a>
        </div>
      </div>
    );
  }
}
export default Signup;
