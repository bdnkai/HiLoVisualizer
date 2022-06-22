import { useState, useEffect, useMemo, useContext } from 'react';
import { useDeck } from '../components/hooks/useDeck';
import { gameContext } from '../components/context/gameContext';
import BlackJack from '../components/BlackJack';

const game = {
	deck: null,
	start: false,
	restart: false,
	dealer: null,
	dealerTurn: false,
	dealerHit: false,
	dealerStay: false,
	playerA: null,
	playerTurn: false,
	playerHit: false,
	playerStay: false,
	updateNeeded: false,
};

function GameContainer() {
	const [bJ, setBJ] = useState(game);
	const { deck, setDeck } = useDeck();
	const gameUpdate = useMemo(() => ({ bJ: bJ, setBJ: setBJ }), [bJ, setBJ]);

	useEffect(() => {
		if ([deck][0].loading === true) {
			console.log('loading');
			setTimeout(1000);
		} else if ([deck][0].loading === false) {
			setBJ({ ...bJ, deck: [deck][0].deckID });
		}
	}, [deck]);

	return (
		<div>
			<gameContext.Provider value={gameUpdate}>
				<BlackJack />
			</gameContext.Provider>
		</div>
	);
}

export default GameContainer;
