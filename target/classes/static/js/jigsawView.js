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

function screenOneAnswerOne(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawScreenAnswer1Screen2.jpg">');
    $('.mainDiv').append('<button class="enterRoomButton" onclick="enterRoomBtn()"></button>');
}

function enterRoomBtn(){
    let mohaha = new sound("/mp3/jigsawEvilLaugh.mp3");
    mohaha.play();
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="jigsawGameScreenOne" src="images/jigsawGameScreen1.jpg">');
    $('.mainDiv').append('<button class="nextButton" onclick=nextChatBubble()></button>');
}

function nextChatBubble(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="jigsawGameScreenOne" src="/images/jigsawGameScreen2.jpg">');
    $('.mainDiv').append('<button class="nextButton" onclick=nextGameScreen()></button>');
}

function nextGameScreen(){
    $('.mainDiv').empty();
    $('.mainDiv').append('<img class="jigsawGameScreenOne" src="/images/jigsawGameScreen3.jpg">')
    $('.mainDiv').append('<button class="jigsawGameClueNumberOne"></button>')
    $('.mainDiv').append('<button class="jigsawGameClueNumberTwo"></button>')
    $('.mainDiv').append('<button class="jigsawGameClueNumberThree"></button>')
}

function screenOneAnswerTwo(){
    console.log("this is oneTWO")
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