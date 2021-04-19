let menuSound = new sound("/mp3/menuSound.mp3");
document.getElementById("resumeBtn").addEventListener("click", resumeButton);
document.getElementById("startBtn").addEventListener("click", startButton);
document.getElementById("exitBtn").addEventListener("click", exitButton);


function startButton(){
        location.href = "intro";
    }

function resumeButton() {
    location.href = "player";
}

function exitButton() {
 exit();
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

    function addPlayer(player) {
        menuMusic();
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
});



