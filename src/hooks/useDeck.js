import { useState, useEffect } from 'react';

function useDeck() {
	const [deck, setDeck] = useState('6zxbphufrmn6');

	const URL = `https://deckofcardsapi.com/api/deck/${deck}/`;

	const NEW_DECK_URL =
		'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

	const verifyDeck = () => {
		fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				if (res.success === true) {
					return setDeck(res.deck_id);
				} else if (res.success === false) {
					fetchDeck();
				}
			});
	};
	const fetchDeck = () => {
		fetch(NEW_DECK_URL)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				return setDeck(res.deck_id);
			})
			.catch((err) => {
				console.log('somethings wrong', err);
			});
	};

	useEffect(() => {
		verifyDeck();
	}, [fetchDeck]);
}

export default useDeck;
