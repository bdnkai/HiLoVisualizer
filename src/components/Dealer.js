import { useContext } from 'react';
import PlayerContainer from '../logic-components/PlayerContainer';
import { gameContext } from './context/gameContext';

function Dealer() {
	const { dealer, setDealer } = useContext(gameContext);

	return <>hi</>;
}

export default Dealer;
