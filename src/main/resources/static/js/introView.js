
/*document.getElementById("nextButt").addEventListener("click", IntroClickNext);*/

/*document.getElementById("nextButt2").addEventListener("click", scene2);*/
let introSound = new sound("/mp3/menuSound.mp3");

showIntro();
function showIntro() {
    introMusic();
    $('.container').append('<img id="introBaseImg" src="images/introImg/introBase.jpg">');
    $('.container').append('<p class="introText1">In a little town outside Connecticut lives the couple Ed and Lorrain Warren\n' +
        '    famous for their investigations of supernatural activitys and work with cases where paranormal activitys has ouccured.</p>');
    $('.annabelleDiv').append('<button id=nextButt" onclick=IntroClickNext()></button>');


    /* $('.annabelleDiv').append('<button class="nextButt" onclick="scene1()"></button>');*/
    /*$('.annabelleDiv').prepend('<button class="nextBtn" onclick="showScene3()"></button>');*/
}
function IntroClickNext() {
    introMusic();
    $('.container').empty();
    $('.container').append('<img id="introBaseImg" src="images/introImg/introBase.jpg">');
    $('.container').append('<p class="introText2">Now the couple got a new mission.\n' +
        '\n' +
        '        A family suspects that their home is haunted by evil spirits and they are in desperate need for aid ...</p>');
    $('.annabelleDiv').append('<button id=nextButt" onclick=introScene2()></button>');


    /* $('.annabelleDiv').append('<button class="nextButt" onclick="scene1()"></button>');*/
    /*$('.annabelleDiv').prepend('<button class="nextBtn" onclick="showScene3()"></button>');*/
}
function introScene3(){
    introMusic();
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img id="introBaseImg" src="images/introImg/introBase.jpg">');
    $('.annabelleDiv').append('<p class="introText3"> This time Ed and Lorrain needs your help to defeat whatever\n' +
        '\n' +
        '        lurking in the poor familys home.</p>');
    $('.annabelleDiv').append('<button id=nextButt" onclick=introScene4()></button>');

}
function introScene4(){
    introMusic();
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img id="introBaseImg2" src="images/introImg/introBase2.jpg">');
    $('.annabelleDiv').append('<p class="introText4"> You´ll have to search for the answers in the spirit world and no one knows what you will find there...\n' +
        '        but one thing is certain.\n' +
        '        You have to hurry up before it is to late!</p>');
    $('.annabelleDiv').append('<button id=nextButt" onclick=gameStartScene()></button>');

}
function gameStartScene(){
    introMusic();
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img id="gameStartImg" src="images/introImg/gameStart.jpg">');
    $('.annabelleDiv').append('<p class="gameStartText"> Choose which way you want to go by clicking on one of the arrows.</p>');
    $('.annabelleDiv').append('<button id=nextButt" onclick=doorScene()></button>');

}

function doorScene(){
    introMusic();
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img id="doorIntroImg" src="images/introImg/doorImage.jpg">');
    $('.annabelleDiv').append('<p class="doorIntroText">Choose which door you want to enter by clicking on one of them.</p>');
    $('.annabelleDiv').append('<button id=nextButt" onclick=introScene3()></button>');

}
function introMusic(){
    introSound.play();
}
function pauseIntroMusic(){
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