import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Fortnite</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Navbar.Text style={{ margin: "0 0.5rem" }}>
              <Link to='/'>Home</Link>
            </Navbar.Text>

            <Navbar.Text style={{ margin: "0 0.5rem" }}>
              <Link to='/ItemStore'>Merch</Link>
            </Navbar.Text>

            <Navbar.Text style={{ margin: "0 0.5rem" }}>
              <Link to='/Tournaments'>Tournaments</Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
