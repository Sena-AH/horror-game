let menuSound = new sound("/mp3/menuSound.mp3");
let scareSound = new sound("/mp3/scareScream.mp3");


document.getElementById("startBtn").addEventListener("click", introPath);
document.getElementById("resumeBtn").addEventListener("click", playerPath);
document.getElementById("exitBtn").addEventListener("click", exitButton);
getValue();
function getValue(){
   $('.playerDiv').append('<h3>Add username</h3>');
   $('.playerDiv').append('<p>Name:<input type="text" id="name"></p>');

}

/*startButton();
resumeButton();*/

/*document.getElementById("resumeBtn").addEventListener("click", resumeButton);
document.getElementById("startBtn").addEventListener("click", startButton);
document.getElementById("exitBtn").addEventListener("click", exitButton);*/

function introPath(){
    location.href = "intro";
}
function playerPath(){
    location.href = "player";
}

/*function startButton(){
    $('.indexMainDiv').append('<button id="startBtn" onclick= introPath()>Start</button>');
    }

function resumeButton() {

    $('.indexMainDiv').append('<button id="resumeBtn" onclick= playerPath()>Resume</button>');
}*/

function exitButton() {
    pauseMenuMusic();
    scarySound();
    $('.indexMainDiv').empty();
    $('.playerDiv').empty();
   /* $('.indexMainDiv').append('<button id="resumeBtn" onclick= playerPath()>Resume</button>');*/
    $('.indexMainDiv').append('<img class="exitImg" src="/images/scaryNun.jpg">');

}

function menuMusic(){
    menuSound.play();
}
function scarySound(){
    scareSound.play();
}
function pauseMenuMusic(){
   menuSound.stop();
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

// $(function () {
//     let $players = $('#players');
//     let $name = $('#name');
//
//     $.ajax({
//         type: 'Get',
//         url: 'api/players/',
//         success: function () {
//             console.log('success', players);
//             /*$.each(players, function (i, player) {*/
//                 addPlayer(player);
//           /*  })*/
//         },
//        /* error: function () {
//             alert('Could not find any players.');*/
//         /*}*/
//     });
//
//     function addPlayer(player) {
//
//         $players.append(
//             '<tr>'+ '<td><span class="addPlayer">' + player.name + '</span><input class="editPlayerName"></td>'+
//
//             '<td><span class="editPlayer" data-id="' + player.id + '"></span></td>' +
//             '<td><span class="saveEditPlayer" data-id="' + player.id + '"></span></td>' +
//             '</tr>'
//         );
//     }
startwithThis();
function startwithThis(){
    $.ajax({
        type: 'GET',
        url: 'api/player',
        success: function (player) {
            console.log('success', player);
        },
        error: function () {
            alert('Couldnt find any players or items');
        }
    });
}

document.getElementById('add-player').addEventListener("click", thisfunction);

function thisfunction(){
    menuMusic();

    let playerName = document.getElementById("name").value;
    console.log(playerName);
    let player ={
        name: playerName
    };
    console.log(player);
    $.ajax({
        type: 'POST',
        url: 'api/player/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(player),
        success: function () {
            // addPlayer(newPlayer);
            $('.playerDiv').empty();
            $('.playerDiv').append('<h3>Welcome '+playerName+'!</h3>');
            document.getElementById('add-player').remove();
            console.log("success");
        },
        error: function () {
            alert('Could not add your username.');
        }
    });
    document.getElementById("name").value="";
}

// $('#add-player').on('click', function testing(inputname) {
//     menuMusic();
//
//     let player = {
//         "name": "newname"
//         // document.getElementById('name').value
//     };
//     $.ajax({
//         type: 'POST',
//         url: 'api/players/',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         data: JSON.stringify(player),
//         success: function (newPlayer) {
//             // addPlayer(newPlayer);
//         },
//         error: function () {
//             alert('Could not add your username.');
//         }
//     });
//     document.getElementById("name").value="";
// });
    // $players.delegate('.editPlayer', 'click', function () {
    //     let $row = $(this).closest('tr');
    //     $row.find('input.name').val( $row.find('span.name').html() );
    //     $row.addClass('edit');
    // });
    // $players.delegate('.savePlayer', 'click', function () {
    //     let $row = $(this).closest('tr');
    //
    //     let player = {
    //         name: $row.find('input.name').val()
    //
    //     }
    //     $.ajax({
    //         type: 'PUT',
    //         url: 'api/animals/' + $(this).attr('data-id'),
    //         headers: {
    //             'Accept' : 'application/json',
    //             'Content-Type' : 'application/json'
    //         },
    //         data: JSON.stringify(player),
    //         success: function (newPlayer) {
    //             $row.find('span.name').html(player.name);
    //             addPlayer(newPlayer);
    //         },
    //         error: function () {
    //             alert('Could not change your animal');
    //         }
    //     });
    // });
// });



