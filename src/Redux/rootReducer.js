const initialState = {
  challengeList: null,
  dailyShop: null,
  tournaments: null,
  itemsList: null,
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
    default:
      return state;
  }
};

export default rootReducer;
