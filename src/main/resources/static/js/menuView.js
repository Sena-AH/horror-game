let menuSound = new sound("/mp3/menuSound.mp3");

document.getElementById("resumeBtn").addEventListener("click", resumeButton);
document.getElementById("startBtn").addEventListener("click", startButton);
document.getElementById("exitBtn").addEventListener("click", exitButton);

function introPath(){
    location.href = "intro";
}
function playerPath(){
    location.href = "player";
}
function exitPath(){
    exit(0);
}
function startButton(){
    $('.indexMainDiv').append('<button id="startBtn" onclick= introPath()>Start</button>');
    }

function resumeButton() {

    $('.indexMainDiv').append('<button id="resumeBtn" onclick= playerPath()>Resume</button>');
}

function exitButton() {
    $('.indexMainDiv').append('<button id="resumeBtn" onclick= exitPath()>Exit</button>');

}

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

    function addPlayer(player) {

        $players.append(
            '<tr>'+ '<td><span class="addPlayer">' + player.name + '</span><input class="editPlayerName"></td>'+'<tr>'
            /*'<td><span class="type noEdit">' + animal.type + '</span><input class="edit type"></td>' +
            '<td><button class="btn remove" data-id=' + animal.id + '>Ta bort</button></td>' +
            '<td><button class="btn editAnimal noEdit" data-id="' + animal.id + '">Ändra</button>' +
            '<button class="btn saveEdit edit" data-id="' + animal.id + '">Spara</button>' +
            '<button class="btn cancelEdit edit">Avbryt</button></td>' +
            '</tr>'*/
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
            alert('Det gick inte att spara ner ditt användarnamn');
        }
    });
});
    document.getElementById("name").value="";
});



