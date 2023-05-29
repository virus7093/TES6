var audio;

$(() => {
    song = getCookie("song")
    music(song)
    setInterval(() => {
        document.cookie = `cTime=${audio.currentTime}; path=/`
    }, 10)
    let h1 = document.getElementById("h1")
    let h2 = document.getElementById("h2")
    
    let i = 0
    setInterval(() => {
        i+=1
        h1.style.opacity = i/100
    }, 90);
    setTimeout(() => {
        let x = 0
        setInterval(() => {
            x+=1
            h2.style.opacity = x/100
        }, 90);
        setTimeout(() => {
            let h3 = document.getElementById("h3")
            h3.removeAttribute("hidden")
            document.addEventListener("keypress", function(event) {
                if(event.key === "Enter") {
                    document.cookie = "cTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
					document.cookie = "song=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
					document.cookie = `cTime=0; path=/`
					document.cookie = `song=1; path=/`
                    window.location.replace("../../world/worldmap/")
                }
            });
        }, 9000);
    }, 10000)
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
