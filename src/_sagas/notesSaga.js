import _ from 'lodash';
import {
  call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { notesConstants } from '../_constants';
import { notesService } from '../_services';

function* fetchNotes() {
  const success = payload => ({ type: notesConstants.FETCH_NOTES_SUCCESS, payload });
  const failure = payload => ({ type: notesConstants.FETCH_NOTES_FAILURE, payload });

  try {
    const res = yield call(notesService.fetchNotes);
    const normalizedData = _.mapKeys(res.data, 'id');
    yield put(success(normalizedData));
  } catch (e) {
    yield put(failure(e));
  }
}

function* createNotes(actions) {
  const success = payload => ({ type: notesConstants.CREATE_NOTE_SUCCESS, payload });
  const failure = payload => ({ type: notesConstants.CREATE_NOTE_FAILURE, payload });

  console.log('actions', actions);

  try {
    const res = yield call(notesService.createNote, actions.values);
    yield put(success(res.data));
  } catch (e) {
    yield put(failure(e));
  }
}

function* notesSaga() {
  yield takeEvery(notesConstants.FETCH_NOTES_REQUEST, fetchNotes);
  yield takeLatest(notesConstants.CREATE_NOTE_REQUEST, createNotes);
}

export default notesSaga;
