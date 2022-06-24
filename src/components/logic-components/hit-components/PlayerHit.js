import { useContext, useState, useEffect, useRef } from 'react';
import { gameContext } from '../../context/gameContext';
import PlayerRendersHit from '../render-hit-components/PlayerRendersHit';

function PlayerHit() {
	const { bJ, setBJ } = useContext(gameContext);
	const [playerHit, setPlayerHit] = useState();
	const [playerCode, setPlayerCode] = useState();
	let isMounted = useRef(true);

	const fetchCard = () => {
		const newCardURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/draw/?count=1`;

		fetch(newCardURL)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				
				setTimeout(() => {
					setPlayerHit(res.cards);
				}, 300);
			});
	};
	const dealCard = () => {
		const pHand = `${[playerHit[0].code]}`;
		const playerURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/add/?cards=${pHand}`;
		fetch(playerURL)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setTimeout(() => {
					setPlayerCode('success');
					
				}, 300);
			});
	};

	useEffect(() => {
		if (isMounted) {
			setTimeout(() => {
				fetchCard();
			}, 300);
		}
		isMounted = false;
	}, []);

	useEffect(() => {
		{
			playerHit && dealCard();
		}
	}, [fetchCard]);

	return <div>{playerCode && <PlayerRendersHit />}</div>;
}

export default PlayerHit;
