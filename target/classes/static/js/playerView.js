let backgroundMusic = new sound("/mp3/backgroundMusic.mp3");
document.getElementById("arrDown").addEventListener("click", down);
document.getElementById("arrLeft").addEventListener("click", left);
document.getElementById("arrRight").addEventListener("click", right);

function startmusic(){
    backgroundMusic.play();
}
function pausemusic(){
    backgroundMusic.stop();
}

function down(){
    // backgroundMusic.play();
    console.log("down");
}
function left(){
    startmusic()
    $('.baseDiv').empty();
    $('.baseDiv').append('<img class="doorScreenImage"src="images/doorScreen.jpg">');

    //add if statement for if chuckyIsGone == true or false?? so you dont have to fight chucky again
    $('.baseDiv').append('<button class="enterLeftRoomButton" onclick=changeLocation("chucky")></button>')
    $('.baseDiv').append('<button class="enterRightRoomButton" onclick=changeLocation("notDone")></button>')
}
function right(){
    startmusic()
    $('.baseDiv').empty();
    $('.baseDiv').append('<img class="doorScreenImage"src="images/doorScreen.jpg">');
    $('.baseDiv').append('<button class="enterLeftRoomButton" onclick=changeLocation("jigsaw")></button>')
    $('.baseDiv').append('<button class="enterRightRoomButton" onclick=changeLocation("notDone")></button>')
}

function changeLocation(thePath){
    pausemusic();
    location.href= thePath;
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
