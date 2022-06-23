import { useContext, useEffect, useRef } from 'react';
import { gameContext } from '../../components/context/gameContext';

function PlayerA() {
	const { bJ, setBJ } = useContext(gameContext);
	const playerAListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/list/`;

	let isMounted = useRef(true);

	function fetchHand() {
		fetch(playerAListURL)
			.then((res) => res.json())
			.then((res) => {
				setTimeout(() => {
					return setBJ({
						...bJ,
						playerA: res.piles.playerA.cards,
						updateNeeded: false,
					});
				}, 300);
			});
	}
	useEffect(() => {
		if (isMounted) {
			setTimeout(() => {
				if (bJ.updateNeeded === true) {
					fetchHand();
				}
			}, 700);
		}
		isMounted = false;
	});

	return <div></div>;
}

export default PlayerA;
