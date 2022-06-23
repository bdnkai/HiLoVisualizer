import { useState } from 'react';

export function useHiLo() {
	function hiLoReducer(state, action) {
		const INCREMENT = [2, 3, 4, 5, 6];
		switch (action.type) {
			case 'INCREMENT':
				return state + 1;
			case 'DECREMENT':
				return state - 1;
			default:
				return state;
		}
	}
	return { hiLoReducer };
}
