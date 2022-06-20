import { useContext } from 'react';
import PlayerContainer from '../logic-components/PlayerContainer';
import { playerContext } from './context/playerContext';

function Dealer() {
	const { dealer, setDealer } = useContext(playerContext);

	console.log(dealer[0]);
	return (
		<>
			<img src={dealer[0].image} alt='' srcset='' />
		</>
	);
}

export default Dealer;
