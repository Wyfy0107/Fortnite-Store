import React, { Component } from "react";
import { getTournaments } from "../../Redux/ActionTypes";
import { connect } from "react-redux";
import styled from "styled-components";
import TournamentCard from "./TournamentCard";

let tournaments = null;

const randomTournaments = Math.floor(Math.random() * 8);

class Tournaments extends Component {
  componentDidMount() {
    this.props.getTournaments();
  }

  render() {
    if (this.props.tournaments) {
      tournaments = this.props.tournaments
        .slice(randomTournaments, randomTournaments + 3)
        .map((val) => (
          <TournamentCard title={val.name_line2} background={val.poster} />
        ));
    }
    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "4rem", marginTop: "0.5rem" }}>
          <i>
            Join the Tournaments <strong>now</strong>
          </i>
        </h2>
        {this.props.tournaments ? (
          <div style={{ display: "flex", flexFlow: "row wrap" }}>
            {tournaments}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tournaments: state.tournaments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTournaments: () => dispatch(getTournaments()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tournaments);
