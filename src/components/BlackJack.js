import { useContext, useState } from 'react';
import { gameContext } from './context/gameContext';
import { useHandle } from './hooks/useHandle';
import NewSet from '../logic-components/NewSet';
import DealerHit from '../logic-components/dealer/DealerHit';
import PlayerHit from '../logic-components/player/PlayerHit';

function BlackJack() {
	const { bJ, setBJ } = useContext(gameContext);
	const {
		handleStart,
		handleDealerHit,
		handlePlayerHit,
		handlePlayerStay,
		handleDealerStay,
	} = useHandle();

	return (
		<div>
			{/*------ START BUTTON ----- */}
			{bJ.start == false ? (
				<button className='start' type='button' onClick={handleStart}>
					Start / DealHand
				</button>
			) : null}
			{(bJ.start == true) & (bJ.updateNeeded == true) ? <NewSet /> : null}
			{/*------------------------- */}
			{/*------ DEALER HIT / Stay ------- */}
			{bJ.dealerTurn == true ? (
				<div className='DealerButton'>
					<button className='dealerHit' type='button' onClick={handleDealerHit}>
						HIT
					</button>
					<button
						className='dealerStay'
						type='button'
						onClick={handleDealerStay}>
						STAY
					</button>
				</div>
			) : null}
			{bJ.dealerHit == true ? <DealerHit /> : null}
			{/*------------------------- */}
			{/*----------Player Hit / Stay ---------- */}
			{bJ.playerTurn == true ? (
				<div className='PlayerButton'>
					<button className='playerHit' type='button' onClick={handlePlayerHit}>
						HIT
					</button>
					<button
						className='playerStay'
						type='button'
						onClick={handlePlayerStay}>
						STAY
					</button>
				</div>
			) : null}
			{bJ.playerHit == true ? <PlayerHit /> : null}
			FROM BLACKJACK
		</div>
	);
}

export default BlackJack;
