import { useState, useEffect } from 'react';
import { deckContext } from '../components/context/deckContext';
import BlackJack from '../components/BlackJack';

function GameContainer() {
	const [deck, setDeck] = useState('');

	const URL = `https://deckofcardsapi.com/api/deck/6zxbphufrmn6/`;

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
	}, []);
	return (
		<div>
			<deckContext.Provider value={{ deck, setDeck }}>
				<BlackJack />
			</deckContext.Provider>
		</div>
	);
}

export default GameContainer;
