import React from "react";
import Header from "./Components/Header/header";
import Navbarmenu from "./Components/Nav/nav";
import Footer from "./Components/Footer/footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
// import { createBrowserHistory } from "history";
import Product from "./Components/Product/product";
import Pay from "./Components/Pay/pay";
import Delivery from "./Components/Delivery-policy/delivery-policy";
import Contact from "./Components/Contact/contact";
import Login from "./Components/Login-Register/login";
import Signup from "./Components/Login-Register/signup";
import Cart from "./User/Cart/cart";
import productDetail from "./Components/Product/productDetail";
import productCategoriesList from "./Components/Categories/productCategories";
import Home from "./Components/Home/home";

// const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbarmenu />

        <Switch>
          <Redirect exact from="/" to="/home" />

          <Route path="/home" component={Home} />
          <Route path="/pay" component={Pay} />
          <Route path="/delivery-policy" component={Delivery} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/product-load" component={Cart} />
          <Route
            path={`/product-detail/:productId`}
            component={productDetail}
          />
          <Route
            path={`/product-categories/:categorytId`}
            component={productCategoriesList}
          />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
    // <>
    // <FooterContainer/>
    // </>
  );
}

export default App;
