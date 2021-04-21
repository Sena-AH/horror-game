
$(function ()   {



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

});