var audio;
var data = JSON.parse(getCookie("data"))
let skill;

$(() => {
    song = getCookie("song")
    music(song)
    setInterval(() => {
        document.cookie = `cTime=${audio.currentTime}; path=/`
    }, 200)
    updatelistskill()
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

function music(songx) {
    audio = new Audio(`../../../audio/fond/${songx}.mp3`)
    audio.play()
    audio.currentTime = getCookie("cTime")
    audio.addEventListener("ended", () => {
        let nsong = (parseInt(songx)+1)
        document.cookie = "cTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = "song=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = `cTime=0; path=/`
        if(nsong === 3) {
            document.cookie = `song=0; path=/`
            music("0")
        }
        else {
            document.cookie = `song=${nsong}; path=/`
            music(nsong)
        }

    });
}

async function updatelistskill() {
    let divs = ``;
    let skills = data[9]

    let activedivs = [document.getElementById(`0`), document.getElementById(`1`), document.getElementById(`2`), document.getElementById(`3`)];

    for (let i of activedivs) {
        i.style.backgroundColor = "black"
        i.innerHTML = ``;
        i.style.border = "2px gray dashed"
    }

    for (let i in skills) {

        if(skills[i] && !data[10].includes(parseInt(i))) {
            skill = await findskill(parseInt(i), data)
            if(skill !== undefined) {
                divs += `<div class="skill" style="background: ${skill.color};" draggable="true"  ondragstart="DragStart(event)" id="${skill.id}"><div class="shadows"></div><h1>${skill.emoji} ${skill.name}</h1><h2>${skill.description}</h2><h3>Coût en mana : ${skill.manacost}</h3><h4>${skill.id}</h4></div>`
            }
            
        }
        else if (data[10].includes(parseInt(i))) {
            skill = await findskill(parseInt(i), data)
            var div = document.getElementById(`${data[10].indexOf(parseInt(i))}`);

            div.style.backgroundColor = skill.color
            div.style.border = "2px black solid"

            div.innerHTML = ``

            div.innerHTML = `<h2 id="0${data[10].indexOf(parseInt(i))}">${skill.emoji} ${skill.name}</h2>`
            if(data[10].indexOf(parseInt(i)) === 1) await console.log(div)
        }
    }
    let bord = document.getElementById("skills")
    bord.innerHTML = divs
}

function DragStart(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}
   
async function drop(ev) {
    ev.preventDefault();
    var newcomp = parseInt(ev.dataTransfer.getData("id"));
    let id = parseInt(ev.target.id)


    data[10][id] = newcomp
    document.cookie = `data=${JSON.stringify(data)}; path=/`
    data = JSON.parse(getCookie("data"));
	
    
    window.location.reload()
    //updatelistskill()
}
