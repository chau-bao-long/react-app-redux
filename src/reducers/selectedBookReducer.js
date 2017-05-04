import { SELECTED_BOOK } from './../constants/actionTypes';

export default function(state=null, action) {
  switch(action.type) {
    case SELECTED_BOOK:
      return action.book;
    default:
      return state;
  }
}