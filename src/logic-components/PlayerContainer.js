import { useState, useContext, useEffect, useRef } from 'react';
import { deckContext } from '../components/context/deckContext';
import { playerContext } from '../components/context/playerContext';
import Dealer from '../components/Dealer';
import PlayerA from '../components/PlayerA';

function PlayerContainer() {
	const [dealer, setDealer] = useState();
	const [playerA, setPlayerA] = useState();
	const { deck, setDeck } = useContext(deckContext);
	const isMounted = useRef(false);

	const dealerListURL = `https://deckofcardsapi.com/api/deck/${deck}/pile/dealer/list`;
	console.log(dealerListURL);
	const playerAListURL = `https://deckofcardsapi.com/api/deck/${deck}/pile/playerA/list/`;

	const fetchHand = () => {
		fetch(dealerListURL)
			.then((res) => {
				console.log(res.json);
				res.json();
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log('somethings wrong in fetchHands', err));
	};

	useEffect(() => {
		if (isMounted.current) {
			fetchHand();
		}
	}, [fetchHand]);

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
