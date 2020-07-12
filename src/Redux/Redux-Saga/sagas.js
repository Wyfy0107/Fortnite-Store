import { put, takeLatest, all } from "redux-saga/effects";
import requestOptions from "./FetchConfig";

//Fetch funtions
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

export default function* rootSaga() {
  yield all([
    fetchChallengeListWatcher(),
    fetchDailyShopWatcher(),
    fetchTournamentsWatcher(),
  ]);
}
