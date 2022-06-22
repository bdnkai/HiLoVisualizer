import React from 'react';
import { useContext, useState } from 'react';
import { gameContext } from './context/gameContext';

function DealerHit() {
	console.log('dealer is read');
	const [currentCard, setCurrentCard] = useState();
	const { bJ, setBJ } = useContext(gameContext);
	const newSetURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/draw/?count=1`;

	const fetchSet = () => {
		fetch(newSetURL)
			.then((res) => res.json())
			.then((res) => {
				setCurrentCard(res.cards);
			});
	};
	fetchSet();
}

export default DealerHit;
