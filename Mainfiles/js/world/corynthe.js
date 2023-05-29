var audio;
var song;

$(() => {
    song = getCookie("song")
    music()
    setInterval(() => {
        document.cookie = `cTime=${audio.currentTime}; path=/`
    }, 10)
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
        document.getElementById("pbutton").checked = true
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

function pauseresume() {
	let button = document.getElementById("pbutton");
	if(button.checked) {
		audio.pause()
        document.cookie = "resume=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = `resume=false; path=/`
	}
	else {
		audio.play()
        document.cookie = "resume=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = `resume=true; path=/`
	}
}

function skip() {
	audio.currentTime = audio.duration;
}

function precedent() {
	song-=2
	if(song < 0 ) {
		song=1
	}
	audio.currentTime = audio.duration;
	
}