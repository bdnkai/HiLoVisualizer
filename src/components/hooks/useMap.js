import { useContext, useEffect, useState, useRef } from 'react';
import { gameContext } from '../context/gameContext';
import BlackJack from '../BlackJack';

export const useMap = () => {
	const { bJ, setBJ } = useContext(gameContext);
	const [dCard, setDCard] = useState();
	const [pCard, setPCard] = useState();
	let isMounted = useRef(true);
	// {
	// 	bJ.dealer = undefined ? setTimeout(): dealerMap();
	// }
	function dealerMap() {
		if (bJ.dealer == undefined) {
			return;
		} else if (bJ.dealer != undefined) {
			bJ.dealer.map(({ index, item }) => {
				
			});
		}
	}

	function playerMap() {
		if (bJ.playerA == undefined) {
			return;
		} else if (bJ.playerA != undefined) {
			bJ.playerA.map((element) => {
				return setPCard(element);
			});
		}
	}

	useEffect(() => {
		if (isMounted) {
			setTimeout(() => {
				if (bJ.start == true) {
					dealerMap();
				}
			}, 400);
		}
		isMounted = false;
	}, []);

	useEffect(() => {
		{
			setDCard && playerMap();
		}
	}, []);

	console.log(dCard);
	return { dCard }, { pCard };
};
