import { useState, useEffect, useContext, useRef } from 'react';
import { gameContext } from '../components/context/gameContext';
import Dealer from './dealer/DealerSet';
import PlayerA from './player/PlayerSet';

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
						console.log(res.cards);
						return setCurrentCard(res.cards);
					}, 1000);
				});

			setBJ({ ...bJ, restart: false });
		}
	}

	const dealSet = () => {
		const dHand = `${[currentCard[0].code]},${[currentCard[2].code]}`;
		const pHand = `${[currentCard[1].code]},${[currentCard[3].code]}`;
		const dealerURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/add/?cards=${dHand}`;
		const playerURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/add/?cards=${pHand}`;
		console.log(dealerURL);
		fetch(dealerURL)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
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
		{
			currentCard && dealSet();
		}
	}, [currentCard]);

	return (
		<div>
			{dealerCode && <Dealer />}
			{bJ.dealer && <PlayerA />}
		</div>
	);
}
export default NewSet;
