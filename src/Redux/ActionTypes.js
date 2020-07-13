export const getChallengeList = () => {
  return {
    type: "GET_CHALLENGE_LIST",
  };
};

export const getDailyShop = () => {
  return {
    type: "GET_DAILY_SHOP",
  };
};

export const getTournaments = () => {
  return {
    type: "GET_TOURNAMENTS",
  };
};

export const getItemsList = () => {
  return {
    type: "GET_ITEMS_LIST",
  };
};

export const getItemDetail = (itemID) => {
  return {
    type: "GET_ITEM_DETAIL",
    itemID: itemID,
  };
};
