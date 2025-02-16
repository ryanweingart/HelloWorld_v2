import React from "react";
import { Navbar, Nav, Form, DropdownButton, Dropdown } from "react-bootstrap";
import "./top.css";
import axios from "axios";
import { Link } from "react-router-dom";

const logout = () => {
  axios
    .get("/auth/logout")
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};


const Top = props => (
  <Navbar className="topbar p-0 border-bottom" fixed="top" variant="light">
    <Navbar.Brand href="/">
      <img
        className="imager"
        style={{ height: "80px", paddingLeft: "20px" }}
        alt="Logo"
        src="../Chat.png"
      />
    </Navbar.Brand>

    <p id="demo" className="mb-0 pb-0 pt-4">
      <em>
        <strong>Welcome, {props.username}!</strong>
      </em>
    </p>

    <Nav className="mr-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="&#xF002; Search" className=" p-3 mr-3 ml-5 mr-5 form fontAwesome" /><span className="line"> | </span> */}

      {/* <Link className ="pt-4 ml-5 mr-4 links" as={Link} to="/">Home</Link> */}
      <DropdownButton 
        className="mr-5 pt-4"
        variant="link-dark"
        // size="lg"
        id="dropdown-basic-button"
        title="Site Links "
      >
        <Dropdown.Item as={Link} to="/"><i className="fas fa-home icon-muted pr-3"></i>Home
        </Dropdown.Item>
        
        <Dropdown.Item as={Link} to="/register"><i className="fas fa-user-plus icon-muted pr-3"></i>Register
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/login"><i className="fas fa-sign-in-alt icon-muted pr-3"></i>Log In
        </Dropdown.Item>
        <Dropdown.Item as={Link} to="/about"><i className="fas fa-question icon-muted pr-3"></i>About Us
        </Dropdown.Item>

      </DropdownButton>
      <span className="line pt-4 mr-3"> | </span>

      

      <Link
        to="/login"
        className="btn btn-dark link-button mr-4 ml-5 roll-in-right"
        variant="dark"
        onClick={logout}
      >
        Log Out
      </Link>
    </Form>
  </Navbar>
);

export default Top;
