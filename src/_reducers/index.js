import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth.reducer';
import notesReducer from './notes.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReducer,
  form: formReducer,
});

export default rootReducer;
