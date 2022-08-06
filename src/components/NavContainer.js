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
				<Link to='/game-container' element='./GameContainer'>
					<button>Game Container [Pre-Factor]</button>
				</Link>
				<Link to='/hilo-container' element='./HiLoContainer/HiLoContainer'>
					<button>HiLo Container [Re-Factor]</button>
				</Link>
			</nav>
			<main>
				<Routes path='/'>
					<Route path='/' element={<Home />} />
					<Route path='/game-container' element={<GameContainer/>} />
					<Route path='hilo-container' element={<HiLoContainer/>} />
				</Routes>
			</main>
		</div>
	);
}

export default NavContainer;
