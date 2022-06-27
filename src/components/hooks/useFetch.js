import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [state, setState] = useState({ data: null, loading: false });

	useEffect(() => {
		setState({ data: null, loading: true });
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				setState({ data: { res }, loading: false });
			});
	}, [url]);

	return state;
};

