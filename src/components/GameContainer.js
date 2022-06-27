import { useState, useEffect, useMemo, useContext } from 'react';
import { useDeck } from './hooks/useDeck';
import { gameContext } from './context/gameContext';
import BlackJack from './BlackJack';


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
		if (deck.loading === true) {
			console.log('loading');
		} else {
			setTimeout(() => {
				setBJ({ ...bJ, deck: deck.deckID });
			}, 200);
		}
	}, [deck]);

	return (
		<div className='GameContainer'>
			<gameContext.Provider value={gameUpdate}>
				{<BlackJack />}
			</gameContext.Provider>
		</div>
	);
}

export default GameContainer;
