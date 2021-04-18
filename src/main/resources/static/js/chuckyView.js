
$.ajax({
    type: 'GET',
    url: 'api/items',
    success: function(items){
        console.log('success', items);
    },
    error: function(){
        alert('Couldnt find any items');
    }
})

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
document.getElementById("change-image").addEventListener("click", changeImage);

function changeImage(){
    $('.chuckymain').empty();
    $('.chuckymain').append('<img class="chuckypic1"src="/images/Chuckydoorspeach.png">');
    $('.chuckymain').append('<button id="fightButtonChucky" onclick=fightButtonPress()>fight</button>');
    $('.chuckymain').append('<button id="escapeButtonChucky">escape</button>');
}

function fightButtonPress(){
   /* $('.chuckypic1').remove();*/
    $('.chuckymain').remove();
    $('body').append('<div class="chuckymain2"></div>');
    $('.chuckymain2').append('<img src="/images/chuckyitembox.jpg">');
    $('.chuckymain2').append('<img src="/images/priest.jpg">');
}

function getItemImages(){


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

