const livres = [
	{ titre: 'Javascript les fondamentaux', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 },
	{ titre: 'React les fondamentaux', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 },
	{ titre: 'Integrer ReactBootstrap', auteur: 'Youssef Ambarki', nbDeCommentaire: 0 }
];

export default function MapSample() {
	return livres.map(function(item) {
		return item.titre;
	});
}
