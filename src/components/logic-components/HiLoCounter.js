import { useState, useContext, useEffect, useReducer } from 'react';
import { gameContext } from '../context/gameContext';

function HiLoCounter() {
	const { bJ, setBJ } = useContext(gameContext);
	let [playerCount, setPlayerCount] = useState([0]);
	let [dealerCount, setDealerCount] = useState(0);

	function hiLoCount() {
		if (bJ.playerA) {
			bJ.playerA.filter((pCard, index) => {
				if (pCard.value <= 6) {
					setPlayerCount(playerCount + 1);
				}
				if (
					pCard.value >= 10 ||
					pCard.value == 'JACK' ||
					pCard.value == 'QUEEN' ||
					pCard.value == 'KING' ||
					pCard.value == 'ACE'
				) {
					setPlayerCount(playerCount - 1);
				} else if (pCard.value > 7) {
					setPlayerCount(playerCount + 0);
				}
			});
		}
		if (bJ.dealer) {
			bJ.dealer.filter((dCard, index) => {
				if (dCard.value <= 6) {
					setDealerCount(dealerCount + 1);
				}
				if (
					dCard.value >= 10 ||
					dCard.value == 'JACK' ||
					dCard.value == 'QUEEN' ||
					dCard.value == 'KING' ||
					dCard.value == 'ACE'
				) {
					setDealerCount(dealerCount - 1);
				} else if (dCard.value > 7) {
					setDealerCount(dealerCount + 0);
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
		<body>
			<div className='DealerValues'>
				<div>Dealer</div>
					{bJ.dealer &&
						bJ.dealer.map((dCard, index) => {
							return (
								<div className='DealerCards'>
									<div>
										<div key={dCard.code}></div>
										<img src={dCard.image} alt='' id='CardImageDealer' />
									</div>
								</div>
							);
						})}
				</div>
			<div className='PlayerValues'>
				<div>
					<div>Player</div>
					{bJ.playerA &&
						bJ.playerA.map((pCard, index) => {
							return (
								<div className='PlayerCards'>
									<div>
										<div key={pCard.code}></div>
										<img src={pCard.image} alt='' id='CardImagePlayer' />
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</body>
	);
}

export default HiLoCounter;
