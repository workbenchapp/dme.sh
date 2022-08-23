import { EditableDProfile } from "dprofile";
import "dprofile/dist/style.css";
import * as React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { PublicKey } from "@solana/web3.js";

const REALM_CREATOR = new PublicKey(
  "xMUbkZmXfNtnWDMtXuVC9dc3A3vDMMSrsLLnz5kjoSQ"
);

function Header() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">DMe.sh</Navbar.Brand>
        <WalletMultiButton />
        <EditableDProfile size={48} creator={REALM_CREATOR} />
      </Container>
    </Navbar>
  );
}

export default Header;
