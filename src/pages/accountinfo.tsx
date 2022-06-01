import * as React from "react";
import { Row, Col, Container, Spinner } from "react-bootstrap";
import { Heading } from "theme-ui";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

const AccountInfoPage = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  return (
    <Container>
      <Heading>Account info for {publicKey?.toString()}</Heading>
      <Row>
        <Col>
          <Row xs={1} md={1} className="g-4">
            <Card>
              <Card.Body>
                <Card.Title>account info</Card.Title>
                <Card.Text>
                  <div>NAME: name</div>
                  <div> SOL</div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">EXECUTABLE:</small>
              </Card.Footer>
            </Card>
          </Row>
        </Col>
        <Col>
          <Row xs={1} md={1} className="g-4">
            <Card>
              <Card.Body>
                <Card.Title>token1 info</Card.Title>
                <Card.Text>
                  <div>NAME: name</div>
                  <div> SOL</div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">EXECUTABLE:</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>token2 info</Card.Title>
                <Card.Text>
                  <div>NAME: name</div>
                  <div> SOL</div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">EXECUTABLE:</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>token3 info</Card.Title>
                <Card.Text>
                  <div>NAME: name</div>
                  <div> SOL</div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">EXECUTABLE:</small>
              </Card.Footer>
            </Card>
          </Row>
        </Col>
        <Col>
          <Row xs={1} md={1} className="g-4">
            <Card>
              <Card.Body>
                <Card.Title>domain1 info</Card.Title>
                <Card.Text>
                  <div>NAME: name</div>
                  <div> SOL</div>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">EXECUTABLE:</small>
              </Card.Footer>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountInfoPage;
