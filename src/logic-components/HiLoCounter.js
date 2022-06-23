import { useState, useContext, useEffect, useReducer } from 'react';
import { gameContext } from '../components/context/gameContext';
import { useHiLo } from '../components/hooks/useHiLo';


function HiLoCounter() {
	const { bJ, setBJ } = useContext(gameContext);
	const { hiLoReducer } = useHiLo();
	const [count, dispatch] = useReducer({ hiLoReducer }, 0);
	console.log({pCard});
	// console.log(bJ.dealer);
	// return (
	// 	<div>
	// 		<h1>{test}</h1>
	// 	</div>
	// );
	// {
	// 	bJ.dealer.map((item, index) => {
	// 		return <h1>{(index, item)}</h1>;
	// 	});
	// }
}

export default HiLoCounter;
