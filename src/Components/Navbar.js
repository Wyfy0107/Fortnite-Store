import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { connect } from "react-redux";
import styled from "styled-components";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";

const SearchDisplayWrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: absolute;
  right: 2rem;
  top: 0.5rem;
`;

const ResultWrapper = styled(SearchDisplayWrapper)`
  position: static;
  background: white;
  padding: 5px;
`;

function NavigationBar({ searchDisplay, itemsList }) {
  const [filteredResult, setResult] = useState(null);

  let { path, url } = useRouteMatch();

  let location = useLocation();

  const getUserInput = (event) => {
    let userInput = event.target.value;
    if (userInput.length !== 0) {
      const regex = new RegExp(`^${userInput}`, "i");
      if (itemsList) {
        let matchResult = itemsList.map((val) => val.name.match(regex));
        let result = matchResult.filter((array) => !!array);
        setResult(result);
      }
    } else setResult(null);
  };

  const getItemID = (itemName) => {
    if (itemsList) {
      let itemInfo = itemsList.filter((val) => val.name === itemName);
      var itemID = itemInfo[0].id;
    }
    return itemID;
  };

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
          <SearchDisplayWrapper>
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
                onChange={(event) => getUserInput(event)}
              />
            </Form>
            <div>
              {filteredResult
                ? filteredResult.map((val) => (
                    <Link
                      key={val.input}
                      to={`ItemStore/${getItemID(val.input)}`}
                    >
                      <ResultWrapper>{val.input}</ResultWrapper>
                    </Link>
                  ))
                : null}
            </div>
          </SearchDisplayWrapper>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    searchDisplay: state.searchDisplay,
    itemsList: state.itemsList,
  };
};

export default connect(mapStateToProps, {})(NavigationBar);
