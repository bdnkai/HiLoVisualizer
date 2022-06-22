import { wait } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';

export const useDealer = (dealerURL) => {
	const [state, setState] = useState({
		dealerCard: null,
		loading: false,
	});

	useEffect(() => {
		setState({ dealerCard: null, loading: true });
		fetch(dealerURL)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				return setState({
					dealerCard: res.piles.dealer.cards,
					loading: false,
				});
			});
	}, [useDealer]);

	return state;
};
