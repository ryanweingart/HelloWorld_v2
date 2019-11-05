import React from 'react';
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './top.css';
import axios from 'axios';
import { Link } from "react-router-dom";



const logout = () => {
  axios.get('/auth/logout')
    .then(res => {
      alert(res.response.data.msg);
    })
}

const Top = (props) => (

  <Navbar className="topbar p-0 border-bottom"  fixed="top" variant="light">
  <Navbar.Brand href="#home">
  <img className="imager"
       style= {{height: '85px', paddingLeft: '20px'}}
        alt="Logo"
        src="../Chat.png"
          />
  </Navbar.Brand>
  
  <p id="demo" className="mb-0 pb-0 pt-4"><em><strong>Lets talk about it...</strong></em></p>

  <Nav className="mr-auto">

    {/* <Nav.Link href="#home">Home</Nav.Link>
    <Nav.Link href="#features">Features</Nav.Link>
    <Nav.Link href="#pricing">Pricing</Nav.Link> */}
  </Nav>
  <Form inline>
  <Link to="/signin" className=" link-button btn btn-primary" variant="dark" onClick={logout}>Sign Out</Link><span className="line"> | </span>
    <FormControl type="text" placeholder="&#xF002; Search" className=" p-3 mr-3 ml-5 mr-5 form fontAwesome" /><span className="line"> | </span>
    <Button className ="ml-5 mr-3 button" variant="dark">Search</Button>
  </Form>
</Navbar>
)





export default Top;

