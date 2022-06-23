import { useContext, useState } from 'react';
import { gameContext } from '../context/gameContext';

export function useHandle() {
	const { bJ, setBJ } = useContext(gameContext);
	const [handle, setHandle] = useState();

	function handleStart(event) {
		setBJ({
			...bJ,
			start: true,
			dealerTurn: false,
			playerTurn: true,
			updateNeeded: true,
			restart: true,
		});
	}

	function handleDealerHit(event) {
		event.preventDefault();
		setBJ({ ...bJ, dealerHit: true });
		if (bJ.dealerHit == true) {
		}
	}

	function handlePlayerHit(event) {
		event.preventDefault();
		setBJ({ ...bJ, playerHit: true });
		if (bJ.playerHit == true) {
		}
	}

	function handleDealerStay(event) {
		event.preventDefault();
		setBJ({ ...bJ, dealerTurn: false, dealerStay: true });
	}

	function handlePlayerStay(event) {
		event.preventDefault();
		setBJ({ ...bJ, playerTurn: false, playerStay: true, dealerTurn: true });
	}
	return {
		handleStart,
		handleDealerHit,
		handlePlayerHit,
		handlePlayerStay,
		handleDealerStay,
	};
}
