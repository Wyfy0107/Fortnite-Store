import { put, takeLatest, all } from "redux-saga/effects";

let myHeaders = new Headers();
myHeaders.append("Authorization", "61218dd7-53471561-47821838-69f229ed");

let requestOptions = {
  method: "GET",
  headers: myHeaders,
};

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
    yield put({ type: "REQUEST_FAILED", error });
  }
}

function* fetchChallengeListWatcher() {
  yield takeLatest("GET_CHALLENGE_LIST", fetchChallengeList);
}

export default function* rootSaga() {
  yield all([fetchChallengeListWatcher()]);
}
