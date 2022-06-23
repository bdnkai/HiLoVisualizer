import { useContext, useState } from 'react';
import { gameContext } from './context/gameContext';
import NewSet from '../logic-components/NewSet';
import DealerHit from '../logic-components/dealer/DealerHit';
import PlayerHit from '../logic-components/player/PlayerHit';

function BlackJack() {
	const { bJ, setBJ } = useContext(gameContext);

	function handleStart(event) {
		setBJ({
			...bJ,
			start: true,
			dealerTurn: false,
			playerTurn: true,
			updateNeeded: true,
			restart: true,
		});
	}

	function handleDealerHit(event) {
		event.preventDefault();
		setBJ({ ...bJ, dealerHit: true });
		if (bJ.dealerHit == true) {
		}
	}

	function handlePlayerHit(event) {
		event.preventDefault();
		setBJ({ ...bJ, playerHit: true });
		if (bJ.playerHit == true) {
		}
	}

	function handleDealerStay(event) {
		event.preventDefault();
		setBJ({ ...bJ, dealerTurn: false, dealerStay: true });
	}

	function handlePlayerStay(event) {
		event.preventDefault();
		setBJ({ ...bJ, playerTurn: false, playerStay: true, dealerTurn: true });
	}
	return (
		<div>
			{/*------ START BUTTON ----- */}
			<button className='start' type='button' onClick={handleStart}>
				Start / DealHand
				{(bJ.start == true) & (bJ.updateNeeded == true) ? <NewSet /> : null}
			</button>
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
		</div>
	);
}

export default BlackJack;
