
document.getElementById("fightBtn").addEventListener("click", fightButton);
document.getElementById("escapeBtn").addEventListener("click", escapeButton);

/*document.getElementById("nextBtn").addEventListener("click", showScene2);*/

/*
showAnnabelle();
function showAnnabelle() {
   document.getElementById('annabelleDiv').innerHTML+='<img class="annabelleDoor" src="images/annabelleFight/annabelleDoor.jpg">';*/
   /* $('.annabelleDiv').append('<p class="talkBubble1">"Annabelles evil laughter is echoing in the room"</p>');
    $('.annabelleDiv').prepend('<button class="fightButton" onclick=fightButton()></button>');
    $('.annabelleDiv').prepend('<button class="escapeButton" onclick=escapeButton()></button>');
}*/

function fightButton() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene1" src="images/annabelleFight/annabelleScene1.jpg">');
    $('.annabelleDiv').append('<p class="talkBubble2">I will defeat you "name"!</p>');
    $('.nextBtn').show();
    $('.annabelleDiv').append('<button class="nextBtn" onclick=showScene2()></button>');

    /*$('.annabelleDiv').prepend('<button class="nextBtn" onclick="showScene2()"></button>');*/

}
function showScene2() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene2" src="images/annabelleFight/annabelleScene2.jpg">');
    $('.annabelleDiv').append('<button class="nextBtn" onclick=showScene3()></button>');
    /*$('.annabelleDiv').prepend('<button class="nextBtn" onclick="showScene3()"></button>');*/

}
function showScene3() {
        $('.annabelleDiv').empty();
        $('.annabelleDiv').append('<img class="annabelleScene3" src="images/annabelleFight/annabelleScene3.jpg">');
        $('.annabelleDiv').append('<button class="nextBtn" onclick=showScene4()></button>');
}

function showScene4() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene4" src="images/annabelleFight/annabelleScene4.jpg">');
    $('.annabelleDiv').append('<p class="talkBubble3">Haha did you really thought you could beat me with that!!</p>');
    $('.annabelleDiv').append('<button class="nextBtn" onclick=showScene5()></button>');
}
function showScene5() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene5" src="images/annabelleFight/annabelleScene5.jpg">');
    $('.annabelleDiv').append('<button class="nextBtn" onclick=winnerScene()></button>');
}
function winnerScene() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene4" src="images/annabelleFight/youWin.jpg">');
    $('.annabelleDiv').append('<button class="nextBtn" onclick= escapeButton()></button>');
}
function escapeButton() {
    location.href= 'player';
}
