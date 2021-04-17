

$('.annabelleDiv').append('<img class="annabelleDoor" src="images/annabelleFight/annabelleDoor.jpg">');
$('.annabelleDiv').append('<img class="annabelleDoor" src="images/annabelleFight/annabelleDoor.jpg">');
$('.annabelleDiv').append('<p class="talkBubble1">"Annabelles evil laughter is echoing in the room"</p>');
$('.annabelleDiv').prepend('<button class="fightButton" src="images/fight_button.jpg " onclick=fightButton()></button>');


function fightButton() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene1" src="images/annabelleFight/annabelleScene1.jpg">');
    $('.annabelleDiv').append('<p class="talkBubble2">I will defeat you "name"!</p>');
    $('.annabelleDiv').prepend('<button class="nextButton" onclick="showScene2()"></button>');
    $('.annabelleDiv').prepend('<button class="escapeButton" onclick="escapeButton()"><img src="images/nextBtn.jpg"></button>');
}
function showScene2() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene2" src="images/annabelleFight/annabelleScene2.jpg">');
    $('.annabelleDiv').prepend('<button class="nextButton" onclick="showScene3()"></button>');
    $('.annabelleDiv').prepend('<button class="escapeBtn" onclick="escapeButton()"><img src="images/nextBtn.jpg"></button>');

}
function escapeButton() {
    location.href= 'player';
}
function showScene3() {

}