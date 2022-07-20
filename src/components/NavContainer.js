import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import GameContainer from './GameContainer';

function NavContainer() {
	return (
		<div>
			<nav>
				<Link to='/'>
					<h3><button></button></h3>
				</Link>
				<Link to='/hi-lo-visualizer/' element='GameContainer'>
					<h3><button>Hi-Lo Visualizer</button></h3>
				</Link>
			</nav>
			<main>
				<Routes path='/'>
					<Route path='/' element={<Home />} />
					<Route path='/:BlackJack' element={<GameContainer />} />
				</Routes>
			</main>
		</div>
	);
}

export default NavContainer;
