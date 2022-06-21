import { useState, useContext, useEffect, useRef } from 'react';
import { gameContext } from '../components/context/gameContext';
import { useFetch } from '../components/hooks/useFetch';
import Dealer from '../components/Dealer';
import PlayerA from '../components/PlayerA';
import { useMap } from '../components/hooks/useMap';

function PlayerContainer() {
	const { bJ, setBJ } = useContext(gameContext);

	const dealerListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/dealer/list/`;
	const playerAListURL = `https://deckofcardsapi.com/api/deck/${bJ.deck}/pile/playerA/list/`;

	const dealersHand = useMap(dealerListURL);
	// console.log(dealersHand.data.map((element,key) => {}));
	function testDealer() {
		setBJ({ ...bJ, dealer: dealersHand.data });
	}

	useEffect(() => {
		testDealer();
	}, [dealersHand]);
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
