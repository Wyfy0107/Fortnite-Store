import React, { Component } from "react";
import { getChallengeList } from "../../Redux/ActionTypes";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import first from "../../Images/first.jpg";
import second from "../../Images/second.png";
import third from "../../Images/third.png";
import fourth from "../../Images/fourth.png";
import styled from "styled-components";

const Img = styled.img`
  height: 95vh;
  width: 100vw;
`;

const H3 = styled.div``;

let challengeTitle = null;

class ChallengeList extends Component {
  componentDidMount() {
    this.props.getChallengeList();
  }

  render() {
    if (this.props.challengeList) {
      challengeTitle = this.props.challengeList.map((val) => val.title);
    }
    return (
      <div>
        {this.props.challengeList ? (
          <Carousel>
            <Carousel.Item>
              <Img className='d-block w-100' src={first} alt='First slide' />
              <Carousel.Caption>
                <h3>{challengeTitle[0]}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Img
                className='../../Images/second.jpg'
                src={second}
                alt='Third slide'
              />

              <Carousel.Caption>
                <h3>{challengeTitle[1]}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Img className='d-block w-100' src={third} alt='Third slide' />

              <Carousel.Caption>
                <h3>{challengeTitle[2]}</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Img className='d-block w-100' src={fourth} alt='Fourth slide' />

              <Carousel.Caption>
                <h3>{challengeTitle[3]}</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    challengeList: state.challengeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getChallengeList: () => dispatch(getChallengeList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList);
