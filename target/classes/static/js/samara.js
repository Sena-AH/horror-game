


setTimeout(function () {
    document.getElementById("samaraBase").src="/images/fight_1_samara.jpg";
    document.getElementById("statsAndButtons").append(
        "<button id=\"fightButton\"><img th:src=\"@{/images/fight_button.jpg}\"></button>"
    )
}, 3000);

