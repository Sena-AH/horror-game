 let playerItems = [];
 document.getElementById("showItemsBtn").addEventListener("click", showItems);
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
        $('.itemsDiv').append('<button class="item'+itemId+'" id="itemBtn'+itemId+'" onclick="item'+itemId+'()"><img id="itemImage'+itemId+'" src="'+imageSource+'" 70x70></button>')
        playerItems.push(itemId);
    }
    function showItems(){
        if($(".itemsDiv").is(':visible')){
            $(".itemsDiv").hide();
        }
        else{
            $(".itemsDiv").show();
        }
    }

    function item1(){
        console.log("item 0");
        $('.deleteButton2').remove();
        $('.deleteButton3').remove();
        $('.deleteButton4').remove();
        $('.itemsDiv').append('<button class="deleteButton1" onclick="deleteItem1()">DELETE</button>');
    }
    function deleteItem1(){
        let itemImageAndButton = document.getElementById("itemBtn1");
        console.log(itemImageAndButton);
        $.ajax({
            type: 'DELETE',
            url: 'api/items/'+playerItems[0],
            success: function () {
                itemImageAndButton.remove();
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
        $('.deleteButton3').remove();
        $('.deleteButton4').remove();
        $('.itemsDiv').append('<button class="deleteButton2" onclick="deleteItem2()">DELETE</button>');

    }
    function deleteItem2(){
        let itemImageAndButton = document.getElementById("itemBtn2");
        $.ajax({
            type: 'DELETE',
            url: 'api/items/'+playerItems[1],
            success: function () {
                itemImageAndButton.remove();
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
        $('.deleteButton4').remove();
        $('.itemsDiv').append('<button class="deleteButton3" onclick="deleteItem3()">DELETE</button>');

    }
    function deleteItem3(){
        let itemImageAndButton = document.getElementById("itemBtn3");
        $.ajax({
             type: 'DELETE',
             url: 'api/items/'+playerItems[2],
             success: function () {
                 itemImageAndButton.remove();
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
        $('.itemsDiv').append('<button class="deleteButton4" onclick="deleteItem4()">DELETE</button>');

    }
    function deleteItem4(){
        let itemImageAndButton = document.getElementById("itemBtn4");
        $.ajax({
           type: 'DELETE',
           url: 'api/items/'+playerItems[3],
          success: function () {
               itemImageAndButton.remove();
              console.log("success");
          },
          error: function () {
              alert('Couldnt find any items');
             }
         });
 }
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
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawMockingScreen2.jpg">');
        $('.mainDiv').append('<button id="uglyBtn" class="uglyButton" onclick="keepMocking()"></button>')
        $('.mainDiv').append('<button id="trickAndEscapeBtn" class="trickAndEscapeButton" onclick=changeLocation("player")></button>')
    }
    function keepMocking(){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawIfYouWin.jpg">');
        $('.mainDiv').append('<button id="letsPlayBtn" class="letsPlayButton" onclick="enterRoomBtn()"></button>')
    }
    function screenTwoAnswerThree(){
        location.href="player";
    }


    function screenThreeAnswerOne(){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawDistractedScreen.jpg">');
        $('.mainDiv').append('<button id="escapeScreenFourBtn" class="escapeScreenFourButton" onclick=changeLocation("player")></button>')
    }
    function screenThreeAnswerTwo(){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawAnswer2Screen4.jpg">');
        $('.mainDiv').append('<button id="question1BtnScreen4" class="question1ButtonScreen4" onclick="questionOneScreenFour()"></button>')
        $('.mainDiv').append('<button id="question2BtnScreen4" class="question2ButtonScreen4" onclick="questionTwoScreenFour()"></button>')
    }
    function screenThreeAnswerThree(){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawShocked.jpg">');
        $('.mainDiv').append('<button id="howDoIWinBtn" class="howDoIWinButton" onclick=howYouWin()></button>')
        $('.mainDiv').append('<button id="escapeTrickBtn" class="escapeTrickButton" onclick=changeLocation("player")></button>')

    }
    function howYouWin(){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawHowToWin.jpg">');
        $('.mainDiv').append('<button id="playGameBtn" class="playGameButton" onclick=enterRoomBtn()></button>')
        $('.mainDiv').append('<button id="question3Btn" class="question3Button" onclick=changeLocation("player")></button>')
    }

    function questionOneScreenFour(){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawScreenFive.jpg">');
        $('.mainDiv').append('<button id="question1BtnScreen5" class="question1ButtonScreen5" onclick="questionOneScreenFive()"></button>')
        $('.mainDiv').append('<button id="question2BtnScreen5" class="question2ButtonScreen5" onclick="questionTwoScreenFive()"></button>')

    }
    function questionTwoScreenFive(){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawBikesCrying2.jpg">');
        $('.mainDiv').append('<button id="enterRoomBtn" class="enterRoomButton" onclick=changeLocation("player")></button>')
    }

    function questionOneScreenFive(){
        $('.mainDiv').empty();
        $('.mainDiv').append('<img class="answer1Screen2" src="images/jigsawFight/jigsawBikesCrying.jpg">');
        $('.mainDiv').append('<button id="enterRoomBtn" class="enterRoomButton" onclick=changeLocation("player")></button>')
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