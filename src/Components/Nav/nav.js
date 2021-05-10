import React, { useState, useEffect } from "react";
import categoriesApi from "../../services/categoriesApi";
import { Navbar, Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "./nav.css";
import { MDBCol, MDBIcon } from "mdbreact";
import { LinkContainer } from "react-router-bootstrap";
import categorytApi from "../../services/categoriesApi";

function Navbarmenu() {
  
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const getAllCategoryList = async () => {
      const response = await categorytApi.getAll();
      setCategoryList(response);a
      console.log(response);
    };

    getAllCategoryList();
  }, []);
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
              {categoryList.map((item) => (
                <NavDropdown.Item key={item.id} name="name">
                  {item.name}
                </NavDropdown.Item>
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

            <Nav.Link href="/login" className="lbl">
              <i class="fa fa-user" aria-hidden="true"></i>
              ĐĂNG NHẬP
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="lbl">
              <i class="fa fa-times" aria-hidden="true"></i>
              THOÁT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
//}

export default Navbarmenu;
