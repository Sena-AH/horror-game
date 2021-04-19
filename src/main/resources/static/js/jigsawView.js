$.ajax({
    type: 'GET',
    url: 'api/player',
    success: function(players){
        console.log('success', players);
    },
    error: function(){
        alert('Couldnt find any players');
    }
})

startJigsaw();

function startJigsaw(){
    $('.mainDiv').append('<h3 class="jigsawGreeting">Hello there "name", I want to play a game</h3>');
    $('.mainDiv').prepend('<button id= "screen1Answer1Btn" class="screen1Answer1" onclick="screenOneAnswerOne()"></button>');
    $('.mainDiv').prepend('<button id= "screen1Answer2Btn" class="screen1Answer2" onclick="screenOneAnswerTwo()"></button>');
}

/*
* If you pick answer one you go this path with functions
* */
function screenOneAnswerOne(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawScreenAnswer1Screen2.jpg">');
    $('.mainDiv').append('<button class="enterRoomButton" onclick="enterRoomBtn()"></button>');
}

function enterRoomBtn(){
    let mohaha = new sound("/mp3/jigsawEvilLaugh.mp3");
    mohaha.play();
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="jigsawGameScreenOne" src="images/jigsawFight/jigsawGameScreen1.jpg">');
    $('.mainDiv').append('<button class="nextButton" onclick=nextChatBubble()></button>');
}

function nextChatBubble(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="jigsawGameScreenOne" src="/images/jigsawFight/jigsawGameScreen2.jpg">');
    $('.mainDiv').append('<button class="nextButton" onclick=nextGameScreen()></button>');
}

function nextGameScreen(){
    $('.mainDiv').empty();
    setTimeout(gameOver, 60000);
    $('.mainDiv').append('<img class="jigsawGameScreenOne" src="/images/jigsawFight/jigsawGameScreen3.jpg">')
    $('.mainDiv').append('<button class="jigsawGameClueNumberOne" onclick=clueOne()></button>')
    $('.mainDiv').append('<button class="jigsawGameClueNumberTwo" onclick=clueTwo()></button>')
    $('.mainDiv').append('<button class="jigsawGameClueNumberThree" onclick=clueThree()></button>')
    $('.mainDiv').append('<button id="enterKeycodeBtn" class="enterKeycodeButton" onclick=enterKeycode()></button>')
}

function enterKeycode(){
    if(document.getElementById("keycodePic") != null){
        document.getElementById("keycodePic").remove();
        document.getElementById("keycodeInputVal").remove();
        document.getElementById("submitBtn").remove();
    }
    else{
        $('.mainDiv').append('<img id="keycodePic" class="keycodeGenerator"src="images/jigsawFight/jigsawKeycodeGenerator.jpg">');
        $('.mainDiv').append('<input class="submitInput" id="keycodeInputVal" class="keycodeInputValue" maxlength="6">')
        $('.mainDiv').append('<button id="submitBtn" class="submitButton" onclick=checkVal()>Enter</button>')
    }
}

function checkVal(){
    if(document.getElementById("keycodeInputVal").value === "452395"){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="/images/jigsawFight/jigsawYouHaveWon.jpg">')
        setTimeout(function(){
            $('.mainDiv').empty();
            $('.mainDiv').append('<img class="answer1Screen2" src="/images/winner_frame.jpg">')
        },10000);
        setTimeout(function(){
            location.href="player"
        }, 15000)
    }
}


function clueOne(){
    $('.clueOne').remove();
    $('.mainDiv').append('<button class="clueOne"></button>')
}

function clueTwo(){
    $('.clueTwo').remove();
    $('.mainDiv').append('<button class="clueTwo"></button>')

}

function clueThree(){
    $('.clueThree').remove();
    $('.mainDiv').append('<button class="clueThree"></button>')

}

function gameOver(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="jigsawGameScreenOne" src="/images/jigsawFight/gameOverScreen.jpg">');
}



/*
* If you pick answer one you go this path with functions
* */
function screenOneAnswerTwo(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawScreen2Answer2.jpg">');
    $('.mainDiv').append('<button id="question1Btn" class="question1Button" onclick="screenTwoAnswerOne()"></button>')
    $('.mainDiv').append('<button id="question2Btn" class="question2Button" onclick="screenTwoAnswerTwo()"></button>')
    $('.mainDiv').append('<button id="question3Btn" class="question3Button" onclick="screenTwoAnswerThree()"></button>')
}

function screenTwoAnswerOne(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawAnswer1Screen3.jpg">');
    $('.mainDiv').append('<button id="question1BtnScreen3" class="question1ButtonScreen3" onclick="screenThreeAnswerOne()"></button>')
    $('.mainDiv').append('<button id="question2BtnScreen3" class="question2ButtonScreen3" onclick="screenThreeAnswerTwo()"></button>')
    $('.mainDiv').append('<button id="question3BtnScreen3" class="question3ButtonScreen3" onclick="screenThreeAnswerThree()"></button>')
}
function screenTwoAnswerTwo(){
    $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawAnswer2Screen3.jpg">');
}
function screenTwoAnswerThree(){
    location.href="player";
}


function screenThreeAnswerOne(){

}
function screenThreeAnswerTwo(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawAnswer2Screen4.jpg">');
    $('.mainDiv').append('<button id="question1BtnScreen4" class="question1ButtonScreen4" onclick="questionOneScreenFour()"></button>')
    $('.mainDiv').append('<button id="question2BtnScreen4" class="question2ButtonScreen4" onclick="questionTwoScreenFour()"></button>')
}
function screenThreeAnswerThree(){

}
function questionOneScreenFour(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawScreenFive.jpg">');
}
function questionTwoScreenFour(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawScreenFourAnswerTwo.jpg">');
    $('.mainDiv').append('<button id="enterRoomBtn" class="enterRoomButton" onclick=changeLocation("player")></button>')
}

function changeLocation(thePath){
    location.href= thePath;
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