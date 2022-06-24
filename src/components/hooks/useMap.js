import { useContext, useEffect, useState, useRef } from 'react';
import { gameContext } from '../context/gameContext';
import BlackJack from '../BlackJack';

export const useMap = () => {
	const { bJ, setBJ } = useContext(gameContext);
	let isMounted = useRef(true);
	// {
	// 	bJ.dealer = undefined ? setTimeout(): dealerMap();
	// }

	function dealerMap() {

		
	}

	// function playerMap() {
	// 	if (bJ.playerA) {
	// 		return;
	// 	} else if (bJ.playerA != undefined) {
	// 		bJ.playerA.map((element) => {
	// 			return setPCard(element);
	// 		});
	// 	}
	// }

	useEffect(() => {
		if (isMounted) {
			if (bJ.start) {
				dealerMap();
			}
		}
		isMounted = false;
	}, [bJ.dealer]);

	// useEffect(() => {
	// 	{
	// 		setDCard && playerMap();
	// 	}
	// }, []);

	return { dealerMap };
};
