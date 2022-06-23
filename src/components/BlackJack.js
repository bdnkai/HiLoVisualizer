import { useContext, useState } from 'react';
import { gameContext } from './context/gameContext';
import NewSet from '../logic-components/NewSet';
import DealerHit from '../logic-components/dealer/DealerHit';

function BlackJack() {
	const { bJ, setBJ } = useContext(gameContext);
	const [hide, setHide] = useState();

	function handleStart(event) {
		setBJ({ ...bJ, start: true, updateNeeded: true, restart: true });
	}
	function handleDealerHit(event) {
		event.preventDefault();
		setBJ({ ...bJ, dealerHit: true });
		if (bJ.dealerHit == true) {
		}
	}
	return (
		<div>
			{/*------ START BUTTON ----- */}
			<button className='start' type='button' onClick={handleStart}>
				Start / DealHand
				{(bJ.start == true) & (bJ.updateNeeded == true) ? <NewSet /> : null}
			</button>
			{/*------------------------- */}
			{/*------ DEALER HIT ------- */}
			{/*------------------------- */}
			<button className='dealerHit' type='button' onClick={handleDealerHit}>
				HIT
			</button>
			{bJ.dealerHit == true ? <DealerHit /> : null}
		</div>
	);
}

export default BlackJack;
