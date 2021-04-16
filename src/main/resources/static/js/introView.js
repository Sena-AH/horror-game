$('#introBase2Img').hide();
$('#introText2').hide();
$('#introText3').hide();
$('#introText4').hide();
$('#doorIntroText').hide();
$('#doorIntroImg').hide();
$('#gameStartText').hide();
$('#gameStartImg').hide();

/*document.getElementById("introPart2").style.display="none";
document.getElementById("introPart3").style.display="none";
document.getElementById("introPart4").style.display="none";
document.getElementById("doorIntro").style.display="none";
document.getElementById("gameStart").style.display="none";
document.getElementById("gameStartImg").style.display="none";
document.getElementById("doorIntroImg").style.display="none";
document.getElementById("IntroBase2").style.display="none";*/
showText();



function showText(){

    let baseImg1 = document.getElementById("introBaseImg").src;
    let baseImg2 = document.getElementById("introBase2Img").src;
    let baseImg3 = document.getElementById("gameStartImg").src;
    /*if(onclick*/

    $('introText1').hide();
    $('introText2').show();


   /* document.getElementById("introText2").style.display="block";
    document.getElementById("introText1").style.display="none";
*/    if(baseImg1.includes("introText2")) {
        $('introText2').hide();
        $('introText3').show();

       /* document.getElementById("introText3").style.display="block";
        document.getElementById("introText2").style.display="none";*/
    }
    if(baseImg1.includes("introText3")) {
        $('introBaseImg').hide();
        $('introText3').hide();
        $(baseImg2).show();
        $('introText4').show();

        /*document.getElementById("IntroBase2Img").style.display="block";
        document.getElementById("introText4").style.display="block";
        document.getElementById("IntroBaseImg").style.display="none";
        document.getElementById("introText3").style.display="none";*/
    }
    if(baseImg2.includes("introText4")) {
        $(baseImg2).hide();
        $('introText4').hide();
        $(baseImg3).show();
        $('gameStartText').show();

        /*document.getElementById("gameStartImg").style.display="block";
        document.getElementById("gameStartText").style.display="block";
        document.getElementById("introText4").style.display="none";*/
    }

    if(baseImg3.includes("gameStartText")) {
        $(baseImg3).hide();
        $('gameStartText').hide();
        $('doorIntroImg').show();
        $('doorIntroText').show();
        /*document.getElementById("doorIntroImg").style.display="block";
        document.getElementById("doorIntroText").style.display="block";
        document.getElementById("gameStartImg").style.display="none";*/
    }
  /*  if(onclick) {*/
        /*Till sist. Klickar du på den sista bilden så hänvisas du till en ny sida.*/


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
}