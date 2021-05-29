import React from "react";
import Header from "./View-Controller/Components/Header/header";
import Navbarmenu from "./View-Controller/Components/Nav/nav";
import Footer from "./View-Controller/Components/Footer/footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Pay from "./View-Controller/Components/Pay/pay";
import Delivery from "./View-Controller/Components/Delivery-policy/delivery-policy";
import Contact from "./View-Controller/Components/Contact/contact";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./View-Controller/Components/Login-Register/login";
import Signup from "./View-Controller/Components/Login-Register/signup";
import productCategoriesList from "./View-Controller/Components/Categories/productCategories";
import Home from "./View-Controller/Components/Home/home";
import productDetail from "./View-Controller/Components/Product/productDetail";
import Cart from "./View-Controller/Components/Cart/cart";
import Bill from "./View-Controller/Components/Cart/bill";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbarmenu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pay" exact component={Pay} />
          <Route path="/delivery-policy" exact component={Delivery} />
          <Route path="/contact" exact component={Contact} />

          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />

          {/* <Route path="/nav" exact component={Navbarmenu} /> */}
          <Route
            path={`/product-detail/:productId`}
            exact
            component={productDetail}
          />
          <Route
            path={`/product-categories/:categorytId`}
            exact
            component={productCategoriesList}
          />
          <Route path="/cart" exact component={Cart} />
          <Route path="/bill" exact component={Bill} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
