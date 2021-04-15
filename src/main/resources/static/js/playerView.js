document.getElementById("arrDown").addEventListener("click", down);
document.getElementById("arrLeft").addEventListener("click", left);
document.getElementById("arrRight").addEventListener("click", right);



function down(){
    console.log("down");
}
function left(){
    let imageSet = document.getElementById("baseImage").src;
    console.log(imageSet);
    if(imageSet.includes("doorScreen.jpg")){
        location.href = "jigsaw";
    }
}
function right(){
    let imageSet = document.getElementById("baseImage").src;
    if(imageSet.includes("BaseScreen.jpg")){
        console.log("thisIsBaseScreen");
        document.getElementById("baseImage").src="images/doorScreen.jpg";
        document.getElementById("arrLeft").style.transform = "rotate(90deg)";
        document.getElementById("arrRight").style.transform = "rotate(90deg)";
        location.href = "chucky";
    }
}