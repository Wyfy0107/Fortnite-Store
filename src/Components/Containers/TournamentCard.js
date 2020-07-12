import React from "react";
import styled from "styled-components";

const H2 = styled.h2`
  font-size: 2rem;
  color: white;
  margin: 0.5rem;
`;

const TitleWrapper = styled.div`
  background: #e8483e;
  border-radius: 7px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

function TournamentCard({ title, background }) {
  const Wrapper = styled.div`
    background-image: url(${background});
    height: 90vh;
    flex: 1 1;
    margin: 5px;
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Wrapper>
      <TitleWrapper>
        <H2>{title}</H2>
      </TitleWrapper>
    </Wrapper>
  );
}

export default TournamentCard;
