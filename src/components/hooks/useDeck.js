import { useState, useEffect } from 'react';

export const useDeck = () => {
	const [deck, setDeck] = useState({ deckID: '', loading: true });

	const URL = `https://deckofcardsapi.com/api/deck/6zxbphufrmn6/`;
	const NEW_DECK_URL =
		'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

	const verifyDeck = () => {
		fetch(URL)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				if (res.success === true) {
					return setDeck({ ...deck, deckID: res.deck_id, loading: false });
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
				return setDeck({ ...deck, deckID: res.deck_id, loading: false });
			})
			.catch((err) => {
				console.log('somethings wrong', err);
			});
	};

	useEffect(() => {
		verifyDeck();
	}, [URL]);

	return { deck };
};
