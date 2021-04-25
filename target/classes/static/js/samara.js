


$(function() {

    let playerItems = [];



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
        $('#itemDiv').show();

        let i = 1;
        playerItems.forEach(function(item)    {
            console.log(item);
            let $itemId = "item" + i;
            $('#itemDiv').append("<img class='itemImage' id='" + $itemId + "' src=>");
            let $itemPath = "/images/" + item + ".jpg";

            $("#" + $itemId).attr("src", $itemPath);

            i++;

        });

    });



});

