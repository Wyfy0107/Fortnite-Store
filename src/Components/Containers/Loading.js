import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const LoadingScreen = styled.div`
  width: 100vw;
  background: #e4e3e3;
  height: 300vh;
  opacity: 0.8;
  z-index: 100;
  position: absolute;
  display: ${(props) => (props.loading ? "block" : "none")};
  text-align: center;
  font-size: 2rem;
`;

function Loading({ loading }) {
  return (
    <LoadingScreen loading={loading ? "true" : null}>
      <h1 style={{ position: "relative", top: "8rem" }}>Loading...</h1>
    </LoadingScreen>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Loading);
