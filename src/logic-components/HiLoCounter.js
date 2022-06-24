import { useState, useContext, useEffect, useReducer } from 'react';
import { gameContext } from '../components/context/gameContext';
import { useHiLo } from '../components/hooks/useHiLo';

function HiLoCounter() {
	const { bJ, setBJ } = useContext(gameContext);
	const { hiLoReducer } = useHiLo();
	const [state, setState] = useState();

	useEffect(() => {}, []);
	return (
		<div>
			{bJ.dealer &&
				bJ.dealer.map((dCard,index) => {
					console.log(dCard.code);
					console.log(dCard);
					return (
						<>
							<ul>
								<li key={index}>{dCard.code}</li>
							</ul>
						</>
					);
				})}
		</div>
	);
}

export default HiLoCounter;
