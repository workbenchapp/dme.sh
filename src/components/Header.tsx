import * as React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">DMe.sh</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
