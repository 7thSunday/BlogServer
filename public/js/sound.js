window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
var audio = null;
var isPlaying = false;
var bgm = document.querySelector(".bgm");
var bgmMini = document.querySelector(".bgm-mini");
// pop window
var popWindow = document.getElementById("pop-window");
document.getElementById("pw-play").addEventListener("click",()=>{
    if(audio) return;
    audio = playBgm();
    document.querySelector(".icon-pause").style.display = "inline";
    popWindow.style.display = "none";
    setAlpha0();
});
document.getElementById("pw-cancel").addEventListener("click",()=>{
    document.querySelector(".icon-play").style.display = "inline";
    popWindow.style.display = "none";
    setAlpha0();
});
// player controler
document.getElementById("bgm-ctrl").addEventListener("click", ()=>{
    if(!audio) {
        audio = playBgm();
    };
    if(isPlaying) {
        audio.suspend();
        document.querySelector(".icon-play").style.display = "inline";
        document.querySelector(".icon-pause").style.display = "none";
    } else {
        audio.resume();
        document.querySelector(".icon-play").style.display = "none";
        document.querySelector(".icon-pause").style.display = "inline";
    }
    isPlaying = !isPlaying;
});
// mini player
bgmMini.onmouseenter = ()=>{
    bgmMini.style.opacity = 0;
    bgm.classList.remove("bgm-hide");
}
// full player
bgm.onmouseleave = ()=>{
    setTimeout(()=>{
        bgmMini.style.opacity = 1;
        bgm.classList.add("bgm-hide");
    },1000);
}
// audio context
function playBgm() {
    try {
        var context = new window.AudioContext();;
        var source = null;
        var audioBuffer = null;
        function playSound() {
            source = context.createBufferSource();
            source.buffer = audioBuffer;
            source.loop = true;
            source.connect(context.destination);
            source.start(0); 
            isPlaying = true;
        }
        function initSound(arrayBuffer) {
            context.decodeAudioData(arrayBuffer, function (buffer) { 
                audioBuffer = buffer;
                playSound();
            }, function (e) { 
                console.log('Error decoding file', e);
            });
        }
        function loadAudioFile(url) {
            var xhr = new XMLHttpRequest(); 
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function (e) { 
                initSound(this.response);
            };
            xhr.send();
        }
        loadAudioFile('/media/1.mp3');
    } catch (e) {
        console.log('!Your browser does not support AudioContext');
    }
    return context;
} 
// add alpha=0 css class
function setAlpha0() {
    setTimeout(()=>{
        document.querySelector("#bgm-ctrl").classList.add("alpha0");
    },2000);
    setTimeout(()=>{
        bgm.classList.add("bgm-hide");
        bgmMini.style.opacity = 1;
    },2300)
}