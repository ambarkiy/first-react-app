import React from 'react';

const livres = [
	{ identifier: 1, titre: 'Javascript les fondamentaux', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 },
	{ identifier: 2, titre: 'React les fondamentaux', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 },
	{ identifier: 3, titre: 'Integrer ReactBootstrap', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 }
];

const MapWithArrowSample = function() {
	return livres.map((livre) => <span>{livre.titre}</span>);
};

export default MapWithArrowSample;
