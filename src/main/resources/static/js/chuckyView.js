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

$('.btnbackground').onclick.append('<img src=th:src="@{/images/Chuckydoorspeach.png}">');