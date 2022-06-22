import { useState, useContext, useEffect, useRef } from 'react';
import { gameContext } from '../components/context/gameContext';

function PlayerContainer() {
	const { bJ, setBJ } = useContext(gameContext);
	const dealerListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/list/`;
	const playerAListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/list/`;

	// const passDealer = useDealer(dealerListURL);
	// const passPlayer = usePlayer(playerAListURL);

	// console.log(passCard.data.map((element,key) => {}));

	// function dealerPass() {
	// 	setTimeout(3000);
	// 	if (bJ.updateNeeded == true && bJ.dealer == null) {
	// 		setBJ({ ...bJ, dealer: passDealer.dealerCard });
	// 	}
	// }
	// function playerPass() {
	// 	setBJ({ ...bJ, playerA: passPlayer.playerCard });
	// }

	// useEffect(() => {
	// 	if (passDealer.loading !== true) {
	// 		dealerPass();
	// 	} else setTimeout(200);
	// 	console.log(passDealer.dealerCard);
	// }, []);

	// useEffect(() => {
	// 	if (passPlayer.loading === true) {
	// 		setTimeout(2000);
	// 	} else if (passPlayer.loading === false) {
	// 		playerPass();
	// 		console.log(passPlayer.data2);
	// 	}
	// }, []);

	const fetchHand = () => {
		if (bJ.updateNeeded === true) {
			fetch(dealerListURL)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					return setBJ({ ...bJ, dealer: res.piles.dealer.cards });
				});

			return setBJ({ ...bJ, updateNeeded: false });
		}
	};

	// fetch(playerAListURL)
	// 			.then((res) => res.json())
	// 			.then((res) => {
	// 				return setBJ({ ...bJ, playerA: res.piles.playerA.cards });
	// 			});
	// 	}
	// // console.log(playerA, dealer);

	useEffect(() => {
		setTimeout(3000);
		if (bJ.updateNeeded === true) {
			fetchHand();
		}
		return setBJ({ ...bJ, updateNeeded: false });
	}, [dealerListURL]);

	return <div></div>;
}

export default PlayerContainer;
