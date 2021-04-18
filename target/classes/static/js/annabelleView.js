
document.getElementById("fightBtn").addEventListener("click", fightButton);
document.getElementById("escapeBtn").addEventListener("click", escapeButton);
document.getElementById("nextBtn").addEventListener("click", showScene2);
$('.nextBtn').hide();
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

    /*$('.annabelleDiv').prepend('<button class="nextBtn" onclick="showScene2()"></button>');*/

}
function showScene2() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene2" src="images/annabelleFight/annabelleScene2.jpg">');
    $('.nextBtn').show();
    /*$('.annabelleDiv').prepend('<button class="nextBtn" onclick="showScene3()"></button>');*/


}
function escapeButton() {
    location.href= 'player';
}
function showScene3() {

}

