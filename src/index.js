import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./style/custom-btsp.scss";
import "mdbreact/dist/css/mdb.css";
//import Home from './Components/Home/home';
import Pay from "./Components/Pay/pay";
import Delivery from "./Components/Delivery-policy/delivery-policy";
import Contact from "./Components/Contact/contact";
import Login from "./Components/Login-Register/login";
import Signup from "./Components/Login-Register/signup";
import Product from "./User/Product/product-load";
import productDetail from "./Components/Product/productDetail";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/pay" exact component={Pay} />
        <Route path="/delivery-policy" exact component={Delivery} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/product-load" exact component={Product} />
        <Route
          path="/Expected `onClick` listener to be a function, instead got a value of `object` type./:productId"
          exact
          component={productDetail}
        />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
