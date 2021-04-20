let menuSound = new sound("/mp3/menuSound.mp3");

document.getElementById("startBtn").addEventListener("click", introPath);
document.getElementById("resumeBtn").addEventListener("click", playerPath);
document.getElementById("exitBtn").addEventListener("click", $exit);
startButton();
resumeButton();
exitButton();
/*document.getElementById("resumeBtn").addEventListener("click", resumeButton);
document.getElementById("startBtn").addEventListener("click", startButton);
document.getElementById("exitBtn").addEventListener("click", exitButton);*/

function introPath(){
    location.href = "intro";
}
function playerPath(){
    location.href = "player";
}
function exitPath(){
    exit(0);
}
/*function startButton(){
    $('.indexMainDiv').append('<button id="startBtn" onclick= introPath()>Start</button>');
    }

function resumeButton() {

    $('.indexMainDiv').append('<button id="resumeBtn" onclick= playerPath()>Resume</button>');
}

function exitButton() {
    $('.indexMainDiv').append('<button id="resumeBtn" onclick= exitPath()>Exit</button>');

}*/

function menuMusic(){
    menuSound.play();
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

$(function () {
    let $players = $('#players');
    let $name = $('#name');

    $.ajax({
        type: 'Get',
        url: 'api/players/',
        success: function () {
            console.log('success', players);
            /*$.each(players, function (i, player) {*/
                addPlayer(player);
          /*  })*/
        },
        error: function () {
            alert('Could not find any players.');
        }
    });

    function addPlayer(player) {

        $players.append(
            '<tr>'+ '<td><span class="addPlayer">' + player.name + '</span><input class="editPlayerName"></td>'+

            '<td><button class="btn editPlayer " data-id="' + player.id + '">Change</button>' +
            '<button class="btn saveEditPlayer" data-id="' + player.id + '">Save</button>' +
            '</tr>'
        );
    }

$('#add-player').on('click', function () {
    menuMusic();
    let player = {
        name: $name.val()
    };

    $.ajax({
        type: 'POST',
        url: 'api/players/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(player),
        success: function (newPlayer) {
            addPlayer(newPlayer);
        },
        error: function () {
            alert('Could not save your username.');
        }
    });
});
    document.getElementById("name").value="";
});



