var audio;

$(() => {
    song = getCookie("song")
    music(song)
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

function music(songx) {
    audio = new Audio(`../../../audio/fond/${songx}.mp3`)
    audio.play()
    audio.volume = 0.5
    audio.currentTime = getCookie("cTime")
    audio.addEventListener("ended", () => {
        document.cookie = "cTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = "song=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = `cTime=0; path=/`
        document.cookie = `song=0; path=/`
        music("0")
    });
}

function oui() {
    /*
    let soundeffect = new Audio("../../../audio/soundeffect/clickbutton.mp3")
    soundeffect.volume = 0.40
    soundeffect.play()
    */
    //setTimeout(() => {
        document.cookie = "cTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
        document.cookie = "song=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
		document.cookie = `song=1; path=/`
        document.cookie = `cTime=0; path=/`
        window.location.replace("../../world/worldmap")
    //}, 1000);
        
}

function non() {
    /*
    let soundeffect = new Audio("../../../audio/soundeffect/clickbutton.mp3")
    soundeffect.volume = 0.40
    soundeffect.play()
    */
    //setTimeout(() => {
        document.cookie = `data=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
        window.location.replace("../createperso")
    //}, 1000);
        
}
