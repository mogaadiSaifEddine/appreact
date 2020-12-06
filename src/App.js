import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className ='hio'>here's no thing !! </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body
      <Form class ="ff">
    <Container fluid >
  <Form.Group  controlId="formHorizontalEmail">
    <Row>
    <Form.Label class="col-2">
      Email
    </Form.Label>
    <Col class="col-10">
      <Form.Control type="email" placeholder="Email" />
    </Col>
    </Row>
  </Form.Group>

  <Form.Group  controlId="formHorizontalPassword">
    <Row>
    <Form.Label class="col-2">
      Password
    </Form.Label>
    <Col class="col-10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
    </Row>
  </Form.Group>
  
  <Form.Group controlId="formHorizontalCheck">
  <Col>
  <Form.Label class="col-2">
    </Form.Label>
    <Row class="col-10">
      <Form.Check label="Remember me" />
    </Row>
    </Col>
  </Form.Group>

  <Form.Group >
    <Col>
    <Form.Label class="col-2">
    </Form.Label> 
    <Row class="col-10">
    <Button variant="outline-primary">Sign in</Button>
    </Row>
    </Col>
  </Form.Group>
  </Container>
</Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  
<Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>
    </div>
  );
}


export default App;
