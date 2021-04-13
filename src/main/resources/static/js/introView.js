
document.getElementById("introPart2").style.display="none";
document.getElementById("introPart3").style.display="none";
document.getElementById("introPart4").style.display="none";
document.getElementById("doorIntro").style.display="none";
document.getElementById("gameStart").style.display="none";
document.getElementById("gameStartImg").style.display="none";
document.getElementById("doorIntroImg").style.display="none";
document.getElementById("IntroBase2").style.display="none";
showText();



function showText(){

    let Img1 = document.getElementById("baseImage").src;
    let Img2 = document.getElementById("IntroBase2").src;
    /*if(onclick*/

    document.getElementById("introPart2").style.display="block";
    document.getElementById("introPart1").style.display="none";

    if(Img1.includes("introPart2")) {
        document.getElementById("introPart3").style.display="block";
        document.getElementById("introPart2").style.display="none";
    }
    if(Img1.includes("introPart3")) {
        document.getElementById("IntroBase2").style.display="block";
        document.getElementById("introPart4").style.display="block";
        document.getElementById("IntroBase").style.display="none";
        document.getElementById("introPart3").style.display="none";
    }
    if(Img2.includes("introPart4")) {
        document.getElementById("gameStartImg").style.display="block";
        document.getElementById("gameStart").style.display="block";
        document.getElementById("introPart4").style.display="none";
    }

    if(Img2.includes("gameStart")) {
        document.getElementById("doorIntroImg").style.display="block";
        document.getElementById("doorIntro").style.display="block";
        document.getElementById("gameStart").style.display="none";
    }
  /*  if(onclick) {*/
        /*Till sist. Klickar du på den sista bilden så hänvisas du till en ny sida.*/


}