import { useReducer, useState } from 'react';
import NewSet from '../logic-components/NewSet';


function reducer(state, action){
	switch (action.type){
		case "HIT":
			return{};
		case "STAY":
			return{}
		default:
			return state	
	}

}


function BlackJack() {
	return (
		<div>
			<NewSet />
		</div>
	);
}

export default BlackJack;
