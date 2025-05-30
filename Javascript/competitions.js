const continentData = {
    europe: {
        name: "Europe (UEFA)",
        places: "13 places",
        countries: "55 pays",
        percentage: "24%",
        system: `
            <p><strong>Phase de groupes :</strong></p>
            <p>• Les équipes sont réparties en 10 groupes</p>
            <p>• Les vainqueurs de chaque groupe se qualifient directement</p>
            
            <p><strong>Barrages :</strong></p>
            <p>• Les 10 deuxièmes de groupe participent aux barrages</p>
            <p>• 2 meilleures équipes de la Ligue des Nations les rejoignent</p>
            <p>• 3 mini-tournois désignent 3 qualifiés supplémentaires</p>
            
            <p><strong>Résultat :</strong></p>
            <p>• 13 places sur 32 équipes en Coupe du Monde</p>
            <p>• Environ 40% des places pour 10% de la population mondiale</p>
        `
    },
    afrique: {
        name: "Afrique (CAF)",
        places: "5 places",
        countries: "54 pays",
        percentage: "9%",
        system: `
            <p><strong>Tour préliminaire :</strong></p>
            <p>• Les équipes les moins bien classées s'affrontent</p>
            <p>• Matchs aller-retour pour accéder au second tour</p>
            
            <p><strong>Phase de groupes :</strong></p>
            <p>• 40 équipes réparties en 10 groupes de 4</p>
            <p>• Seuls les vainqueurs de groupe accèdent au tour suivant</p>
            
            <p><strong>Tour final :</strong></p>
            <p>• Les 10 vainqueurs de groupe s'affrontent en 5 duels</p>
            <p>• Matchs aller-retour, 5 vainqueurs se qualifient</p>
            
            <p><strong>Résultat :</strong></p>
            <p>• Seulement 5 places pour 54 pays</p>
            <p>• 17% de la population mondiale, 15% des places</p>
        `
    },
    asie: {
        name: "Asie (AFC)",
        places: "4,5 places",
        countries: "47 pays",
        percentage: "10%",
        system: `
            <p><strong>Premier tour :</strong></p>
            <p>• Les équipes les moins bien classées s'affrontent</p>
            <p>• Matchs aller-retour d'élimination</p>
            
            <p><strong>Deuxième tour :</strong></p>
            <p>• 40 équipes réparties en 8 groupes de 5</p>
            <p>• 8 vainqueurs et 4 meilleurs deuxièmes avancent</p>
            
            <p><strong>Troisième tour :</strong></p>
            <p>• 12 équipes en 2 groupes de 6</p>
            <p>• 2 premiers de chaque groupe se qualifient directement</p>
            
            <p><strong>Quatrième tour :</strong></p>
            <p>• Les deux troisièmes s'affrontent</p>
            <p>• Le vainqueur dispute un barrage intercontinental</p>
            
            <p><strong>Résultat :</strong></p>
            <p>• 4,5 places pour 60% de la population mondiale</p>
        `
    },
    "amerique-sud": {
        name: "Amérique du Sud (CONMEBOL)",
        places: "4,5 places",
        countries: "10 pays",
        percentage: "45%",
        system: `
            <p><strong>Système de ligue :</strong></p>
            <p>• Les 10 équipes s'affrontent toutes en aller-retour</p>
            <p>• Chaque équipe joue 18 matchs au total</p>
            
            <p><strong>Qualification directe :</strong></p>
            <p>• Les 4 premiers du classement se qualifient directement</p>
            <p>• Pas de phases éliminatoires supplémentaires</p>
            
            <p><strong>Barrage :</strong></p>
            <p>• L'équipe classée 5e participe à un barrage</p>
            <p>• Barrage intercontinental pour une place supplémentaire</p>
            
            <p><strong>Résultat :</strong></p>
            <p>• 4,5 places pour seulement 10 pays</p>
            <p>• Ratio très favorable : 45% de chances de qualification</p>
        `
    },
    "amerique-nord": {
        name: "Amérique du Nord (CONCACAF)",
        places: "3,5 places",
        countries: "35 pays",
        percentage: "10%",
        system: `
            <p><strong>Premier tour :</strong></p>
            <p>• 30 équipes réparties en 6 groupes de 5</p>
            <p>• Seuls les vainqueurs de groupe avancent</p>
            
            <p><strong>Deuxième tour :</strong></p>
            <p>• Les 6 vainqueurs s'affrontent en 3 duels</p>
            <p>• Matchs aller-retour d'élimination</p>
            
            <p><strong>Tour final (Hexagonal) :</strong></p>
            <p>• 3 vainqueurs rejoignent les 3 têtes de série</p>
            <p>• Poule à 6 équipes, tous contre tous</p>
            <p>• Les 3 premières se qualifient directement</p>
            <p>• La 4e dispute un barrage intercontinental</p>
            
            <p><strong>Résultat :</strong></p>
            <p>• 3,5 places pour 35 pays</p>
            <p>• USA, Mexique et Canada généralement favoris</p>
        `
    },
    oceanie: {
        name: "Océanie (OFC)",
        places: "0,5 place",
        countries: "14 pays",
        percentage: "3,5%",
        system: `
            <p><strong>Phase de groupes :</strong></p>
            <p>• Les équipes sont réparties en groupes régionaux</p>
            <p>• Les meilleures équipes se qualifient pour la suite</p>
            
            <p><strong>Phase à élimination directe :</strong></p>
            <p>• Les équipes qualifiées s'affrontent</p>
            <p>• Matchs à élimination directe</p>
            <p>• Détermine le champion d'Océanie</p>
            
            <p><strong>Barrage intercontinental :</strong></p>
            <p>• Le champion doit disputer un barrage</p>
            <p>• Aucune qualification directe garantie</p>
            
            <p><strong>Résultat :</strong></p>
            <p>• 0,5 place pour 14 pays</p>
            <p>• Seule confédération sans place garantie</p>
            <p>• Qualification extrêmement difficile</p>
        `
    }
};

document.getElementById('continentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const selectedContinent = document.getElementById('continent').value;
    const resultsDiv = document.getElementById('continentResults');

    if (selectedContinent && continentData[selectedContinent]) {
        const data = continentData[selectedContinent];

        document.getElementById('continentName').textContent = data.name;
        document.getElementById('places').textContent = data.places;
        document.getElementById('countries').textContent = data.countries;
        document.getElementById('percentage').textContent = data.percentage;
        document.getElementById('qualificationSystem').innerHTML = data.system;

        resultsDiv.style.display = 'block';
        resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
