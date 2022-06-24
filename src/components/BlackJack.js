import { useContext, useEffect, useState } from 'react';
import { gameContext } from './context/gameContext';
import { useHandle } from './hooks/useHandle';
import NewSet from '../logic-components/NewSet';
import DealerHit from '../logic-components/dealer/DealerHit';
import PlayerHit from '../logic-components/player/PlayerHit';
import HiLoCounter from '../logic-components/HiLoCounter';

function BlackJack() {
	const { bJ, setBJ } = useContext(gameContext);
	const {
		handleStart,
		handleDealerHit,
		handlePlayerHit,
		handlePlayerStay,
		handleDealerStay,
	} = useHandle();

	// const dealerMap = () => {
	// 	if (bJ.dealer && bJ.start) {
	// 		// setTimeout(() => {
	// 		const dHand = bJ.dealer.map((dCard) => {
	// 			// console.log(dCard);
	// 			dCard = dCard ;
	// 			// (<HiLoCounter dCard={dCard} />);
	// 			// return setDealerHILO(</>dCard);
	// 			// }, 300);
	// 			setDealerHILO(dCard);
	// 			console.log(dealerHILO);
	// 		});
	// 		// return { dCard };
	// 	} else return;
	// };

	// const playerMap = () => {
	// 	if (bJ.playerA) {
	// 		setTimeout(() => {
	// 			bJ.playerA.map((pCard) => {
	// 				return setPlayerHILO(pCard);
	// 			}, 300);
	// 		});
	// 	} else return;
	// };
	// useEffect(() => {
	// 	{
	// 		bJ.playerA && playerMap();
	// 	}
	// }, [bJ.playerA]);

	// useEffect(() => {
	// 	{
	// 		bJ.dealer && dealerMap();
	// 	}
	// }, [bJ.dealer]);

	return (
		<>
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
						<button
							className='dealerHit'
							type='button'
							onClick={handleDealerHit}>
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
						<button
							className='playerHit'
							type='button'
							onClick={handlePlayerHit}>
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
			{/* <div>{dCard}</div> */}
			<div>{<HiLoCounter />}</div>
		</>
	);
}

export default BlackJack;
