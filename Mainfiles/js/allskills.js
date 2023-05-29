async function findskill(id, player) {
    var data = undefined;
    let force = player[6][0]
    let agilite = player[6][1]
    let magie = player[6][2]
    let constitution = player[6][3]
    let precision = player[6][4]

    let arme = player[11][0]
    let mgauche = player[11][1]
	let armure = player[11][2]


    if(id === 0) { //Boule de feu
        data = {
            id: 0,
			type:0,
            name: "Boule de feu suprême",
            emoji: "🔥",
            description: "Crache une énorme boule de feu de ta bouche !",
            color: "#950606",
            manacost: 100,
            damage: (2*magie)*(1+mgauche/4),
			prix: 500,
            exclu: [true, "Mage"]
        }

    }
    if(id === 1) { //Halo Solaire Danse Draconique
        data = {
            id: 1,
			type:0,
            name: "Halo Solaire Danse Draconique",
            emoji: "🔥🗡️",
            description: "Ressemblant à un dragon, l’utilisateur se déplace en cercles pour éviter les attaques ennemies et les tranches plusieurs fois.",
            color: "#4C0505",
            manacost: 400,
            damage: (4*magie)+(10*force)+(arme*50),
			prix: 200000,
            exclu: [true, "Barbare"]
        
        }

    }
    if (id === 2) {//Chidori
        data = {
            id: 2,
			type:0,
            name: "Chidori",
            emoji: "⚡",
            description: "Le chidori est une forte concentration de mana de foudre canalisée autour de la main de l'utilisateur.",
            color: "#C3BB0A",
            manacost: 200,
            damage: (5*magie)+(2*force)+(5*agilite),
			prix: 10000,
            exclu: [false, ""]
        }   
    }
    if (id === 3) {//PATATE MAMAOW
        data = {
            id: 3,
			type:0,
            name: "Patate de Forain",
            emoji: "👊",
            description: "Mets une grosse PATATE MAMAOW à ton adversaire, simple efficace.",
            color: "#75716A",
            manacost: 50,
            damage: (5*force),
			prix: 1000,
            exclu: [false, ""]
        }
        
    }
	if(id === 4) { //Tir de précision
        data = {
            id: 4,
			type:0,
            name: "Tir de précision",
            emoji: "🎯",
            description: "Tir une flèche qui ne rate jamais sa cible",
            color: "#f0c420",
            manacost: 50,
            damage: (5*precision)*(1+mgauche/4)*(arme*15),
			prix: 500,
            exclu: [true, "Archer"]
        }
    }
	if(id === 5) { //Volée de flèche
        data = {
            id: 5,
			type:0,
            name: "Volée de flèche",
            emoji: "🏹",
            description: "Décoche une pluie de flèche sur l'adversaire",
            color: "#f0c420",
            manacost: 200,
            damage: (6*precision)*(2*force)*(1+mgauche/4)*(arme*35),
			prix: 100000,
            exclu: [true, "Archer"]
        }

    }
	if(id === 6) { //Coup d'estoc
        data = {
            id: 6,
			type:0,
            name: "Coup Estoc",
            emoji: "⚔️",
            description: "Un coup d'épée bien placé qui déstabilise l'adversaire",
            color: "#75716A",
            manacost: 100,
            damage: (6*force)*(2*agilite)*(arme*25),
			prix: 50000,
            exclu: [true, "Barbare"]
        }

    }
	if(id === 7) { //Position défensive
        data = {
            id: 7,
			type:2,
            name: "Position défensive",
            emoji: "🛡️",
            description: "Utlilise le bouclier pour se préparer à encaisser le coup",
            color: "#3898f3",
            manacost: 50,
            damage: (5*constitution)*(1+mgauche),
			duration: 1,
			prix: 500,
            exclu: [true, "Barbare"]
        }

    }
	if(id === 8) { //Parade
        data = {
            id: 8,
			type:2,
            name: "Position défensive",
            emoji: "💪",
            description: "Se prépare à recevoir le coup",
            color: "#3898f3",
            manacost: 50,
            damage: (2*constitution)*(2*agilite)*(1+armure/4),
			duration: 1,
			prix: 750,
            exclu: [false, ""]
        }

    }
		if(id === 9) { //Premier soins
        data = {
            id: 9,
			type:1,
            name: "Premiers soins",
            emoji: "🩹",
            description: "Applique les premiers soins",
            color: "#41f338",
            manacost: 50,
            damage: (5*constitution),
			prix: 500,
            exclu: [false, ""]
        }

    }


   
	
	

    return data
}