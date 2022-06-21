import { useState, useContext, useEffect, useRef } from 'react';
import { gameContext } from '../components/context/gameContext';
import { usePerson } from '../components/hooks/usePerson';
import { useDealer } from '../components/hooks/useDealer';

function PlayerContainer() {
	const { bJ, setBJ } = useContext(gameContext);
	const dealerListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/list/`;
	const playerAListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/list/`;

	const passDealer = useDealer(dealerListURL);
	const passPlayer = usePerson(playerAListURL);

	// console.log(passCard.data.map((element,key) => {}));
	function dealerPass() {
		setBJ({ ...bJ, dealer: passDealer.dealerCard });
	}
	// function playerPass() {
	// 	setBJ({ ...bJ, playerA: passPlayer.playerCard });
	// }

	useEffect(() => {
		if (passDealer.loading === true) {
			setTimeout(2000);
		} else if (passDealer.loading === false) {
			dealerPass();
			console.log(passDealer.dealerCard);
		}
	}, []);

	// useEffect(() => {
	// 	if (passPlayer.loading === true) {
	// 		setTimeout(2000);
	// 	} else if (passPlayer.loading === false) {
	// 		playerPass();
	// 		console.log(passPlayer.data2);
	// 	}
	// }, []);

	// const fetchHand=() => {
	// 	fetch(dealerListURL)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setDealer(...dealer, [res.piles.dealer.cards]);
	// 			return fetch(playerAListURL);
	// 		})
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setPlayerA(...playerA[res.piles.dealer.cards]);
	// 		});
	// };

	// // console.log(playerA, dealer);

	// useEffect(() => {
	// 	fetchHand();
	// }, [dealerListURL, playerAListURL]);

	return <div></div>;
}

export default PlayerContainer;
