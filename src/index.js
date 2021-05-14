import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./style/custom-btsp.scss";
import "mdbreact/dist/css/mdb.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login-Register/login";
import Signup from "./Components/Login-Register/signup";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
        
        <Switch>
         
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          
        </Switch>

        
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
