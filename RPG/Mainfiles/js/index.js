$(() => {
    
    setTimeout(() => {
        let h3 = document.getElementById("h3")
        h3.removeAttribute("hidden")
        document.addEventListener("keypress", function(event) {
            if(event.key === "Enter") {
                var audio = new Audio("./Mainfiles/audio/fond/0.mp3")
                audio.play()
                let text = document.getElementById("text")
                let i = 100
                setInterval(() => {
                    i-=1
                    text.style.opacity = i/100
                    if(i === 0 ) {
                        setTimeout(() => {
                            document.cookie = `cTime=${audio.currentTime}; path=/`
                            document.cookie = `song=0; path=/`
                            window.location.replace("./Mainfiles/pages/start_files/createperso/")
                        }, 3000)
                    }
                }, 50)
            }
        });
    }, 7000)
})