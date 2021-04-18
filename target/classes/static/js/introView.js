/*$('#introBase2Img').hide();
$('#introText1').show();
$('#introText2').hide();
$('#introText3').hide();
$('#introText4').hide();
$('#doorIntroText').hide();
$('#doorIntroImg').hide();
$('#gameStartText').hide();
$('#gameStartImg').hide();*/
document.getElementById("nextButt").addEventListener("click", clickNext);
document.getElementById("nextButt2").addEventListener("click", scene2);
/*document.getElementById("nextButt2").addEventListener("click", scene2);*/
$('.nextButt2').hide();

function clickNext() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img id="introBaseImg" src="images/introImg/introBase.jpg">');
    $('.annabelleDiv').append('<p id="introText2">Now the couple got a new mission.\n' +
        '\n' +
        '        A family suspects that their home is haunted by evil spirits and they are in desperate need for aid ...</p>');
    $('.nextButt2').show();

    /* $('.annabelleDiv').append('<button class="nextButt" onclick="scene1()"></button>');*/
    /*$('.annabelleDiv').prepend('<button class="nextBtn" onclick="showScene3()"></button>');*/
}
function scene2(){
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img id="introBaseImg" src="images/introImg/introBase.jpg">');
    $('.annabelleDiv').append('<p id="introText3"> This time Ed and Lorrain needs your help to defeat whatever\n' +
        '\n' +
        '        lurking in the poor familys home.</p>');
    $('.nextButt2').hide();
    
}
    /*function clickNext() {

        let baseImg1 = document.getElementById("introBaseImg").src;
        let baseImg2 = document.getElementById("introBase2Img").src;
        let baseImg3 = document.getElementById("gameStartImg").src;
        let baseImg4 = document.getElementById("doorIntroImg").src;
        let locationHref = location.href = "player";


        if (baseImg1.includes('introBase.jpg')) {
            document.getElementById("introText1");
            $('introText1').hide();

        }
        }*/

    /*if(baseImg1.includes("introText3")) {
        $('introBaseImg').hide();
        $('introText3').hide();
        $(baseImg2).show();
        $('introText4').show();


    }
    if(baseImg2.includes("introText4")) {
        $(baseImg2).hide();
        $('introText4').hide();
        $(baseImg3).show();
        $('gameStartText').show();


    }

    if(baseImg3.includes("gameStartText")) {
        location.href = "player";

    }
    if(locationHref.includes ("BaseScreen.jpg")){
            $(baseImg4).show();
            $('doorIntroText').show();
        }
    if(baseImg4.includes('doorIntroText')) {
            $(baseImg4).hide();
            $('doorIntroText').hide();
        }

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
}*/