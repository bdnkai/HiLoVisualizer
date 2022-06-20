import { useState, useContext, useEffect, useRef } from 'react';
import { deckContext } from '../components/context/deckContext';
import { playerContext } from '../components/context/playerContext';
import Dealer from '../components/Dealer';
import PlayerA from '../components/PlayerA';

function PlayerContainer({ currentCard }) {
	const { deck, setDeck } = useContext(deckContext);
	const [dealer, setDealer] = useState('');
	const isMounted = useRef(false);

	const fetchHand = async () => {
		const dealerListURL = `https://deckofcardsapi.com/api/deck/${deck}/pile/dealer/list/`;
		const playerAListURL = `https://deckofcardsapi.com/api/deck/${deck}/pile/playerA/list/`;
		await fetch(dealerListURL)
			.then((res) => res.json())
			.then((res) => {
				setDealer(res.piles.dealer.cards);
				return fetch(playerAListURL);
			});
	};

	// console.log(playerA, dealer);

	useEffect(() => {
		fetchHand();
	}, [currentCard, deck]);

	return (
		<div>
			<playerContext.Provider value={{ dealer, setDealer }}>
				<Dealer />
			</playerContext.Provider>
		</div>
	);
}

export default PlayerContainer;
