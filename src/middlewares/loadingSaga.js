import { takeEvery, put, delay } from 'redux-saga/effects';

function* setLoadingNew() {
  yield delay(2000);
  yield put({ type: 'LOADING_NEW', payload: false });
}

export function* watchLoadingSet() {
  yield takeEvery('LOADING', setLoadingNew);
}
