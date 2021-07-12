import logo from "./images/logo.png";
import user from "./images/user.png";
import clock from "./images/clock.svg";
import person from "./images/person.svg";
import person_black from "./images/person-black.svg";
import users from "./images/users.svg";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import { Row, Col, Card, Form } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
  datasets: [
    {
      label: "# of Red Votes",
      data: [12, 19, 3, 5, 2, 3, 10],
      backgroundColor: "rgb(68, 156, 253)",
    },
    {
      label: "# of Blue Votes",
      data: [2, 3, 20, 5, 1, 4, 6],
      backgroundColor: "rgb(89, 212, 219)",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const data2 = {
  labels: ["green", "Cyan", "Purple", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(46, 205, 120, 1)",
        "rgba(89, 212, 219, 1)",
        "rgba(161, 129, 196, 1)",
        "rgba(68, 156, 253, 1)",
      ],
      borderWidth: 0,
    },
  ],
};

function Reports() {
  return (
    <Container fluid className="p-0">
      <Navbar expand="lg" className="top_nav">
        <Navbar.Brand href="#home">
          <img className="d-block w-100" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">DASHBOARD</Nav.Link>
            <Nav.Link href="#CONVERSATIONS">CONVERSATIONS</Nav.Link>
            <Nav.Link href="#REPORTS">REPORTS</Nav.Link>
            <Nav.Link href="#BOTS">BOTS</Nav.Link>
            <Nav.Link href="#TAGS">TAGS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-light"
              id="dropdown-basic"
              className="mr-3"
            >
              English
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="mr-3 btn_user">
              JOHN DOE <img src={user} className="user_thumb" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="user_option">
              <Dropdown className="p-2 pl-4 pr-4 d-flex">
                <p className="m-0 flex-one">Available</p>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                />
              </Dropdown>
              <Dropdown.Item href="#/action-2">Set Status Message</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Manage Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Canned Responses</Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="color_red">Sign Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Navbar>
      <div className="p-5">

        <div className="chart_block">
          <h3 className="mt-4">My Reports</h3>
          <div className="card_home">
          <Row>
            <Col xs="12" lg="6">
                <div  className="p-5">
                <h4 className="mb-5">
                  <img src={person_black} className="user_thumb mr-3" /> Number of Requests recieved per day
                </h4>
                <Bar data={data} options={options} />
                </div>
            </Col>
            <Col xs="12" lg="6">
            <div  className="p-5">
                <h4 className="mb-5">
                  <img src={person_black} className="user_thumb mr-3" /> Average Response Time
                </h4>
                <Doughnut data={data2} />
                </div>
            </Col>
            <Col xs="12" lg="6">
            <div  className="p-5">
                <h4 className="mb-5">
                  <img src={person_black} className="user_thumb mr-3" /> Average Handle Time
                </h4>
                <Bar data={data} options={options} />
                </div>
            </Col>
          </Row>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Reports;
