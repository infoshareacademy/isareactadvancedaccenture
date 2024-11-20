import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { RentalOffice } from "./views/RentalOffice";
import { Shop } from "./views/shop/Shop";
import { ShopCart } from "./views/shop/ShopCart";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Redux
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/rental-office">
              Rental office
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
          </Nav>
          <ShopCart />
        </Container>
      </Navbar>
      <Container className="mt-5 d-flex flex-column align-items-center">
        <Routes>
          <Route path="/" element={<h1>Welocme to redux app!</h1>} />
          <Route path="/rental-office" element={<RentalOffice />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
