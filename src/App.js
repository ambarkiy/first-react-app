import React from 'react';
import MapSample from './exemple1-javascript-mix-html';

function App() {
	var nom = 'Ambarki',
		prenom = 'Amine',
		welcomeMessage = 'Bonjour',
		fullMessage = `${welcomeMessage} ${nom} ${prenom}`;

	return (
		<div>
			<h2>{fullMessage}</h2>
			<MapSample />
		</div>
	);
}

export default App;
