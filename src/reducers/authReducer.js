import { CHANGE_AUTH } from './../constants/actionTypes';

export default function(state=false, action) {
	switch (action.type) {
		case CHANGE_AUTH:
   return action.payload;
 }

 return state;
}