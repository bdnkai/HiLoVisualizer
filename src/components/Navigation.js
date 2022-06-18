import { Route, Routes, Links } from 'react-router-dom';

function Navigation(props) {
	return (
		<div>
			<nav>
				<Links></Links>
				<Links></Links>
			</nav>
			<Routes>
				<Route />
				<Route />
			</Routes>
		</div>
	);
}

export default Navigation;
