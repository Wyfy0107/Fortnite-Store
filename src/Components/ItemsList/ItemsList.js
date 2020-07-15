import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemsList } from "../../Redux/ActionTypes";
import styled from "styled-components";
import { Link, Switch, Route } from "react-router-dom";
import ItemsDetail from "./ItemDetail";
import { merchStoreSearchDisplay } from "../../Redux/ActionTypes";

let itemsList = [];

const Img = styled.img`
  width: 20vw;
  margin: 1rem;
  transition: 0.5s;
  box-shadow: 0 5px #3f4441;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0 0;
  }
`;

const Div = styled.div`
  display: block;
  text-align: center;
  background: #f0f0f0;
`;

class ItemsList extends Component {
  state = {
    reachBottom: false,
  };
  componentDidMount() {
    this.props.getItemsList();
    this.props.merchStoreSearchDisplay();
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    this.props.merchStoreSearchDisplay();
    window.addEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const userScrolled = winScroll / height;

    if (userScrolled === 1) {
      this.setState({ reachBottom: true });
    }
  };

  render() {
    const { path, url } = this.props;
    if (this.props.itemsList) {
      itemsList = this.props.itemsList.slice(1, 40).map((val) => (
        <Link to={`${url}/${val.id}`} key={val.name}>
          <Img src={val.images.full_background} alt='shop items' />
        </Link>
      ));
      if (this.state.reachBottom) {
        itemsList = itemsList.concat(
          this.props.itemsList.slice(41, 100).map((val) => (
            <Link to={`${url}/${val.id}`} key={val.name}>
              <Img src={val.images.full_background} alt='shop items' />
            </Link>
          ))
        );
      }
    }
    return (
      <Div>
        <Switch>
          <Route exact path={path}>
            {this.props.itemsList ? <Div>{itemsList}</Div> : null}
          </Route>

          <Route path={`${path}/:itemID`}>
            <ItemsDetail />
          </Route>
        </Switch>
      </Div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsList: state.itemsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemsList: () => dispatch(getItemsList()),
    merchStoreSearchDisplay: () => dispatch(merchStoreSearchDisplay()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
