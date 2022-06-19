import { useState, useEffect } from 'react';

function useCardDraw(deckID) {
	const URL =
		`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`;
	console.log(URL);

	const fetchCard = () => {
		fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			});
	};

	useEffect(() => {
		fetchCard();
	}, []);
}

export default useCardDraw;
