import { useState, useContext, useEffect, useReducer } from 'react';
import { gameContext } from '../components/context/gameContext';

function playerReducer(playerCount, action) {
	switch (action.type) {
		case 'INCREMENT':
			return playerCount + 1;
		case 'DECREMENT':
			return playerCount - 1;
		default:
			return 0 + playerCount - playerCount;
	}
}
function dealerReducer(dealerCount, action) {
	switch (action.type) {
		case 'INCREMENT':
			return dealerCount + 1;
		case 'DECREMENT':
			return dealerCount - 1;
		default:
			return 0 + dealerCount - dealerCount;
	}
}
function HiLoCounter() {
	const { bJ, setBJ } = useContext(gameContext);
	const [playerCount, dispatchPlayerCount] = useReducer(playerReducer, 0);
	const [dealerCount, dispatchDealerCount] = useReducer(dealerReducer, 0);
	const [total, setTotal] = useState();
	const [pHandValue, setPHandValue] = useState(0);
	const [dHandValue, setDHandValue] = useState(0);

	function hiLoCount() {
		if (bJ.playerA) {
			// bJ.playerA.filter((element) => console.log(element != element));
			// console.log(test);
			bJ.playerA.map((pCard, index) => {
				const test = bJ.playerA.filter((element) => element.code == pCard.code);
				// console.log(pCard.filter((element) => element == element));
				if (pCard.value <= 6 && pCard.code != test) {
					dispatchPlayerCount({ type: 'INCREMENT' });
				}
				if (
					((pCard.value >= 10) & (pCard.code != test)) |
					((pCard.value == 'JACK') & (pCard.code != test)) |
					((pCard.value == 'QUEEN') & (pCard.code != test)) |
					((pCard.value == 'KING') & (pCard.code != test)) |
					((pCard.value == 'ACE') & (pCard.code != test))
				) {
					dispatchPlayerCount('DECREMENT');
				} else {
				}
			});
		}
		if (bJ.dealer) {
			bJ.dealer.map((dCard, index) => {
				const test = bJ.playerA.filter((element) => element.code == dCard.code);
				if (dCard.value <= 6 && dCard.code != test) {
					dispatchDealerCount({ type: 'INCREMENT' });
				}
				if (
					((dCard.value >= 10) & (dCard.code != test)) |
					((dCard.value == 'JACK') & (dCard.code != test)) |
					((dCard.value == 'QUEEN') & (dCard.code != test)) |
					((dCard.value == 'KING') & (dCard.code != test)) |
					((dCard.value == 'ACE') & (dCard.code != test))
				) {
					dispatchDealerCount({ type: 'DECREMENT' });
				}
			});
		}
	}
	useEffect(() => {
		{
			bJ.playerA && hiLoCount();
		}
	}, [bJ]);

	return (
		<>
			<div></div>
			<div>
				<h3>Player</h3>
				<p>Hi-Lo Value: {playerCount}</p>
				<div>
					{bJ.playerA &&
						bJ.playerA.map((pCard, index) => {
							return (
								<div className='PlayerCards'>
									<ul>
										<li key={pCard.code}>
											{pCard.value}
											{pCard.suit}
										</li>
										<img src={pCard.image} alt='' id='CardImage' />
									</ul>
								</div>
							);
						})}
				</div>
			</div>
			<div>
				<h3>Dealer:</h3>
				<p>Hi-Lo Value: {dealerCount}</p>
				{bJ.dealer &&
					bJ.dealer.map((dCard, index) => {
						return (
							<div className='DealerCards'>
								<ul>
									<li key={dCard.code}>
										{dCard.value}
										{dCard.suit}
									</li>
									<img src={dCard.image} alt='' id='CardImage' />
								</ul>
							</div>
						);
					})}
			</div>
		</>
	);
}

export default HiLoCounter;
