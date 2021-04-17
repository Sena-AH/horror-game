document.getElementById("arrDown").addEventListener("click", down);
document.getElementById("arrLeft").addEventListener("click", left);
document.getElementById("arrRight").addEventListener("click", right);



function down(){
    console.log("down");
}
function left(){
    let imageSet = document.getElementById("baseImage").src;
    console.log(imageSet);

    $('.baseDiv').empty();
    $('.baseDiv').append('<img class="doorScreenImage"src="images/doorScreen.jpg">');
    $('.baseDiv').append('<button class="enterLeftRoomButton" onclick=changeLocation("chucky")></button>')
    $('.baseDiv').append('<button class="enterRightRoomButton" onclick=changeLocation("notDone")></button>')

    // if(imageSet.includes("doorScreen.jpg")){
    //     location.href = "jigsaw";
    // }
}
function right(){
    // let imageSet = document.getElementById("baseImage").src;
    // if(imageSet.includes("BaseScreen.jpg")){
        $('.baseDiv').empty();
        $('.baseDiv').append('<img class="doorScreenImage"src="images/doorScreen.jpg">');
        $('.baseDiv').append('<button class="enterLeftRoomButton" onclick=changeLocation("jigsaw")></button>')
        $('.baseDiv').append('<button class="enterRightRoomButton" onclick=changeLocation("notDone")></button>')

    // }
    // if(imageSet.includes("BaseScreen.jpg")){
    //
    // }
}

function changeLocation(thePath){
    location.href= thePath;
}
