import { useContext, useEffect, useRef } from 'react';
import { gameContext } from '../../context/gameContext';

function PlayerRendersHit() {
	const { bJ, setBJ } = useContext(gameContext);
	const playerListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/list/`;
	let isMounted = useRef(true);

	const fetchHand = () => {
		fetch(playerListURL)
			.then((res) => res.json())
			.then((res) => {
		
				setTimeout(() => {
					return setBJ({
						...bJ,
						playerA: res.piles.playerA.cards,
						playerHit: false,
					});
				}, 50);
			});
	};

	useEffect(() => {
		if (isMounted) {
			if (bJ.playerHit == true) {
				fetchHand();
			}
			return setBJ({ ...bJ, playerHit: false });
		}
		isMounted = false;
	}, [playerListURL]);
}

export default PlayerRendersHit;
