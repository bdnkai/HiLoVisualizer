import { useState, useContext, useEffect, useReducer } from 'react';
import { gameContext } from '../context/gameContext';

function playerReducer(playerCount, action) {
	switch (action.type) {
		case 'INCREMENT':
			return playerCount + 1;
		case 'DECREMENT':
			return playerCount - 1;
		default:
			return playerCount ;
	}
}
function dealerReducer(dealerCount, action) {
	switch (action.type) {
		case 'INCREMENT':
			return dealerCount + 1;
		case 'DECREMENT':
			return dealerCount - 1;
		default:
			return dealerCount;
	}
}
function HiLoCounter() {
	const { bJ, setBJ } = useContext(gameContext);
	const [playerCount, dispatchPlayerCount] = useReducer(playerReducer, 0);
	const [dealerCount, dispatchDealerCount] = useReducer(dealerReducer, 0);
	const [total, setTotal] = useState();


	function hiLoCount() {
		if (bJ.playerA) {
			bJ.playerA.map((pCard, index) => {
				const test = bJ.playerA.filter((element) => element.code == pCard.code);

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
		return dispatchDealerCount(0)
	}, [bJ]);

	return (
		<body>
			<div className='HiLo'>
				<div className='PlayerValues'>
					<p>HI-LO: {playerCount}</p>
					<div>
						{bJ.playerA &&
							bJ.playerA.map((pCard, index) => {
								return (
									<div className='PlayerCards'>
										<ul>
											<li key={pCard.code}></li>
											<img src={pCard.image} alt='' id='CardImagePlayer' />
										</ul>
									</div>
								);
							})}
					</div>
				</div>
				<div className='DealerValues'>
					<h3>Dealer</h3>
					<p>Hi-Lo Value: {dealerCount}</p>
					{bJ.dealer &&
						bJ.dealer.map((dCard, index) => {
							return (
								<div className='DealerCards'>
									<ul>
										<li key={dCard.code}></li>
										<img src={dCard.image} alt='' id='CardImageDealer' />
									</ul>
								</div>
							);
						})}
				</div>
			</div>
		</body>
	);
}

export default HiLoCounter;
