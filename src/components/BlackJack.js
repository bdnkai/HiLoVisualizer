import '../css/blackjack.css';
import { useContext, useState } from 'react';
import { gameContext } from './context/gameContext';
import { useHandle } from './hooks/useHandle';
import NewSet from './logic-components/start-components/NewSet';
import DealerHit from './logic-components/hit-components/DealerHit';
import PlayerHit from './logic-components/hit-components/PlayerHit';
import HiLoCounter from './logic-components/HiLoCounter';
import Spline from '@splinetool/react-spline';

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
			<div className='BlackJack'>
				{/*------ START BUTTON ----- */}
				{bJ.start == false ? (
					<div>
						<h1 className='title'>BlackJack</h1>
						<button className='start' type='button' onClick={handleStart}>
							Start
						</button>
					</div>
				) : null}
				{(bJ.start == true) & (bJ.updateNeeded == true) ? <NewSet /> : null}
				{/*------------------------- */}
				{/*------ DEALER HIT / Stay ------- */}
				{bJ.dealerTurn == true ? (
					<div>
						<div className='Dealer'>
							<h2>Dealers Turn</h2>
						</div>
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
					</div>
				) : null}
				{bJ.dealerHit == true ? <DealerHit /> : null}
				{/*------------------------- */}
				{/*----------Player Hit / Stay ---------- */}
				{bJ.playerTurn == true ? (
					<div>
						<div>
							<h2>Players</h2>
						</div>
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
					</div>
				) : null}
				{bJ.playerHit == true ? <PlayerHit /> : null}
			</div>
			<div>{<HiLoCounter />}</div>
			<Spline scene='https://prod.spline.design/IDA7NSXVaPnjctJc/scene.splinecode' />
		</div>
	);
}

export default BlackJack;
