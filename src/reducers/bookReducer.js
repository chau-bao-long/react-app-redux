import { LOAD_BOOKLIST } from './../constants/actionTypes';

var listBook=[
{title: 'JavaScript: Good part'},
{title: 'Hary porter'},
{title: 'Hary porter 2'},
{title: 'anothers'}
];

export default function(state=[], action) {
  switch(action.type) {
    case LOAD_BOOKLIST:
      return listBook;
    default:
      return state;
  }
}