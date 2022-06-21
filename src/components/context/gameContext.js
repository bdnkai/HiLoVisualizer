import { createContext } from 'react';
import { useDeck } from '../hooks/useDeck';

const game = [
	{
		deck: [],
		dealer: { cards: [{ code: '', image: '', value: '' }] },
		playerA: { cards: [{ code: '', image: '', value: '' }] },
	},
];

export const gameContext = createContext(game);
