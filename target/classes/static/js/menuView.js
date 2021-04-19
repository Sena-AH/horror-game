
document.getElementById("resumeBtn").addEventListener("click", resumeButton);
document.getElementById("startBtn").addEventListener("click", startButton);
document.getElementById("exitBtn").addEventListener("click", exitButton);

playSound();

function startButton(){
        location.href = "intro";
    }

function resumeButton() {
    location.href = "player";
}

function exitButton() {
 exit();
}
function playSound(){

    let menuSound = new sound("/mp3/menuSound.mp3");
    menuSound.play();
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

}