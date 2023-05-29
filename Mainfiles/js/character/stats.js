var audio;
var song;
var buttons = document.getElementsByClassName("stats")
var data = JSON.parse(getCookie("data"))


$(() => {
    song = getCookie("song")
    music()
    setInterval(() => {
        document.cookie = `cTime=${audio.currentTime}; path=/`
    }, 10)
    if(data[8][3] <= 0) {
        for (var x=0; x<=4; x++) {
            buttons[x].setAttribute("hidden", "hidden")
        }
    }
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
    audio = new Audio(`../../../audio/fond/${song}.mp3`)
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


async function addpoint(i) {
    if(data[8][3] > 0) {
        let soundeffect = new Audio("../../../audio/soundeffect/clickbutton.mp3")
        soundeffect.volume = 0.40
        soundeffect.play()
        data[8][3] -= 1
        data[6][i] += 1

        let force = document.getElementById("force")
        let agilite = document.getElementById("agilite")
        let magie = document.getElementById("magie")
        let constitution = document.getElementById("constitution")
        let precision = document.getElementById("precision")


        force.innerHTML = `FOR : ${data[6][0]}`
        agilite.innerHTML = `AGI : ${data[6][1]}`
        magie.innerHTML = `MAG : ${data[6][2]}`
        constitution.innerHTML = `CON : ${data[6][3]}`
        precision.innerHTML = `PRÉ : ${data[6][4]}`

        let pt = document.getElementById("pt")

        pt.innerHTML = `${data[8][3]} points de compétences`

        if(data[8][3] <= 0) {
            for (var x=0; x<=4; x++) {
                buttons[x].setAttribute("hidden", "hidden")
            }
        }
        document.cookie = "data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = `data=${JSON.stringify(data)}; path=/`
    }
}