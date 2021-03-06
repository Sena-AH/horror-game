

document.getElementById("fightBtn").addEventListener("click", fightButton);
document.getElementById("escapeBtn").addEventListener("click", escapeButton);
document.getElementById("showItemsBtn").addEventListener("click", showItems);
/*document.getElementById("itemsBtn").addEventListener("click", showItems);*/
let annabelleLaugh= new sound("/mp3/annabelleLaugh.mp3");
let victorySound= new sound("/mp3/victorySound.mp3");
let playerItems = [];
let playerName;

$.ajax({
    type: 'GET',
    url: 'api/items',
    success: function (items) {
        console.log('success', items);
        $.each(items, function (i, item) {
            addItem(item);
        });
    },
    error: function () {
        alert('Couldnt find any items');
    }
});

function addItem(items){
    let item = items.itemName;
    let itemId = items.id;
    console.log(itemId);
    let imageSource = "/images/"+item+".jpg";
    $('.itemsDiv').append('<div class="itemSmallDiv'+itemId+'" id="itemSmallDiv'+itemId+'"><button class="item'+itemId+'" id="itemBtn'+itemId+'" onclick="item'+itemId+'()"><img id="itemImage'+itemId+'" src="'+imageSource+'" 70x70></button></div>')
    playerItems.push(itemId);
}
function showItems(){
    console.log($(".itemsDiv").is(':visible'));
    if($(".itemsDiv").is(':visible')){
        $(".itemsDiv").hide();
    }
    else{
        $(".itemsDiv").show();
    }
}

function item1(){
    console.log("item 0");
    $('.deleteButton1').remove();
    $('.deleteButton2').remove();
    $('.deleteButton3').remove();
    $('.deleteButton4').remove();
    $('.itemSmallDiv1').append('<button class="deleteButton1" onclick="deleteItem1()">DELETE</button>');
}
function deleteItem1(){
    let itemSmallDivRemove = document.getElementById("itemSmallDiv1");
    $.ajax({
        type: 'DELETE',
        url: 'api/items/'+playerItems[0],
        success: function () {
            itemSmallDivRemove.remove();
            console.log("success");
        },
        error: function () {
            alert('Couldnt find any items');
        }
    });
}
function item2(){
    console.log("item 1");
    $('.deleteButton1').remove();
    $('.deleteButton2').remove();
    $('.deleteButton3').remove();
    $('.deleteButton4').remove();
    $('.itemSmallDiv2').append('<button class="deleteButton2" onclick="deleteItem2()">DELETE</button>');

}
function deleteItem2(){
    let itemSmallDivRemove = document.getElementById("itemSmallDiv2");
    $.ajax({
        type: 'DELETE',
        url: 'api/items/'+playerItems[1],
        success: function () {
            itemSmallDivRemove.remove();
            console.log("success");
        },
        error: function () {
            alert('Couldnt find any items');
        }
    });
}
function item3(){
    console.log("item 2");
    $('.deleteButton1').remove();
    $('.deleteButton2').remove();
    $('.deleteButton3').remove();
    $('.deleteButton4').remove();
    $('.itemSmallDiv3').append('<button class="deleteButton3" onclick="deleteItem3()">DELETE</button>');

}
function deleteItem3(){
    let itemSmallDivRemove = document.getElementById("itemSmallDiv3");
    $.ajax({
        type: 'DELETE',
        url: 'api/items/'+playerItems[2],
        success: function () {
            itemSmallDivRemove.remove();
            console.log("success");
        },
        error: function () {
            alert('Couldnt find any items');
        }
    });
}
function item4(){
    console.log("item 3");
    $('.deleteButton1').remove();
    $('.deleteButton2').remove();
    $('.deleteButton3').remove();
    $('.deleteButton4').remove();
    $('.itemSmallDiv4').append('<button class="deleteButton4" onclick="deleteItem4()">DELETE</button>');

}
function deleteItem4(){
    let itemSmallDivRemove = document.getElementById("itemSmallDiv4");
    $.ajax({
        type: 'DELETE',
        url: 'api/items/'+playerItems[3],
        success: function () {
            itemSmallDivRemove.remove();
            console.log("success");
        },
        error: function () {
            alert('Couldnt find any items');
        }
    });
}
function annabelleSound() {
    annabelleLaugh.play();
}

function winnerSound() {
    victorySound.play();
}

function pauseAnnabelleMusic(){
    annabelleLaugh.stop();
}

$.ajax({
    type: 'GET',
    url: 'api/player',
    success: function (players) {
        $.each(players, function (i, player) {
            console.log(player.name);
            playerName = player.name;
        });
    },
    error: function () {
        alert('Couldnt find any items');
    }
});

function fightButton() {
    annabelleSound();
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene1" src="images/annabelleFight/annabelleScene1.jpg">');
    $('.annabelleDiv').append('<p class="talkBubble2">I will defeat you '+playerName+'!</p>');
    $('.annabelleDiv').append('<button class="nextBtn" onclick=showScene2()></button>');

}
function showScene2() {
    pauseAnnabelleMusic();
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene2" src="images/annabelleFight/annabelleScene2.jpg">');
    $('.annabelleDiv').append('<button class="nextBtn" onclick=showScene3()></button>');

}
function showScene3() {

        $('.annabelleDiv').empty();
        $('.annabelleDiv').append('<img class="annabelleScene3" src="images/annabelleFight/annabelleScene3.jpg">');
        $('.annabelleDiv').append('<button class="nextBtn" onclick=showScene4()></button>');
}

function showScene4() {

    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene4" src="images/annabelleFight/annabelleScene4.jpg">');
    $('.annabelleDiv').append('<p class="talkBubble3">Haha did you really thought you could beat me with that!!</p>');
    $('.annabelleDiv').append('<button class="nextBtn" onclick=showScene5()></button>');
}
function showScene5() {
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene5" src="images/annabelleFight/annabelleScene5.jpg">');
    $('.annabelleDiv').append('<button class="nextBtn" onclick=winnerScene()></button>');
}
function winnerScene() {

    winnerSound();
    $('.annabelleDiv').empty();
    $('.annabelleDiv').append('<img class="annabelleScene4" src="images/annabelleFight/youWin.jpg">');
    $('.annabelleDiv').append('<button class="nextBtn" onclick= escapeButton()></button>');
}
function escapeButton() {
    location.href= 'player';
}

    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function () {
            this.sound.play();
        }
        this.stop = function () {
            this.sound.pause();
        }
    }
