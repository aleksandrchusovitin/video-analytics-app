import { put, takeLatest } from 'redux-saga/effects';
import { FETCH_EVENTS, setEvents } from './actions';

import { call } from 'redux-saga/effects';

function* fetchEventsSaga(): Generator<any, void, Response> {
  try {
    const response: Response = yield call(fetch, 'https://run.mocky.io/v3/d5dea963-2802-4856-9cab-378fdba1283d');
    const data = yield response.json();
    yield put(setEvents(data)); // Обновление состояния событий
  } catch (error) {
    console.error('Failed to fetch events', error);
  }
}
 


function* rootSaga() {
  yield takeLatest(FETCH_EVENTS, fetchEventsSaga);
}

export default rootSaga;
