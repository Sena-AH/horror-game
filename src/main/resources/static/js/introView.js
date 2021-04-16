$('#introBase2Img').hide();
$('#introText2').hide();
$('#introText3').hide();
$('#introText4').hide();
$('#doorIntroText').hide();
$('#doorIntroImg').hide();
$('#gameStartText').hide();
$('#gameStartImg').hide();

document.getElementById("nextButton").addEventListener("click", clickNext);



    function clickNext(){

    let baseImg1 = document.getElementById("introBaseImg").src;
    let baseImg2 = document.getElementById("introBase2Img").src;
    let baseImg3 = document.getElementById("gameStartImg").src;
    let baseImg4 = document.getElementById("doorIntroImg").src;
    let locationHref = location.href = "player";


    $('introText1').hide();
    $('introText2').show();



    if(baseImg1.includes("introText2")) {
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