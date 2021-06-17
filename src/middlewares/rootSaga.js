import { all, fork } from 'redux-saga/effects';
import { watchLoadingSet } from './loadingSaga';

export default function* rootSaga() {
  yield all([fork(watchLoadingSet)]);
}
