import { useContext, useReducer, useState } from 'react';
import { gameContext } from './context/gameContext';
import NewSet from '../logic-components/NewSet';
import DealerHit from './DealerHit';

function BlackJack() {
	const { bJ, setBJ } = useContext(gameContext);

	function handleClick1(event) {
		event.preventDefault();
		return setBJ({ ...bJ, dealerHit: true });
	}
	return (
		<div>
			<NewSet />
			<button type='button' onClick={handleClick1}>
				HIT
			</button>
			{bJ.dealerHit == true ? (
				<DealerHit />
			) : (
				console.log('its falsing from blackjack')
			)}
		</div>
	);
}

export default BlackJack;
