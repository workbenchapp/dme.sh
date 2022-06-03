import * as React from "react";
import { Row, Col, Container, Spinner, Button } from "react-bootstrap";
import { Heading } from "theme-ui";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

interface Spec {
  type: number;
  title: string;
  description: string;
  note: string;
  platform: string;
  logo: string;
}

const SpecCard = (props: { item: Spec }) => {
  const { item } = props;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <img src={item.logo} />
          <div>{item.description}</div>
          <div>{item.note}</div>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Not deployed</small>
        <Button>Deploy</Button>
      </Card.Footer>
    </Card>
  );
};

const SpecsPage = () => {
  const [specs, setSpecs] = React.useState<{
    isLoaded: boolean;
    items: Spec[];
  }>({ isLoaded: false, items: [] });

  React.useEffect(() => {
    fetch(
      //"https://raw.githubusercontent.com/brod-intel/cfa-demo/master/templateUX.json"
      "https://raw.githubusercontent.com/ptrdin/templates/ptrdin/templates-2.0.json"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setSpecs({
            isLoaded: true,
            items: result.templates,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
          setSpecs({
            isLoaded: true,
            items: [],
            // error
          });
        }
      );
  });
  return (
    <Container>
      <Heading>Spec list</Heading>
      <Row>
        <Col>
          <Row xs={1} md={3} className="g-4">
            {specs.items.map((item) => {
              return <SpecCard key={item.title} item={item}></SpecCard>;
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SpecsPage;
