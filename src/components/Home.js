import React from 'react';

function Home() {
	return (
		<div>
			<h1>BlackJack Hi-Lo Visualizer</h1>
			<p>
				Basic card counting systems assign a positive, negative, or zero value
				to each card. When a card is dealt with, the count adjusts by that
				card's counting value. Low cards increase the count; they increase the
				percentage of high cards in the deck.
			</p>
			<img src='src/assets/header.png' alt='' />
		</div>
	);
}

export default Home;
