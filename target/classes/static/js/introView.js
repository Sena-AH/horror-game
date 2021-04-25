
/*document.getElementById("nextButt").addEventListener("click", IntroClickNext);*/

/*document.getElementById("nextButt2").addEventListener("click", scene2);*/
let introSound = new sound("/mp3/introMusic.mp3");

showIntro();

function showIntro() {

    $('.container').append('<img id="introBaseImg" src="images/introImg/introBase.jpg">');
    $('.container').append('<p class="introText1">In a little town outside Connecticut lives the couple Ed and Lorrain Warren\n' +
        '    famous for their investigations of supernatural activitys and work with cases where paranormal activitys has ouccured.</p>');
    $('.container').append('<button class="nextButt" onclick=IntroClickNext()></button>');
}


function IntroClickNext() {
    introMusic();
    $('.container').empty();
    $('.container').append('<img id="introBaseImg" src="images/introImg/introBase.jpg">');
    $('.container').append('<p class="introText2">Now the couple got a new mission.\n' +
        '\n' +
        '        A family suspects that their home is haunted by evil spirits and they are in desperate need for aid ...</p>');
    $('.container').append('<button class="nextButt" onclick=introScene3()></button>');


    /* $('.annabelleDiv').append('<button class="nextButt" onclick="scene1()"></button>');*/
    /*$('.annabelleDiv').prepend('<button class="nextBtn" onclick="showScene3()"></button>');*/
}
function introScene3(){
    introMusic();
    $('.container').empty();
    $('.container').append('<img id="introBaseImg" src="images/introImg/introBase.jpg">');
    $('.container').append('<p class="introText3"> This time Ed and Lorrain needs your help to defeat whatever\n' +
        '\n' +
        '        lurking in the poor familys home.</p>');
    $('.container').append('<button class="nextButt" onclick=introScene4()></button>');

}
function introScene4(){
    introMusic();
    $('.container').empty();
    $('.container').append('<img id="introBaseImg2" src="images/introImg/introBase2.jpg">');
    $('.container').append('<p class="introText4"> You´ll have to search for the answers in the spirit world and no one knows what you will find there...\n' +
        '        but one thing is certain.\n' +
        '        You have to hurry up before it is to late!</p>');
    $('.container').append('<button class="nextButt" onclick=gameStartScene()></button>');

}
function gameStartScene() {
    introMusic();
    $('.container').empty();
    $('.container').append('<img id="gameStartImg" src="images/introImg/gameStart.jpg">');
    $('.container').append('<p class="gameStartText"> Choose which way you want to go by ' +
        '                                             clicking on one of the arrows...</p>');
    $('.container').append('<button class="gameStartButt" onclick=doorScene()></button>');

}
function doorScene(){
    introMusic();
    $('.container').empty();
    $('.container').append('<img id="doorIntroImg" src="images/introImg/doorImage.jpg">');
    $('.container').append('<p class="doorIntroText">When you find the doors choose which one you want to enter by ' +
                                                    'clicking on one of them.</p>');
    $('.container').append('<button class="doorStartButt" onclick=startPath()></button>');

}

function startPath() {
    location.href='player';
}
function introMusic(){
    introSound.play();
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