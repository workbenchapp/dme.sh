import * as React from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
import { Heading } from "theme-ui";

const DaonetesPage = () => {
  const [show, setShow] = React.useState(false);

  const addNodeClose = () => setShow(false);
  const addNode = () => setShow(true);

  const [showAddDeployment, setShowAddDeployment] = React.useState(false);

  const addDeploymentClose = () => setShowAddDeployment(false);
  const addDeployment = () => setShowAddDeployment(true);

  return (
    <Container>
      <Heading>
        DAOnetes (Dao name / selector if the wallet account is in more than one
        DAO)
      </Heading>
      <Row>
        <Col>
          <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup aria-label="First group">
              <Button disabled variant="secondary">
                Nodes
              </Button>{" "}
              <Button variant="secondary" onClick={addNode}>
                Add
              </Button>{" "}
              <Modal show={show} onHide={addNodeClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Register a node</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Node public key</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Node public key"
                      />
                      <Form.Text className="text-muted">
                        This will register this node with the DAO.
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                    <Button variant="secondary" onClick={addNodeClose}>
                      Cancel
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </ButtonGroup>
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Find node"
                aria-label="Find node"
                aria-describedby="btnGroupAddon2"
              />
            </InputGroup>
          </ButtonToolbar>{" "}
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Sven&apos; Windows Laptop
            </ListGroup.Item>
            <ListGroup.Item as="li">Nathan&apos;s M1 Laptop</ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              Big Build server (offline)
            </ListGroup.Item>
            <ListGroup.Item as="li">Cloud server</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ButtonToolbar
            className="justify-content-between"
            aria-label="Toolbar with Button groups"
          >
            <ButtonGroup aria-label="First group">
              <Button disabled variant="secondary">
                Deployments
              </Button>{" "}
              <Button variant="secondary" onClick={addDeployment}>
                Add
              </Button>{" "}
              <Modal show={showAddDeployment} onHide={addDeploymentClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Deploy a spec</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Some kind of list of specs, and when the user picks one, we
                  show that spec&apos;s configuration UX
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="secondary" onClick={addDeploymentClose}>
                    Cancel
                  </Button>
                </Modal.Body>
              </Modal>
            </ButtonGroup>
            <InputGroup>
              <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
              <FormControl
                type="text"
                placeholder="Find deployment"
                aria-label="Find dployment"
                aria-describedby="btnGroupAddon2"
              />
            </InputGroup>
          </ButtonToolbar>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              DMESH network (global)
            </ListGroup.Item>
            <ListGroup.Item as="li">Caddy super proxy (global)</ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              Dagger build cluster (offline)
            </ListGroup.Item>
            <ListGroup.Item as="li">
              DAO local Solana Validator (Cloud server)
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default DaonetesPage;
