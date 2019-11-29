import { notesConstants } from '../_constants';

const initialState = {
  isFetchingNotes: false,
  isFetchingCreate: false,
  data: null,
  errorNotes: null,
  errorCreate: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case notesConstants.FETCH_NOTES_REQUEST:
      return {
        ...state,
        isFetchingNotes: true,
        errorNotes: null,
      };
    case notesConstants.FETCH_NOTES_SUCCESS:
      return {
        ...state,
        isFetchingNotes: false,
        data: action.payload,
        errorNotes: null,
      };
    case notesConstants.FETCH_NOTES_FAILURE:
      return {
        ...state,
        isFetchingNotes: false,
        errorNotes: action.payload,
      };
    case notesConstants.CREATE_NOTE_REQUEST:
      return {
        ...state,
        isFetchingCreate: true,
        errorCreate: null,
      };
    case notesConstants.CREATE_NOTE_SUCCESS:
      return {
        ...state,
        isFetchingCreate: false,
        data: {
          ...state.data,
          [action.payload.id]: action.payload,
        },
        errorCreate: null,
      };
    case notesConstants.CREATE_NOTE_FAILURE:
      return {
        ...state,
        isFetchingCreate: false,
        errorCreate: action.payload,
      };
    default:
      return state;
  }
}
