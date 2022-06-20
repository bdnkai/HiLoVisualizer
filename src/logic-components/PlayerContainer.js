import { useState, useContext, useEffect, useRef } from 'react';
import { deckContext } from '../components/context/deckContext';
import { playerContext } from '../components/context/playerContext';
import Dealer from '../components/Dealer';
import PlayerA from '../components/PlayerA';

function PlayerContainer({ currentCard }) {
	const { deck, setDeck } = useContext(deckContext);
	const [dealer, setDealer] = useState('');
	const [playerA, setPlayerA] = useState('');
	const isMounted = useRef(false);

	const fetchHand = async () => {
		const dealerListURL = `https://deckofcardsapi.com/api/deck/${deck}/pile/dealer/list/`;
		const playerAListURL = `https://deckofcardsapi.com/api/deck/${deck}/pile/playerA/list/`;
		await fetch(dealerListURL)
			.then((res) => res.json())
			.then((res) => {
				setDealer(res.piles.dealer.cards);
				return fetch(playerAListURL);
			})
			.then((res) => res.json())
			.then((res) => {
				setPlayerA(res.piles.playerA.cards);
			});
	};
	console.log(playerA, dealer);

	const cardMap = () => {
		{
			setDealer(
				dealer.map((element, index) => {
					(key = { index }), (card = { element });
				})
			);
		}
	};

	useEffect(() => {
		fetchHand();
	}, [currentCard]);

	useEffect(() => {
		cardMap();
	}, [dealer, playerA]);

	return (
		<div>
			<playerContext.Provider
				value={{ dealer, setDealer, playerA, setPlayerA }}>
				<Dealer />
				<PlayerA />
			</playerContext.Provider>
		</div>
	);
}

export default PlayerContainer;
