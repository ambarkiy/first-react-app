import React from 'react';
import MapSample from './exemple1-jsx-map';
import MapWithArrowSample from './exemple2-jsx-arrow-map';
function App() {
	var nom = 'Ambarki',
		prenom = 'Amine',
		welcomeMessage = 'Bonjour',
		fullMessage = `${welcomeMessage} ${nom} ${prenom}`;

	return (
		<div>
			<h2>{fullMessage}</h2>
			<MapSample />
			<MapWithArrowSample />
		</div>
	);
}

export default App;
