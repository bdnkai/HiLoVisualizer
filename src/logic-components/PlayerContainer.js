import { useState, useContext } from 'react';
import { deckContext } from '../components/context/deckContext';
import { playerContext } from '../components/context/playerContext';
import Dealer from '../components/Dealer';
import PlayerA from '../components/PlayerA';

function PlayerContainer() {
	const [dealer, setDealer] = useState();
	const [playerA, setPlayerA] = useState();

	const { deck, setDeck } = useContext(deckContext);

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
