


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


});
/*
$(function () {
    let $villain = $('#villain');

    function getVillain(villain) {
        $villain.append(
            '<tr>' +
            '<td><span class="villainName">' + villain.name + '</span><input class="edit name"></td>' +
            '<td><span class="villainLife ">' + animal.type + '</span><input class="edit type"></td>' +
            '<td><button class="btn remove" data-id=' + animal.id + '>Ta bort</button></td>' +
            '<td><button class="btn editAnimal noEdit" data-id="' + animal.id + '">Ändra</button>' +
            '<button class="btn saveEdit edit" data-id="' + animal.id + '">Spara</button>' +
            '<button class="btn cancelEdit edit">Avbryt</button></td>' +
            '</tr>'
        );
    }

    $.ajax({
        type: 'GET',
        url: '/api/villain/chucky',
        success: function (villains) {
            console.log('success', villains);
            $.each(villains, function (i, villain) {
                getVillainById(villain);
            });
        },
        error: function () {
            alert('No villains were found');
        }
    });
});

*/

/*
$('.btnbackground').onclick.append('<img src=th:src="@{/images/Chuckydoorspeach.png}">');*/

/*$('.btnbackground').on("click", function(){
    $(this).css({'background' : '@{/images/Chuckydoorspeach.png}');
});*/

/*$('.doorclick').click(function() {
    let imageUrl =
        '/static/images/Chuckydoorspeach.png';
    $('.chuckymain').css("background-image", 'url(' + imageUrl + ')');
});*/

/*$('.doorclick').on(
    'click', function(){
        $('#change-image').attr('src','/images/chuckydoor.png');
    }
);*/

document.getElementById("doorClickButton").addEventListener("click", changeImage);
function changeImage(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img class="chuckypic1"src="images/chuckydoorspeach.png">');
    $('.chuckymain').append('<button class="fightBtn" id="fightButton" onclick="fightButtonPress()">fight</button>')
    $('.chuckymain').append('<button class="escapeBtn" id="escapeButton" onclick="escapeButtonPress()">escape</button>');
}
function fightButtonPress(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/chuckyfirstfight.jpg">');
}
function escapeButtonPress(){
    location.href = 'player';
}


/*document.getElementById("change-image").addEventListener("click", function (){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img src="/images/Chuckydoorspeach.png">');
    $('.chuckymain').append('<button id="fightButton" onclick=fightScene()>fight</button>');
    $('.chuckymain').append('<button id="escapeButton">escape</button>');
});*/

// function fightScene(){
//     $('.chuckymain').empty();
//     $('.chuckymain').append('<img src="/images/chuckyfirstfight.jpg">');
//
// }
