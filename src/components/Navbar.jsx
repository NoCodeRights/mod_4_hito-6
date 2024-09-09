import React, {useContext} from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatNumber } from "../scripts";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function NavbarApp() {
  const { amount } = useContext(CartContext); 
  const token = true;

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand >Pizzería Mamma Mia!</Navbar.Brand>
          <Button className="btn-sm" variant="outline-light" >
            <Link to="/"> 🍕Home</Link>
          </Button>
          {token ? (
            <>
              <Button
                className="btn-sm"
                variant="outline-light"
                href="#profile"
              >
                <Link to="/Profile">🔓Profile</Link>
              </Button>
              <Button className="btn-sm" variant="outline-light" href="#Logout">
              <Link to="/">🔒Logout</Link>
              </Button>
            </>
          ) : (
            <>
              <Button className="btn-sm" variant="outline-light" href="#Login">
              <Link to="/LoginPage">🔐Login</Link>
              </Button>
              <Button
                className="btn-sm"
                variant="outline-light"
                href="#register"
              >
                <Link to="/RegisterPage">🔐Register</Link>
              </Button>
            </>
          )}
        </Nav>
        {token && (
          <Button className="btn-sm" variant="outline-info" href="#total">
            <Link to="/Cart">🛒Total: {formatNumber(amount)}</Link>
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
