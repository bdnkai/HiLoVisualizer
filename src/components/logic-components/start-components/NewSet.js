import { useState, useEffect, useContext, useRef } from 'react';
import { gameContext } from '../../context/gameContext';
import DealerSet from '../start-components/DealerSet';
import PlayerSet from '../start-components/PlayerSet';

function NewSet() {
	const { bJ, setBJ } = useContext(gameContext);
	const [currentCard, setCurrentCard] = useState();
	const [dealerCode, setDealerCode] = useState();
	let isSetMounted = useRef(true);

	function fetchSet() {
		if (bJ.restart == true) {
			const newSetURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/draw/?count=4`;
			fetch(newSetURL)
				.then((res) => res.json())
				.then((res) => {
					setTimeout(() => {
						return setCurrentCard(res.cards);
					}, 200);
				});

			setBJ({ ...bJ, restart: false });
		}
	}

	const dealSet = () => {
		const dHand = `${[currentCard[0].code]},${[currentCard[2].code]}`;
		const pHand = `${[currentCard[1].code]},${[currentCard[3].code]}`;
		const dealerURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/add/?cards=${dHand}`;
		const playerURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/add/?cards=${pHand}`;
		fetch(dealerURL)
			.then((res) => res.json())
			.then((res) => {
				return fetch(playerURL);
			})
			.then((res) => res.json())
			.then((res) => {
				setTimeout(() => {
					return setDealerCode(res);
				}, 200);
			});
		setBJ({ ...bJ, updateNeeded: true });
	};

	useEffect(() => {
		if (isSetMounted) {
			fetchSet();
		}
		isSetMounted = false;
	}, []);

	useEffect(() => {
		{currentCard && dealSet();}
	}, [currentCard]);

	return (
		<div>
			{dealerCode && <DealerSet />}
			{bJ.dealer && <PlayerSet />}
		</div>
	);
}
export default NewSet;
