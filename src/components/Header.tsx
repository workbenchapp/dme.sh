import * as React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

function Header() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">DMe.sh</Navbar.Brand>
        <WalletMultiButton />
        <WalletDisconnectButton />
      </Container>
    </Navbar>
  );
}

export default Header;
