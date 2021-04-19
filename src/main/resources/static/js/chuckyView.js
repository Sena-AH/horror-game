


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
    $('.chuckymain').append('<button class="chuckyitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn" id="actButton" onclick="actButtonPress()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
}

function itemButtonPress(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/chuckyfightitems.jpg">');
    $('.chuckymain').append('<button class="chuckyitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn" id="actButton" onclick="actButtonPress()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');

}

function actButtonPress(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/chuckyfightact.jpg">');
    $('.chuckymain').append('<button class="chuckyitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
    $('.chuckymain').append('<button class="chuckyactBtn" id="actButton" onclick="actButtonPress()">act</button>');
    $('.chuckymain').append('<button class="chuckyescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');

}

function escapeButtonPress(){
    location.href = 'player';
}

function difficultyAndWeakness(){
    $('.chuckymain').append('<p class="difficulty" id="difficulty"> $getvillain </p>')
}
