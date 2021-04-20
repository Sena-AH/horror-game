


$(function () {


    function addItem(item) {
        $('body').append(
            '<p>' + item.itemName + '<br>' + item.attackPoints + item.specialAbility + '</p>'
        );
    };


    $.ajax({
        type: 'GET',
        url: 'api/items',
        success: function(items){
            console.log('success', items);
            $.each(items, function (i, item) {
                addItem(item);
            });
        },
        error: function(){
            alert('Couldnt find any items');
        }
    });

    $.ajax({
        type: 'GET',
        url: 'api/villain',
        success: function(villains){
            console.log('success', villains);
            $.each(villains, function (i, villain) {

            });
        },
        error: function(){
            alert('Couldnt find any villains');
        }
    });



});


document.getElementById("doorClickButton").addEventListener("click", changeImage);
function changeImage(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img class="chuckypic1"src="images/chuckydoorspeach.png">');
    $('.chuckymain').append('<button class="fightBtn" id="fightButton" onclick="fightButtonPress()">fight</button>');
    $('.chuckymain').append('<button class="escapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
}
function fightButtonPress(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/chuckyfight1.jpg">');
    $('.chuckymain').append('<button class="chuckyitemBtn chuckyfirstfightpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn chuckyfirstfightpageactBtn" id="actButton" onclick="actButtonPress()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn chuckyfirstfightpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
}

function itemButtonPress(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/chuckyfightitems.jpg" class="chuckyFightItemImage">');
    $('.chuckymain').append('<button class="chuckyitemBtn itempageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn itempageactBtn" id="actButton" onclick="actButtonPress()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn itempageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');

}

function actButtonPress(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/chuckyfightact.jpg">');
    $('.chuckymain').append('<button class="chuckyitemBtn actpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="actButton" onclick="actButtonPress()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn actpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');

    $('.chuckymain').append('<button class="act1" id="act1" onclick="act1()">act1</button>');
    $('.chuckymain').append('<button class="act2" id="act2" onclick="act2()">act2</button>');
    $('.chuckymain').append('<button class="act3" id="act3" onclick="act3()">act3</button>');
}

function act1() {
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/act1.jpg">');
    $('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="gameOver()">Full Page</button>');

    /*$('.chuckymain').append('<button class="chuckyitemBtn actpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="actButton" onclick="actButtonPress()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn actpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');*/
}
function act2() {
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/act2.jpg">');
    $('.chuckymain').append('<button class="chuckyitemBtn actpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="actButton" onclick="actButtonPress()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn actpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
}
function act3() {
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/act3.jpg">');
    $('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="chuckysTurn()">Full Page</button>');

}

function chuckysTurn(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/chuckysturn.jpg">');
    $('.chuckymain').append('<button class="chuckyitemBtn actpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="actButton" onclick="act300()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn actpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
}

function act300(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/act300.jpg">');
    $('.chuckymain').append('<button class="chuckyitemBtn actpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="actButton" onclick="act300()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn actpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');

    $('.chuckymain').append('<button class="act1" id="act301" onclick="act301()">act1</button>');
    $('.chuckymain').append('<button class="act2" id="act302" onclick="act302()">act2</button>');
    $('.chuckymain').append('<button class="act3" id="act303" onclick="act303()">act3</button>');
}

function act301(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/act301.jpg">');
    $('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="gameOver()">Full Page</button>');
}

function act302(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/act302.jpg">');
    $('.chuckymain').append('<button class="fullPageButton" id="youWin" onclick="youWin()">YOU WIN</button>');

}

function act303(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/act303.jpg">');
    $('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="gameOver()">Full Page</button>');
}

function youWin(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/actwin.jpg">');
    $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="chuckyContinueButton" onclick="chuckyGone()">continue</button>');
}

function chuckyGone(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/actwinchuckygone.jpg">');
    $('.chuckymain').append('<button class="doorclick doorclickexit" id="doorClickButton" onclick="treasureRoom()">door</button>');
    $('.chuckymain').append('<button id="arrDown" class="arrowDown" onclick=changeLocation("player")><img src="@{/images/arrowDown}" width="50x50"></button>');

}

function gameOver(){
    /*let chuckyLaugh = new sound("/mp3/ChuckyLaughSoundEffect.mp3");
    chuckyLaugh.play();*/
    console.log("hej!")
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/chuckyGameOver.jpg">');
    $('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="escapeButtonPress()">GAME OVER</button>');

}

function treasureRoom(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/treasure.jpg">');
    $('.chuckymain').append('<button class="treasureButton" id="treasure" onclick="treasureItem()">treasure</button>');

}
/*
$('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="gameOver()">Full Page</button>');*/

function escapeButtonPress(){
    location.href = 'player';
}

function difficultyAndWeakness(){
    $('.chuckymain').append('<p class="difficulty" id="difficulty"> $getvillain </p>')
}
