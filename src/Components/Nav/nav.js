import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "./nav.css";
import { MDBCol, MDBIcon } from "mdbreact";
import { LinkContainer } from "react-router-bootstrap";
import categorytApi from "../../services/categoriesApi";
import { useHistory } from "react-router-dom";
import CategoryItem from "../Categories/categoryItem";

Navbarmenu.defaultProps = {
  categoryt: {},
  handleToProductClick: null,
};

function Navbarmenu(props) {
  const { categoryt, onToProductClick } = props;

  const handleToProductClick = () => {
    if (onToProductClick) onToProductClick(categoryt);
  };
  const [categoryList, setCategoryList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getAllCategoryList = async () => {
      const response = await categorytApi.getAll();
      setCategoryList(response);
      console.log(response);
    };

    getAllCategoryList();
  }, []);

  const showProduct = (categoryt) => {
    const productUrl = `/product-categories/${categoryt.id}`;

    history.push(productUrl);
    // window.location.reload();
    let currentPath = window.location.pathname;
    history.replace(`/${categoryt.id}`);
    setTimeout(() => {
      history.replace(currentPath);
    }, 0);
  };

  const userData = localStorage.getItem("userData");
  console.log("asdas", localStorage.getItem("userData"));
  const handleExitClick = () => {
    localStorage.removeItem("userData");
    console.log("Removed userDa");
  };

  return (
    <div className="nav-menu">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="info"
        className="navbar navbar-fixed-top"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" id="menu">
            <NavDropdown
              className="lbl"
              title="DANH MỤC SẢN PHẨM"
              id="collasible-nav-dropdown"
            >
              {categoryList.map((category) => (
                <CategoryItem
                  key={category.id}
                  category={category}
                  onToProductClick={showProduct}
                />
              ))}
            </NavDropdown>
            <LinkContainer to="/">
              <Nav.Link className="lbl">TRANG CHỦ</Nav.Link>
            </LinkContainer>
            <Nav.Link className="lbl" href="/pay">
              THANH TOÁN
            </Nav.Link>
            <Nav.Link className="lbl" href="/delivery-policy">
              CHÍNH SÁCH GIAO HÀNG
            </Nav.Link>
            <Nav.Link className="lbl" href="/contact">
              LIÊN HỆ
            </Nav.Link>
          </Nav>
          <Nav>
            <MDBCol md="7">
              <div className="input-group md-form form-sm form-1 pl-0">
                <input
                  className="form-control my-0 py-1"
                  type="text"
                  placeholder="Sản phẩm bạn muốn tìm..."
                  aria-label="Search"
                />
                <div className="input-group-prepend">
                  <span
                    className="input-group-text #b3fff0  lighten-0"
                    id="basic-text1"
                  >
                    <MDBIcon className="text-black" icon="search" />
                  </span>
                </div>
              </div>
            </MDBCol>
            {userData ? (
              <Nav.Link
                eventKey={2}
                href="/"
                className="lbl"
                onClick={handleExitClick}
              >
                <i class="fa fa-times" aria-hidden="true"></i>
                THOÁT
              </Nav.Link>
            ) : (
              <Nav.Link href="/login" className="lbl">
                <i class="fa fa-user" aria-hidden="true"></i>
                ĐĂNG NHẬP
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarmenu;
