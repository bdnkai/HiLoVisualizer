import { useContext, useState, useEffect, useRef } from 'react';
import { gameContext } from '../../context/gameContext';
import DealerRendersHit from '../render-hit-components/DealerRendersHit';

function DealerHit() {
	const { bJ, setBJ } = useContext(gameContext);
	const [dealerHit, setDealerHit] = useState();
	const [dealerCode, setDealerCode] = useState();
	let isMounted = useRef(true);

	const fetchCard = () => {
		const newCardURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/draw/?count=1`;

		fetch(newCardURL)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				console.log(res);
				setTimeout(() => {
					setDealerHit(res.cards);
				}, 200);
			});
	};
	const dealCard = () => {
		const dHand = `${[dealerHit[0].code]}`;
		const dealerURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/add/?cards=${dHand}`;
		fetch(dealerURL)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setTimeout(() => {
					setDealerCode('success');
					
				}, 200);
			});
	};
	useEffect(() => {
		if (isMounted) {
			setTimeout(() => {
				fetchCard();
			}, 200);
		}
		isMounted = false;
	}, []);

	useEffect(() => {
		{
			dealerHit && dealCard();
		}
	}, [fetchCard]);

	return <div>{dealerCode && <DealerRendersHit />}</div>;
}

export default DealerHit;
