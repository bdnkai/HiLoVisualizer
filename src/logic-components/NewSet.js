import { useState, useEffect, useContext, useRef } from 'react';
import { gameContext } from '../components/context/gameContext';
import { useFetch } from '../components/hooks/useFetch';
import PlayerContainer from './PlayerContainer';

function NewSet() {
	const { bJ, setBJ } = useContext(gameContext);
	const [currentCard, setCurrentCard] = useState();
	const isMounted = useRef(false);

	const handleClick = (event) => {
		const newSetURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/draw/?count=4`;
		const fetchSet = () => {
			fetch(newSetURL)
				.then((res) => res.json())
				.then((res) => {
					setCurrentCard(res.cards);
				});
		};
		fetchSet();
	};
	const dealSet = () => {
		if (currentCard === undefined) {
			return;
		} else {
			const dHand = `${[currentCard[0].code]},${[currentCard[2].code]}`;
			const pHand = `${[currentCard[1].code]},${[currentCard[3].code]}`;
			const dealerURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/add/?cards=${dHand}`;
			const playerURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/add/?cards=${pHand}`;
			console.log(dealerURL);
			fetch(dealerURL)
				.then((res) => res.json())
				.then((dealer) => {
					console.log(dealer);
					return fetch(playerURL);
				})
				.then((res) => res.json())
				.then((player) => console.log(player));
		}
	};

	useEffect(
		(event) => {
			if (isMounted.current) {
				handleClick();
			}
		},
		[handleClick, dealSet]
	);

	useEffect(() => {
		if (isMounted.current) {
		}
		dealSet();
	}, [currentCard]);

	return (
		<div className='button' id='Start-Button'>
			<button type='button' onClick={handleClick}>
				Start / DealHand
			</button>
			<PlayerContainer />
		</div>
	);
}
export default NewSet;
