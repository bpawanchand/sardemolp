import React from "react";
import ReactDOM from "react-dom";
import {Container, Row, Col, Button, Navbar} from "react-bootstrap";
import Image from "./images/rb.svg";

const Search = () => (
  <Container>
    <Navbar expand="lg" variant="light" bg="dark">
      <Navbar.Brand href="#home">
        <img alt="" src={Image} width="30" height="30"
         className="d-inline-block align-top"/>
        {'BookMyMeeting'}
      </Navbar.Brand>
    </Navbar>
  </Container>
);

export default Search;
