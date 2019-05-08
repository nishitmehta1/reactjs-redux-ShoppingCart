import { PROMO_CODE } from '../actions/types';

const initialState = {
	open:false,
	values :''
};

export default function(state = initialState, action){
	switch(action.type){
		case PROMO_CODE:
			console.log(action.payload)
			return{
				...state,
				values: action.payload
			};
		default:
			return state;
	}
}