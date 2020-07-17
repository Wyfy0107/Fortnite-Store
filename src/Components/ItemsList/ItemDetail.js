import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemDetail } from "../../Redux/ActionTypes";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { deliverAddedItem } from "../../Redux/ActionTypes";

const DetailWrapper = styled.div`
  display: flex;
  flex-flow: row;
  margin: 3rem;
  padding: 1rem
  justify-content: center;
  width: 60vw;
  margin: auto;
  color: black;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-flow: column;
  text-align: left;
  margin-left: 3rem;
  width: 100%;
`;

const Img = styled.img`
  width: 50%;
`;
function ItemDetail({ itemDetail, getItemDetail, deliverAddedItem }) {
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
            <br />
            <p>Type: {type}</p>
            <p>Price: {price}</p>
            <Button
              variant='primary'
              style={{ width: "40%" }}
              onClick={() => deliverAddedItem(name)}
            >
              Add to Cart
            </Button>
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
    deliverAddedItem: (name) => dispatch(deliverAddedItem(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail);
