
function addClickListener() {
    window.addEventListener('click', function() {
        var music = document.getElementById('touchSound');
        music.play();
    });
}

createAudioElement();
addClickListener();
