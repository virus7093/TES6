var audio;
var song;
var data = JSON.parse(getCookie("data"))

$(() => {
    song = getCookie("song")
    music()
    setInterval(() => {
        document.cookie = `cTime=${audio.currentTime}; path=/`
    }, 10)
    display()
	updatestore()
})



function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}

function music() {
    audio = new Audio(`../../../../audio/fond/${song}.mp3`)
    audio.play()
    audio.volume = 0.5
    audio.currentTime = getCookie("cTime")
    console.log(JSON.parse(getCookie("resume")))
    if(!JSON.parse(getCookie("resume"))) {
        audio.pause()
    }
    audio.addEventListener("ended", () => {
        song = (parseInt(song)+1)
        document.cookie = "cTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = "song=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = `cTime=0; path=/`
        if(song === 5) {
            document.cookie = `song=1; path=/`
			song=1
            music()
        }
        else {
            document.cookie = `song=${song}; path=/`
            music()
        }

    });
}



async function display() {
    let speach = document.getElementById("dialog");
    let text = speach.innerHTML;
    speach.innerHTML = ``;
    var i = 0
    setInterval(() => {
        if(i===text.length) {
            speach.innerHTML = speach.innerHTML.slice(0, speach.innerHTML.length-1);
            i+=1
        }
        else if (i<text.length) {
            if(text[i] === "<") {
                i+=4
                speach.innerHTML = speach.innerHTML.slice(0, speach.innerHTML.length-1)+"</br> _"
            }
            else {
                speach.innerHTML= speach.innerHTML.slice(0, speach.innerHTML.length-1) + text[i]+`_`
                i+=1
            }
        }
        
        
    }, 80);

}


async function updatestore() {
    let skills = data[9]
	let skill;
    let prix = 0;
    let shop = document.getElementById("shop");
    shop.innerHTML = ``

    document.getElementById("or_amount").innerHTML = `${data[7]} or`

    

    let divs = ``;

    for (var x in skills) {
        if(!skills[x]) {
			skill = await findskill(parseInt(x), data)


			
			
			if( !skill.exclu[0] || (skill.exclu[0] & skill.exclu[1] === data[4]) ) divs += `<div class="skill" style="background: ${skill.color};"><div class="shadows"></div><h1>${skill.emoji} ${skill.name}</h1><h2>${skill.description}</h2><h3>Coût en mana : ${skill.manacost}</h3><h4>${skill.prix} or</h4><div class="select" onclick="buy(${parseInt(x)}, ${skill.prix}, '${skill.name}', '${skill.emoji}')"></div></div>`
		}
    }
	
	if (divs === ``) {
		shop.innerHTML = `<h1 id="vide">Tu as tout acheté dans ma boutique !</h1>`
	}
	else {
		shop.innerHTML = divs
	}
}


async function buy(id, prix, name, emoji) {
    console.log("cheh")
    let box = document.getElementById("box")
    if (parseInt(prix)>data[7]) {
        box.innerHTML = `<h1>Tu n'as pas assez d'argent pour t'acheter ceci</h1> <button type="button" class="nomoney" onclick="ok()">Ok</button>`
    }
    else {
        box.innerHTML = `<h1>Veux-tu vraiment acheter :</br> ${emoji} ${name}</br> pour ${prix} or ?</h1> <button type="button" class="no" onclick="ok()">Non</button> <button type="button" class="yes" onclick='yesibuy(${id}, ${prix})'>Oui</button>`
    }

    document.getElementById("alert").removeAttribute("hidden")
}


function ok() {
    document.getElementById("alert").setAttribute("hidden", "hidden")
}

async function yesibuy(id, prix) {

    data[9][id] = true
    data[7] -= prix
    updatestore()
    document.getElementById("alert").setAttribute("hidden", "hidden")
    document.cookie = "data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = `data=${JSON.stringify(data)}; path=/`
    data = JSON.parse(getCookie("data"))
    

}