
document.getElementById("resumeButton").addEventListener("click", resumeButton);
document.getElementById("startButton").addEventListener("click", startButton);
document.getElementById("exitButton").addEventListener("click", exitButton);


function startButton(){
        location.href = "intro";
    }

function resumeButton() {
    location.href = "player";
}

function exitButton() {
    location.href = "player";
}
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }

    let menuSound = new sound("/mp3/menuSound.mp3");
    menuSound.play();
}