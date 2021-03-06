const initialState = {
  challengeList: null,
  dailyShop: null,
  tournaments: null,
  itemsList: null,
  itemID: null,
  itemDetail: null,
  searchDisplay: false,
  userInput: null,
  addedItemName: [],
  cartOpen: false,
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CHALLENGE_LIST":
      return { ...state, loading: true };
    case "CHALLENGE_LIST_RECEIVED":
      return {
        ...state,
        loading: false,
        challengeList: action.challengeList.weeks[1].challenges,
      };
    case "GET_DAILY_SHOP":
      return { ...state, loading: true };
    case "DAILY_SHOP_RECEIVED":
      return { ...state, loading: false, dailyShop: action.dailyShop.featured };
    case "GET_TOURNAMENTS":
      return { ...state, loading: true };
    case "TOURNAMENTS_RECEIVED":
      return {
        ...state,
        loading: false,
        tournaments: action.tournaments.events,
      };
    case "GET_ITEMS_LIST":
      return { ...state, loading: true };
    case "ITEMS_LIST_RECEIVED":
      return {
        ...state,
        loading: false,
        itemsList: action.itemsList.items.backpack,
      };
    case "GET_ITEM_DETAIL":
      return {
        ...state,
        loading: true,
        itemID: action.itemID,
      };
    case "ITEM_DETAIL_RECEIVED":
      return {
        ...state,
        loading: false,
        itemDetail: action.itemDetail.item,
      };
    case "MERCH_STORE_ENTERED":
      return {
        ...state,
        searchDisplay: !state.searchDisplay,
      };

    case "ADDING_ITEM_NAME":
      return {
        ...state,
        addedItemName: [...state.addedItemName, action.itemName],
      };
    case "SWITCH_CART":
      return {
        ...state,
        cartOpen: !state.cartOpen,
      };
    default:
      return state;
  }
};

export default rootReducer;
