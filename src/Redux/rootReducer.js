const initialState = {
  challengeList: null,
  dailyShop: null,
  upComingItems: null,
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
    default:
      return state;
  }
};

export default rootReducer;
