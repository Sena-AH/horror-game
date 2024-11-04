let menuSound = new sound("/mp3/menuSound.mp3");
let scareSound = new sound("/mp3/scareScream.mp3");


document.getElementById("startBtn").addEventListener("click", introPath);
document.getElementById("resumeBtn").addEventListener("click", playerPath);
document.getElementById("exitBtn").addEventListener("click", exitButton);
getValue();
function getValue(){
   $('.playerDiv').append('<h3>Add username</h3>');
   $('.playerDiv').append('<p>Name:<input type="text" id="name"></p>');

}

function introPath(){
    location.href = "intro";
}
function playerPath(){
    location.href = "player";
}


function exitButton() {
    pauseMenuMusic();
    scarySound();
    $('.indexMainDiv').empty();
    $('.playerDiv').empty();
    $('.indexMainDiv').append('<img class="exitImg" src="/images/scaryNun.jpg">');

}

function menuMusic(){
    menuSound.play();
}
function scarySound(){
    scareSound.play();
}
function pauseMenuMusic(){
   menuSound.stop();
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

startwithThis();
function startwithThis(){
    $.ajax({
        type: 'GET',
        url: 'api/player',
        success: function (player) {
            console.log('success', player);
        },
        error: function () {
            alert('Couldnt find any players or items');
        }
    });
}

document.getElementById('add-player').addEventListener("click", thisfunction);

function thisfunction(){
    menuMusic();

    let playerName = document.getElementById("name").value;
    console.log(playerName);
    let player ={
        name: playerName
    };
    console.log(player);
    $.ajax({
        type: 'POST',
        url: 'api/player/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(player),
        success: function () {
            // addPlayer(newPlayer);
            $('.playerDiv').empty();
            $('.playerDiv').append('<h3 id="greetingText">Welcome '+playerName+'!</h3>');
            document.getElementById('add-player').remove();
            console.log("success");
        },
        error: function () {
            alert('Could not add your username.');
        }
    });
    document.getElementById("name").value="";
}

