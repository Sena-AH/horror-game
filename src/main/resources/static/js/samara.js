


$(function() {

    let playerItems = [];
    let clicked = false;


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

    function addItem(item) {
        let itemName = item.itemName;
        playerItems.push(itemName);

    }

    setTimeout(function () {
        $('.mainDiv').empty();
        $('.mainDiv').append('<img id="fightSamara" src="/images/fight_1_samara.jpg">');
        $('.mainDiv').append('<p id="greeting">A wild Samara appeared "YOU CANT RUN FROM ME!!" <br>Click fight to hurt her or escape to run</p>');
        $('.mainDiv').append('<button id="fightButton">FIGHT</button>');
        $('.mainDiv').append('<button id="escapeButton">ESCAPE</button>');
        $('.mainDiv').append('<button class ="itemButton" id="itemButton">ITEMS</button>');
        $('.mainDiv').append('<div id="itemDiv"></div>');
        $('#itemDiv').hide();
    }, 1500);



    $(document).on("click", '.itemButton', function () {


        if (clicked === false) {
            $('#itemDiv').show();

            let i = 1;
            playerItems.forEach(function (item) {
                console.log(item);
                let $itemId = "item" + i;
                $('#itemDiv').append("<img class='itemImage' id='" + $itemId + "' src=>");
                let $itemPath = "/images/" + item + ".jpg";

                $("#" + $itemId).attr("src", $itemPath);

                i++;

            });
        }   else    {
            $('#itemDiv').hide();
        }
        /*
        for (i = 0; i < playerItems; i++)   {
            console.log(playerItems[i]);
            let itemId = playerItems[i] + (i+1);
            console.log(itemId);
            let $itemPath = "/images/" + playerItems[i] + ".jpg";
            console.log($itemPath);
        }
        */
        /*
        playerItems.forEach(function (item) {
            console.log(item);
            console.log(playerItems.length);
            let $itemPath = "/images/" + item.toLowerCase() + ".jpg";

            console.log($itemPath);

            for (let i = 0; i < playerItems.length;  i++)   {
                let itemIndex = item + (i+1);
                $('#itemDiv').append("<img id='" + itemIndex + "' src='" + $itemPath + "'>")
            }*/
            /*
            $($body).append("<img src='"+ $googleURL + "'></img>");
            $('#itemDiv').append("<img src='" + $itemPath + "'>");
            $()
            */
           /* if (item === "Priest") {
                $('.itemImage').remove();
                $('#itemDiv').append('<img class="itemImage" src="/images/priest.jpg">');
            } //else if (playerItems === "Garlic") {
            //     $('#itemDiv').append('img 2');
            // }*/
       /* });*/
    });



});



/*
$(function()    {
    document.getElementById("samaraWell").style.display = "none";
    document.getElementById("winnerFrame").style.display = "none";
    document.getElementById("fightSamara").style.display = "none";
    document.getElementById("endFrame").style.display = "none";
    document.getElementById("heart1").style.display = "none";
    document.getElementById("heart2").style.display = "none";
    document.getElementById("heart3").style.display = "none";
    document.getElementById("lifeAndScore").style.display = "none";
    document.getElementById("greeting").style.display = "none";
    document.getElementById("fightButton").style.display = "none";
    document.getElementById("escapeButton").style.display = "none";
    document.getElementById("continueButton").style.display = "none";
    document.getElementById("samaraLife").style.display = "none";
})




setTimeout(function () {
    document.getElementById("samaraBase").style.display = "none";
    document.getElementById("fightSamara").style.display = "initial";
    document.getElementById("heart1").style.display = "initial";
    document.getElementById("heart2").style.display = "initial";
    document.getElementById("heart3").style.display = "initial";
    document.getElementById("lifeAndScore").style.display = "initial";
    document.getElementById("greeting").style.display = "initial";
    document.getElementById("fightButton").style.display = "initial";
    document.getElementById("escapeButton").style.display = "initial";
    document.getElementById("samaraLife").style.display = "initial";
}, 3000);


let clickIndex = 0;

function hurtSamara()   {
    document.getElementById("greeting").innerText = "Stop it! You're hurting me";
    clickIndex = clickIndex +1;

    if (clickIndex == 1)    {
        document.getElementById("samaraLife3").style.display = "none";
        document.getElementById("greeting").innerText = "AAa you took one life from me! "
        setTimeout(function ()  {
            document.getElementById("greeting").innerText = "Make your next move!"
        }, 1500);
    }

    if (clickIndex == 2)    {
        document.getElementById("samaraLife2").style.display = "none";
        setTimeout(function ()  {
            document.getElementById("fightSamara").style.display = "none";
            document.getElementById("greeting").style.fontSize = "2em";
            document.getElementById("greeting").innerText = "Dont push me again!"
            document.getElementById("samaraWell").style.display = "initial";

        }, 1500);
    }



    if (clickIndex == 3)    {
        document.getElementById("samaraLife1").style.display = "none";
        document.getElementById("greeting").style.display = "none";
        setTimeout(function ()  {
            document.getElementById("samaraWell").style.display = "none";
            document.getElementById("winnerFrame").style.display = "none";
            document.getElementById("fightButton").style.display = "none";
            document.getElementById("escapeButton").style.display = "none";
            document.getElementById("lifeAndScore").style.display = "none";
            document.getElementById("samaraLife").style.display = "none";
            document.getElementById("heart1").style.display = "none";
            document.getElementById("heart2").style.display = "none";
            document.getElementById("heart3").style.display = "none";
        }, 1500);

        setTimeout(function ()   {
            document.getElementById("winnerFrame").style.display = "initial";
        }, 2000);

        setTimeout(function ()   {
            document.getElementById("winnerFrame").style.display = "none";
            document.getElementById("fightButton").style.display = "none";
            document.getElementById("escapeButton").style.display = "none";
            document.getElementById("lifeAndScore").style.display = "none";
            document.getElementById("samaraLife").style.display = "none";
            document.getElementById("heart1").style.display = "none";
            document.getElementById("heart2").style.display = "none";
            document.getElementById("heart3").style.display = "none";
            document.getElementById("endFrame").style.display = "initial";
            document.getElementById("greeting").style.display = "initial";
            document.getElementById("greeting").style.fontSize = "1em";
            document.getElementById("greeting").innerText = "Your reward is this Item! Be sure to use it wisely!";
            document.getElementById("continueButton").style.display = "initial";
        }, 7000);
    }
}

function escapeMessage()    {
    document.getElementById("greeting").style.fontSize = "1em";
    document.getElementById("fightSamara").style.display = "initial";
    document.getElementById("greeting").innerText = "Hahaha, you can't run from me morron!! FIGHT ME!!";
}

function backToCorridor()   {

}*/