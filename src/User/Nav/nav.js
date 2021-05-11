import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./nav.css";
import { MDBCol, MDBIcon } from "mdbreact";
import { LinkContainer } from "react-router-bootstrap";

function Navbarmenu() {
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
            <LinkContainer to="/">
              <Nav.Link className="lbl">XEM SẢN PHẨM</Nav.Link>
            </LinkContainer>
            {/* <Nav.Link className="lbl" href="/pay">THANH TOÁN</Nav.Link>
            <Nav.Link className="lbl" href="/delivery-policy">CHÍNH SÁCH GIAO HÀNG</Nav.Link>
            <Nav.Link className="lbl" href="/contact">LIÊN HỆ</Nav.Link> */}
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
              NGUYỄN A
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
export default Navbarmenu;