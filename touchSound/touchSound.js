function createAudioElement() {
    var audio = document.createElement('audio');
    audio.id = 'touchSound';
    
    
    var sourceMP3 = document.createElement('source');
    sourceMP3.src = 'pop-sound-effect-197846.mp3';
    sourceMP3.type = 'audio/mpeg';


    var sourceOGG = document.createElement('source');
    sourceOGG.src = 'pop-sound-effect-197846.mp3';
    sourceOGG.type = 'audio/ogg';

    audio.appendChild(sourceMP3);
    audio.appendChild(sourceOGG);

    document.body.appendChild(audio);
}

function addClickListener() {
    window.addEventListener('click', function() {
        var music = document.getElementById('touchSound');
        music.play();
    });
}

createAudioElement();
addClickListener();
