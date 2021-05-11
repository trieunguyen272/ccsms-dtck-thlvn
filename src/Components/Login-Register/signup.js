import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import { signup } from "../../services/postDataRegister";
// import { Nav } from "react-bootstrap";
// import { Redirect } from "react-router-dom";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      name: "",
      phoneNumber: "",
      address: "",
      //redirectToReferrer: false,
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
        //console.log("hdhhs");
        //sessionStorage.setItem("userData", JSON.stringify(response.data.data));
        //return <Redirect to={"/product-load"} />;
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
    // if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
    //   return <Redirect to={"/home"} />;
    // }
    return (
      <div className="row " id="sBody">
        <div className="medium-5 columns left">
          <h4>Đăng ký</h4>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Mật khẩu</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Họ và tên</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Số điện thoại</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="phoneNumber"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Địa chỉ</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                onChange={this.onChange}
              />
            </div>
          </div>
          <input
            type="submit"
            className="button"
            value="Đăng ký"
            onClick={this.signup}
          />
          <a href="/login">Đăng nhập</a>
        </div>
      </div>
    );
  }
}
export default Signup;
