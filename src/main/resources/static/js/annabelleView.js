

$('.annabelleDiv').append('<img class="annabelleDoor" src="images/annabelleFight/annabelleDoor.jpg">');
$('.annabelleDiv').append('<p class="talkBubble1">"Annabelles evil laughter is echoing in the room"</p>');
$('.annabelleDiv').prepend('<button id= "nextButton" class="nextButton" onclick="fightScene1()"></button>');


function fightScene1() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene1" src="images/annabelleFight/annabelleScene1.jpg">');
    $('.annabelleDiv').append('<p class="talkBubble2">I will defeat you "name"!</p>');
    $('.annabelleDiv').prepend('<button id= "nextButton" class="nextButton" onclick="showScene2()"></button>');
}
function showScene2() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene2" src="images/annabelleFight/annabelleScene2.jpg">');

}