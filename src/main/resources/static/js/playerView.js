document.getElementById("arrDown").addEventListener("click", down);
document.getElementById("arrLeft").addEventListener("click", left);
document.getElementById("arrRight").addEventListener("click", right);



function down(){
    console.log("down");
}
function left(){
    $('.baseDiv').empty();
    $('.baseDiv').append('<img class="doorScreenImage"src="images/doorScreen.jpg">');
    $('.baseDiv').append('<button class="enterLeftRoomButton" onclick=changeLocation("chucky")></button>')
    $('.baseDiv').append('<button class="enterRightRoomButton" onclick=changeLocation("notDone")></button>')
}
function right(){
        $('.baseDiv').empty();
        $('.baseDiv').append('<img class="doorScreenImage"src="images/doorScreen.jpg">');
        $('.baseDiv').append('<button class="enterLeftRoomButton" onclick=changeLocation("jigsaw")></button>')
        $('.baseDiv').append('<button class="enterRightRoomButton" onclick=changeLocation("notDone")></button>')
}

function changeLocation(thePath){
    location.href= thePath;
}
