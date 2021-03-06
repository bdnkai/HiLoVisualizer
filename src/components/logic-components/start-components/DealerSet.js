import { useContext, useEffect, useRef } from 'react';
import { gameContext } from '../../context/gameContext';

function DealerSet() {
	const { bJ, setBJ } = useContext(gameContext);
	const dealerListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/list/`;
	let isMounted = useRef(true);

	const fetchHand = () => {
		if (bJ.updateNeeded === true) {
			fetch(dealerListURL)
				.then((res) => res.json())
				.then((res) => {
					return setBJ({ ...bJ, dealer: res.piles.dealer.cards });
				});
		}
	};

	useEffect(() => {
		if (isMounted) {
			setTimeout(() => {
				if (bJ.updateNeeded === true) {
					fetchHand();
				}
			}, 100);
			return setBJ({ ...bJ, updateNeeded: false });
		}
		isMounted = false;
	}, [dealerListURL]);

	return <></>;
}

export default DealerSet;
