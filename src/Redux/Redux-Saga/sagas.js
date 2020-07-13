import { put, takeLatest, all, select } from "redux-saga/effects";
import requestOptions from "./FetchConfig";

//Selector function for item ID
const getItemID = (state) => state.itemID;

//Fetch functions
function* fetchChallengeList() {
  try {
    const challengeList = yield fetch(
      "https://fortniteapi.io/challenges?season=current&lang=en",
      requestOptions
    ).then((response) => response.json());
    yield put({
      type: "CHALLENGE_LIST_RECEIVED",
      challengeList: challengeList,
    });
  } catch (error) {
    yield put({ type: "FETCH_CHALLENGE_LIST_FAILED", error });
  }
}

function* fetchDailyShop() {
  try {
    const dailyShop = yield fetch(
      "https://fortniteapi.io/shop?lang=en",
      requestOptions
    ).then((response) => response.json());
    yield put({ type: "DAILY_SHOP_RECEIVED", dailyShop: dailyShop });
  } catch (error) {
    yield put({ type: "FETCH_DAILY_SHOP_FAILD", error });
  }
}

function* fetchTournaments() {
  try {
    const tournaments = yield fetch(
      "https://fortniteapi.io/events/list?lang=en&region=NAE",
      requestOptions
    ).then((response) => response.json());
    yield put({ type: "TOURNAMENTS_RECEIVED", tournaments: tournaments });
  } catch (error) {
    yield put({ type: "FETCH_TOURNAMENTS_FAILED", error });
  }
}

function* fetchItemsList() {
  try {
    const itemsList = yield fetch(
      "https://fortniteapi.io/items/list?lang=en",
      requestOptions
    ).then((response) => response.json());
    yield put({ type: "ITEMS_LIST_RECEIVED", itemsList: itemsList });
  } catch (error) {
    yield put({ type: "FETCH_ITEMS_LIST_FAILED", error });
  }
}

function* fetchItemDetail() {
  try {
    const itemID = yield select(getItemID);
    const itemDetail = yield fetch(
      `https://fortniteapi.io/items/get?lang=en&id=${itemID}`,
      requestOptions
    ).then((response) => response.json());
    yield put({ type: "ITEM_DETAIL_RECEIVED", itemDetail: itemDetail });
  } catch (error) {
    yield put({ type: "FETCH_ITEM_DETAIL_FAILED" });
  }
}

//Watcher function
function* fetchChallengeListWatcher() {
  yield takeLatest("GET_CHALLENGE_LIST", fetchChallengeList);
}

function* fetchDailyShopWatcher() {
  yield takeLatest("GET_DAILY_SHOP", fetchDailyShop);
}

function* fetchTournamentsWatcher() {
  yield takeLatest("GET_TOURNAMENTS", fetchTournaments);
}

function* fetchItemsListWatcher() {
  yield takeLatest("GET_ITEMS_LIST", fetchItemsList);
}

function* fetchItemDetailWatcher() {
  yield takeLatest("GET_ITEM_DETAIL", fetchItemDetail);
}

export default function* rootSaga() {
  yield all([
    fetchChallengeListWatcher(),
    fetchDailyShopWatcher(),
    fetchTournamentsWatcher(),
    fetchItemsListWatcher(),
    fetchItemDetailWatcher(),
  ]);
}
