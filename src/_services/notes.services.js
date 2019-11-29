import axios from 'axios';
import settings from '../settings';

import { authData } from '../utils';

const authObj = authData();

axios.defaults.baseURL = settings.api_v1;
axios.defaults.headers.common['access-token'] = authObj.accessToken;
axios.defaults.headers.common.client = authObj.client;
axios.defaults.headers.common.expiry = authObj.expiry;
axios.defaults.headers.common.uid = authObj.uid;

console.log('authData', authObj);

const fetchNotes = () => (
  axios.get('/notes/')
);

const createNote = ({
  title,
  text,
  archived,
  dueDate,
}) => (
  axios.post('/notes/', {
    title,
    text,
    archived,
    dueDate,
  })
);

const updateNote = ({
  id,
  title,
  text,
  archived,
  dueDate,
}) => (
  axios.patch(`/notes/${id}`, {
    title,
    text,
    archived,
    dueDate,
  })
);

const deleteNote = id => (
  axios.delete(`/notes/${id}`, {
    id,
  })
);

export default {
  fetchNotes,
  createNote,
  updateNote,
  deleteNote,
};
