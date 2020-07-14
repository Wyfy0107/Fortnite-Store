import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";

function NavigationBar({ searchDisplay }) {
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
          <Form
            inline
            style={{
              display: !searchDisplay ? "none" : "block",
            }}
          >
            <FormControl
              type='text'
              placeholder='Search Item'
              className=' mr-sm-2'
            />
            <Button type='submit'>Submit</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    searchDisplay: state.searchDisplay,
  };
};

export default connect(mapStateToProps, {})(NavigationBar);
