import { useEffect, useState } from 'react';

export const usePerson = (playerURL) => {
	const [state, setState] = useState({
		playerCard: '',
		loading: false,
	});

	useEffect(() => {
		setState({ playCard: null, loading: true });
		fetch(playerURL)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				return setState({ playCard: res.piles.playerA.cards, loading: false });
			});
	}, [playerURL]);

	return state;
};
