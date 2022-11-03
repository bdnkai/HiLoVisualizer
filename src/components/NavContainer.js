import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import GameContainer from './GameContainer';
import HiLoContainer from './HiLoContainer/HiLoContainer';

function NavContainer() {
	return (
		<div>
			<nav>
				<Link to='/'>
					<button>HOME</button>
				</Link>
				<Link to='/blackjack' element='./GameContainer'>
					<button>Black Jack</button>
				</Link>
			</nav>
			<main>
				<Routes path='/'>
					<Route path='/' element={<Home />} />
					<Route path='/blackjack' element={<GameContainer/>} />
				</Routes>
			</main>
		</div>
	);
}

export default NavContainer;
