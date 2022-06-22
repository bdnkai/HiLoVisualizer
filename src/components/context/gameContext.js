import { createContext } from 'react';
import { useDeck } from '../hooks/useDeck';

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
};

export const gameContext = createContext(game);
