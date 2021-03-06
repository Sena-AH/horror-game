    let playerItems = [];

    document.getElementById("showItemsBtn").addEventListener("click", showItems);
    ajaxGet();
    let playerName;

    function addItem(items){
        let item = items.itemName;
        let itemId = items.id;
        console.log(itemId);
        let imageSource = "/images/"+item+".jpg";
        $('.itemsDiv').append('<div class="itemSmallDiv'+itemId+' chuckyItemSmallDiv" id="itemSmallDiv'+itemId+'"><button class="item'+itemId+'" id="itemBtn'+itemId+'" onclick="item'+itemId+'()"><img id="itemImage'+itemId+'" src="'+imageSource+'" 70x70></button></div>')
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
        // if()
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


    function ajaxGet() {
        $('.item1').remove();
        $('.item2').remove();
        $('.item3').remove();
        $('.item4').remove();

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
    }

    function ajaxPut(itemId) {
        let newItemTest = {
            id: itemId,
            attackPoints: '3',
            itemName: 'Exorcist',
            specialAbility: 'Exorcising demons'
        }
        console.log(newItemTest);

        $.ajax({
            type: 'PUT',
            url: 'api/items/' + itemId,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(newItemTest),
            success: function () {
                ajaxGet();
                console.log("success");
            },
            error: function () {
                alert('Couldnt change item');
            }
        });
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

    document.getElementById("doorClickButton").addEventListener("click", changeImage);

    function changeImage() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img class="chuckypic1"src="images/chuckydoorspeach.png">');
        $('.chuckymain').append('<button class="fightBtn" id="fightButton" onclick="fightButtonPress()">fight</button>');
        $('.chuckymain').append('<button class="escapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
    }

    function fightButtonPress() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/chuckyfight1.jpg">');
        $('.chuckymain').append('<button class="chuckyitemBtn chuckyfirstfightpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
        $('.chuckymain').append('<button class="chuckyactBtn chuckyfirstfightpageactBtn" id="actButton" onclick="actButtonPress()">act</button>');
        $('.chuckymain').append('<button class="chuckyescapeBtn chuckyfirstfightpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
    }

    function itemButtonPress() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/chuckyfightitems.jpg" class="chuckyFightItemImage">');
        $('.chuckymain').append('<button class="chuckyitemBtn itempageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
        $('.chuckymain').append('<button class="chuckyactBtn itempageactBtn" id="actButton" onclick="actButtonPress()">act</button>');
        $('.chuckymain').append('<button class="chuckyescapeBtn itempageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');

    }

    function actButtonPress() {
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

    function chuckysTurn() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/chuckysturn.jpg">');
        $('.chuckymain').append('<button class="chuckyitemBtn actpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
        $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="actButton" onclick="act300()">act</button>');
        $('.chuckymain').append('<button class="chuckyescapeBtn actpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
    }

    function act300() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/act300.jpg">');
        $('.chuckymain').append('<button class="chuckyitemBtn actpageitemBtn" id="itemButton" onclick="itemButtonPress()">items</button>');
        $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="actButton" onclick="act300()">act</button>');
        $('.chuckymain').append('<button class="chuckyescapeBtn actpageescapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');

        $('.chuckymain').append('<button class="act1" id="act301" onclick="act301()">act1</button>');
        $('.chuckymain').append('<button class="act2" id="act302" onclick="act302()">act2</button>');
        $('.chuckymain').append('<button class="act3" id="act303" onclick="act303()">act3</button>');
    }

    function act301() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/act301.jpg">');
        $('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="gameOver()">Full Page</button>');
    }

    function act302() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/act302.jpg">');
        $('.chuckymain').append('<button class="fullPageButton" id="youWin" onclick="youWin()">YOU WIN</button>');

    }

    function act303() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/act303.jpg">');
        $('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="gameOver()">Full Page</button>');
    }

    function gameOver() {
        let chuckyLaugh = new sound("/mp3/ChuckyLaughSoundEffect.mp3");
        chuckyLaugh.play();
        console.log("hej!")
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/chuckyGameOver.jpg">');
        $('.chuckymain').append('<button class="fullPageButton" id="gameOver" onclick="escapeButtonPress()">GAME OVER</button>');

    }

    function youWin() {

        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/actwin.jpg">');
        $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn" id="chuckyContinueButton" onclick="chuckyGone2()">continue</button>');
    }

    function chuckyGone2() {

        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/actwinchuckygone.jpg">');
        $('.chuckymain').append('<button class="doorclick doorclickexit" id="doorClickButton" onclick="treasureRoom()">door</button>');
        $('.chuckymain').append('<button id="back" class="back" onclick="escapeButtonPress()">down</button>');

    }


    function chuckyGone() {

        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/actwinchuckygone.jpg">');
        $('.chuckymain').append('<button class="doorclick doorclickexit" id="doorClickButton" onclick="treasureRoom()">door</button>');
        $('.chuckymain').append('<button id="back" class="back" onclick="escapeButtonPress()">down</button>');

    }


    function treasureRoom() {
        $('.chuckymain').empty();
        $('.chuckymain').append('<img src="/images/treasure.jpg">');
        $('.chuckymain').append('<button class="treasureButton" id="treasure" onclick="treasureItem()">treasure</button>');
        $('.chuckymain').append('<button id="back" class="back" onclick="chuckyGone()">down</button>');
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

    function appendButtons() {
        $('.removeAndAdd1').remove();
        $('.removeAndAdd2').remove();
        $('.removeAndAdd3').remove();
        $('.removeAndAdd4').remove();
        $('.itemSmallDiv4').append('<button class="removeAndAdd4"onclick="ajaxPut(4)">REPLACE ITEM 4</button>')
        $('.itemSmallDiv3').append('<button class="removeAndAdd3"onclick="ajaxPut(3)">REPLACE ITEM 3</button>')
        $('.itemSmallDiv2').append('<button class="removeAndAdd2"onclick="ajaxPut(2)">REPLACE ITEM 2</button>')
        $('.itemSmallDiv1').append('<button class="removeAndAdd1"onclick="ajaxPut(1)">REPLACE ITEM 1</button>')
    }



    function treasureItem() {

        $('.chuckymain').empty();
        showItems();
        $('.chuckymain').append('<img src="/images/treasuretext.jpg">');
        $('.chuckymain').append('<p class="treasureText">Congratulations ' + playerName + ' ! You found an exorcist!</p>');
        $('.chuckymain').append('<button class="chuckyitemBtn actpageitemBtn takeBtn" id="take" onclick="addExorcist()">Take</button>');
        $('.chuckymain').append('<button class="chuckyactBtn actpageactBtn replaceBtn" id="replace" onclick="appendButtons()" >replace</button>');
        $('.chuckymain').append('<button class="chuckyescapeBtn actpageescapeBtn returnBtn" id="return" onclick="chuckyGone()">return</button>');

    }

    function addExorcist(){

            let item = 'Exorcist';
            let itemId = 5;
            let imageSource = "/images/"+item+".jpg";
            $('.itemsDiv').append('<div class="itemSmallDiv'+itemId+' chuckyItemSmallDiv" id="itemSmallDiv'+itemId+'"><button class="item'+itemId+'" id="itemBtn'+itemId+'" onclick="item'+itemId+'()"><img id="itemImage'+itemId+'" src="'+imageSource+'" 70x70></button></div>')
        playerItems.push(itemId);

    }
    function escapeButtonPress() {
        location.href = 'player';
    }



