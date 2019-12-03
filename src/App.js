import React from 'react';

function App() {
	var nom = 'Ambarki',
		prenom = 'Amine',
		welcomeMessage = 'Bonjour',
		fullMessage = `${welcomeMessage} ${nom} ${prenom}`;

	return <h2>{fullMessage}</h2>;
}

export default App;
