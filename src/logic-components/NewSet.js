import { useState, useEffect, useContext, useRef } from 'react';
import { deckContext } from '../components/context/deckContext';

function NewSet() {
	const [currentCard, setCurrentCard] = useState([]);
	const { deck, setDeck } = useContext(deckContext);
	const isMounted = useRef(false);
	const newSetURL = `https://deckofcardsapi.com/api/deck/${deck}/draw/?count=4`;

	const handleClick = (event) => {
		fetch(newSetURL)
			.then((res) => res.json())
			.then((res) => {
				setCurrentCard(res.cards);
			});
	};

	useEffect(
		(event) => {
			if (isMounted.current) {
				handleClick();
			}
		},
		[handleClick]
	);

	return (
		<>
			<button onClick={handleClick}>New Card</button>
		</>
	);
}
export default NewSet;
