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
    let stuff = data[11];
    let classe = data[4];
    let prix = 0;
    let shop = document.getElementById("shop");
    shop.innerHTML = ``

    document.getElementById("or_amount").innerHTML = `${data[7]} or`

    

    let divs = ``;
    let max = 0

    for (var x in stuff) {
        let color = `grey`
        let name = ``
        let tier = 0
        if (parseInt(x) === 0) {
            let arme = stuff[x]

            switch (arme[0]) {
                case 0:
                    name+=`Baton `
                    break;
                case 1:
                    name+=`Arc `
                    break;
                case 2:
                    name+=`Épée `
                    break;
            }

            switch (arme[1]) {
                case 0:
                    color = "green"
                    name+= `peu typique`
                    prix = 1000;
                    tier = 1
                    colora = "gray"
                    break;
                case 1:
                    color = "blue"
                    name+= `rare`
                    prix = 10000;
                    tier = 2
                    colora = "green"
                    break;
                case 2:
                    color = "purple"
                    name+= `épique`
                    prix = 100000;
                    tier = 3
                    colora = "blue"
                    break;
                case 3:
                    color = "gold"
                    name+= `légendaire`
                    prix = 1000000;
                    tier = 4
                    colora = "purple"
                    break;
                case 4:
                    colora = "gold"
                    break;
            }
            document.getElementById("arme").style.background = colora

            if(stuff[x][1] < 4) {
                divs+=`<div class="item" style="background: ${color};"><div class="shadows"></div><h1>${name}</h1><h2>Tier ${tier}</h2> <h3>${prix} or</h3><div class="select" onclick='buy(${parseInt(x)}, ${prix}, \"${name}\", ${tier})'></div></div>`
            }
            else {
                max+=1
            }
        }
        else {


            if( parseInt(x)===1 ) {
                let mgauche = stuff[x]
    
    
    
                switch (classe) {
                    case "Mage":
                        name+="Bouquin "
                        break;
                    case "Archer":
                        name+="Carquois "
                        break;
                    case "Barbare":
                        name+="Bouclier "
                        break; 
                }
    
    
    
    
                switch (mgauche) {
                    case 0:
                        color = "green"
                        name+= `peu typique`
                        prix = 1000;
                        tier = 1
                        colora = "gray"
                        break;
                    case 1:
                        color = "blue"
                        name+= `rare`
                        prix = 10000;
                        tier = 2
                        colora = "green"
                        break;
                    case 2:
                        color = "purple"
                        name+= `épique`
                        prix = 100000;
                        tier = 3
                        colora = "blue"
                        break;
                    case 3:
                        color = "gold"
                        name+= `légendaire`
                        prix = 1000000;
                        tier = 4
                        colora = "purple"
                        break;
                    case 4:
                        colora = "gold"
                        break;
                }
                document.getElementById("mgauche").style.background = colora
    
                
            }
            else if (parseInt(x)===2) {
                let armure = stuff[x];
    
    
    
                switch (classe) {
                    case "Mage":
                        name+="Robe "
                        break;
                    case "Archer":
                        name+="Tunique "
                        break;
                    case "Barbare":
                        name+="Armure "
                        break;
                }
    
    
    
    
                switch (armure) {
                    case 0:
                        color = "green"
                        name+= `peu typique`
                        prix = 1000;
                        tier = 1
                        colora = "gray"
                        break;
                    case 1:
                        color = "blue"
                        name+= `rare`
                        prix = 10000;
                        tier = 2
                        colora = "green"
                        break;
                    case 2:
                        color = "purple"
                        name+= `épique`
                        prix = 100000;
                        tier = 3
                        colora = "blue"
                        break;
                    case 3:
                        color = "gold"
                        name+= `légendaire`
                        prix = 1000000;
                        tier = 4
                        colora = "purple"
                        break;
                    case 4:
                        colora = "gold"
                        break;
                }
                document.getElementById("armure").style.background = colora
            }
            if(stuff[x] < 4) {
                divs+=`<div class="item" style="background: ${color};"><div class="shadows"></div><h1>${name}</h1><h2>Tier ${tier}</h2> <h3>${prix} or</h3><div class="select" onclick='buy(${parseInt(x)}, ${prix}, \"${name}\", ${tier})'></div></div>`
            }
            else {
                max+=1
            }
            
        }
    }
    shop.innerHTML+= `<h1 hidden id="vide">Tu as tout acheté dans ma boutique !</h1>`
    if(max===3) {
        document.getElementById("vide").removeAttribute("hidden")
    }
    else {
        shop.innerHTML = divs;
    }
    
}


async function buy(id, prix, name, tier) {
    console.log("cheh")
    let box = document.getElementById("box")
    if (parseInt(prix)>data[7]) {
        box.innerHTML = `<h1>Tu n'as pas assez d'argent pour t'acheter ceci</h1> <button type="button" class="nomoney" onclick="ok()">Ok</button>`
    }
    else {
        box.innerHTML = `<h1>Veux-tu vraiment acheter : ${name} pour ${prix} or ?</h1> <button type="button" class="no" onclick="ok()">Non</button> <button type="button" class="yes" onclick='yesibuy(${id}, ${prix}, ${tier})'>Oui</button>`
    }

    document.getElementById("alert").removeAttribute("hidden")
}


function ok() {
    document.getElementById("alert").setAttribute("hidden", "hidden")
}

async function yesibuy(id, prix, tier) {

    data[7]-=parseInt(prix)

    if(id === 0 ) {
        data[11][id][1] = tier
    }
    else {
        data[11][id] = tier
    }

    updatestore()
    document.getElementById("alert").setAttribute("hidden", "hidden")
    document.cookie = "data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = `data=${JSON.stringify(data)}; path=/`
    data = JSON.parse(getCookie("data"))
    

}