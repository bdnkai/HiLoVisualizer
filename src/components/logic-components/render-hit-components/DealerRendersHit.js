import { useContext, useEffect, useRef } from 'react';
import { gameContext } from '../../context/gameContext';

function DealerRendersHit() {
	const { bJ, setBJ } = useContext(gameContext);
	const dealerListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/list/`;
	let isMounted = useRef(true);

	const fetchHand = () => {
		fetch(dealerListURL)
			.then((res) => res.json())
			.then((res) => {
				
				setTimeout(() => {
					return setBJ({
						...bJ,
						dealer: res.piles.dealer.cards,
						dealerHit: false,
					});
				}, 300);
			});
	};

	useEffect(() => {
		if (isMounted) {
			if (bJ.dealerHit == true) {
				fetchHand();
			}
			return setBJ({ ...bJ, dealerHit: false });
		}
		isMounted = false;
	}, [dealerListURL]);
}

export default DealerRendersHit;
