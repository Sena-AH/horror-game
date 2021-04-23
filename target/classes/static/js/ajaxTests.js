
$(function ()   {

    // $.ajax({
    //     type: 'GET',
    //     url: 'api/player_item',
    //     success: function (player_item) {
    //         console.log('success', player_item);
    //         $.each(player_item, function (i, player_item_list) {
    //             createPlayerItemsList(player_item_list);
    //         });
    //     },
    //     error: function () {
    //         alert('Couldnt find any players or items');
    //     }
    // });
    //
    // function createPlayerItemsList(player_item_list)    {
    //          let playerId = player_item_list.id;
    //          let itemName = player_item_list.itemName;
    //
    //          console.log(playerId);
    //          console.log(itemName);
    // }




    let player_items    = {
        "id" : "16",
        "item_name" : "owl",
        "player_id" : "5"
    };


    $.ajax({
        type: 'GET',
        url: 'api/player_item',
        success: function (player_item) {
            console.log('success', player_item);
            $.each(player_item, function (i, player_item_list) {
                createPlayerItemsList(player_item_list);
            });
        },
        error: function () {
            alert('Couldnt find any players or items');
        }
    });

    function createPlayerItemsList(player_item_list)    {
             let playerId = player_item_list.id;
             let itemName = player_item_list.itemName;

             console.log(playerId);
             console.log(itemName);
    }




    $.ajax({
        type: 'POST',
        url: 'api/player_item/',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        data: JSON.stringify(player_items),
        success: function() {
            console.log(player_items);

        },
        error: function () {
            alert('POST of new player_items failed');
        }
    });




    $.ajax({
        type: 'DELETE',
        url: '/api/player_item/10',
        success: function () {
            alert("You'll have to make a GET-request if you want to verify from DB ")
        }
    });



});