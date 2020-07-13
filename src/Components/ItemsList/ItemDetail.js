import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../Redux/ActionTypes";
import { connect } from "react-redux";
import styled from "styled-components";

const DetailWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin: 3rem;
  justify-content: center;
  width: 60vw;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  margin-left: 3rem;
  width: 100%;
`;

const Img = styled.img`
  width: 50%;
`;
function ItemDetail({ itemDetail, getItemDetail }) {
  let { itemID } = useParams();

  useEffect(() => {
    getItemDetail(itemID);
  }, []);

  if (itemDetail) {
    var { name, type, rarity, price } = itemDetail;
    var itemImage = itemDetail.images.full_background;
  }

  return (
    <div>
      {itemDetail ? (
        <DetailWrapper>
          <Img src={itemImage} alt='item image' />

          <InfoWrapper>
            <h1 style={{ color: "" }}>{name}</h1>
            <h2>{rarity}</h2>
            <p>Type: {type}</p>
            <p>Price: {price}</p>
          </InfoWrapper>
        </DetailWrapper>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemDetail: state.itemDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItemDetail: (itemID) => dispatch(getItemDetail(itemID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
