var audioCtx, analyser, bufferLength, dataArray;
window.addEventListener('load', initAudio, false);
function initAudio() {
    try {
        window.audioCtx = window.AudioContext|| window.webkitAudioContext;
        audioCtx = new AudioContext();
        analyser = audioCtx.createAnalyser();
    }
    catch(e) {
        alert('Web Audio API is not supported in this browser');
    }
// load the audio file
    source = audioCtx.createBufferSource();
    var request = new XMLHttpRequest();
    request.open('GET', 'soundfiles/menuSound.mp3', true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
        var audioData = request.response;
        audioCtx.decodeAudioData(audioData, function(buffer) {
            source.buffer = buffer;
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
            source.loop = true;
            source.start(0);
        },function(e){"Error with decoding audio data" + e.err});
    }
    request.send(); }