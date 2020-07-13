import React, { Component } from "react";
import styled from "styled-components";
import { getDailyShop } from "../../Redux/ActionTypes";
import { connect } from "react-redux";
import dailyItemImage from "../../Images/daily-item.jpg";

let dailyShopItems = null;

const CardWrapper = styled.div`
  display: block;
`;

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
  text-align: center;
  background-image: url(${dailyItemImage});
  background-size: 100vw 100vh;
  padding: 1rem;
`;

class DailyShop extends Component {
  componentDidMount() {
    this.props.getDailyShop();
  }
  render() {
    if (this.props.dailyShop) {
      dailyShopItems = this.props.dailyShop
        .splice(3)
        .map((val) => (
          <Img key={val.name} src={val.full_background} alt='daily item' />
        ));
    }
    return (
      <Div>
        <h1 style={{ color: "white" }}>Daily Shop</h1>
        {this.props.dailyShop ? (
          <CardWrapper>{dailyShopItems}</CardWrapper>
        ) : null}
      </Div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dailyShop: state.dailyShop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDailyShop: () => dispatch(getDailyShop()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DailyShop);
