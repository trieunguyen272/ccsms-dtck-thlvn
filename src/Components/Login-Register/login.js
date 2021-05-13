import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/postData";
// import { Nav } from "react-bootstrap";
//import {Signup} from './signup';
import "./login.css";
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

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
    let item = { userName, password };
    if (this.state.userName && this.state.password) {
      const response = await login(this.state);
      if (response.status === 200) {
        localStorage.setItem ('user-info', response.data)
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
      localStorage.getItem ('user-info');
      return <Redirect to={"/product-load"} />;
    }
    // if (sessionStorage.getItem("userData")) {
    //   return <Redirect to={"/home"} />;
    // }
    return (
      <div className="row" id="Body">
        <div className="medium-5 columns left">
          <h4>Login</h4>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập</label>
              <input
                type="text"
                name="userName"
                placeholder="username"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mật khẩu</label>
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
        </div>
      </div>

      // <MDBContainer>
      //   <MDBRow>
      //     <MDBCol md="6">
      //       <form>
      //         <p className="h5 text-left mb-4">Sign in</p>
      //         <div className="grey-text">
      //           <MDBInput
      //             label="Type your userName"
      //             icon="envelope"
      //             onChange={this.onChange}
      //           />
      //           <MDBInput
      //             label="Type your password"
      //             icon="lock"
      //             group
      //             type="password"
      //             validate
      //             onChange={this.onChange}
      //           />
      //         </div>
      //         <div className="text-center">
      //           <MDBBtn type="submit" onClick={this.submitLogin}>
      //             Login
      //           </MDBBtn>
      //         </div>
      //       </form>
      //     </MDBCol>
      //   </MDBRow>
      // </MDBContainer>

      // <form>
      //   <div className="form-group">
      //     <label>Email</label>
      //     <input
      //       type="email"
      //       className="form-control"
      //       placeholder="Enter email"
      //     />
      //   </div>

      //   <div className="form-group">
      //     <label>Password</label>
      //     <input
      //       type="password"
      //       className="form-control"
      //       placeholder="Enter password"
      //     />
      //   </div>

      //   <div className="form-group">
      //     <div className="custom-control custom-checkbox">
      //       <input
      //         type="checkbox"
      //         className="custom-control-input"
      //         id="customCheck1"
      //       />
      //       <label className="custom-control-label" htmlFor="customCheck1">
      //         Remember me
      //       </label>
      //     </div>
      //   </div>

      //   <button type="submit" className="btn btn-dark btn-lg btn-block">
      //     Sign in
      //   </button>
      //   <p className="forgot-password text-right">
      //     Forgot <a href="#">password?</a>
      //   </p>
      // </form>
    );
  }
}
export default Login;
