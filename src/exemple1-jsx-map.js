import React from 'react';

const livres = [
	{ identifier: 1, titre: 'Javascript les fondamentaux', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 },
	{ identifier: 2, titre: 'React les fondamentaux', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 },
	{ identifier: 3, titre: 'Integrer ReactBootstrap', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 }
];

export default function MapSample() {
	return livres.map(function(item) {
		return (
			<div key={item.identifier}>
				<span>{item.titre}</span>
				<span>{item.auteur}</span>
				<span>{item.nbDeCommentaire}</span>
			</div>
		);
	});
}
