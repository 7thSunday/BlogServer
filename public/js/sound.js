window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
var audio = null;
var isPlaying = false;
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
            source.start(0); //立即播放
            isPlaying = true;
        }
        function initSound(arrayBuffer) {
            context.decodeAudioData(arrayBuffer, function (buffer) { //解码成功时的回调函数
                audioBuffer = buffer;
                playSound();
            }, function (e) { //解码出错时的回调函数
                console.log('Error decoding file', e);
            });
        }
        function loadAudioFile(url) {
            var xhr = new XMLHttpRequest(); //通过XHR下载音频文件
            xhr.open('GET', url, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = function (e) { //下载完成
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

// pop window
let popWindow = document.getElementById("pop-window");
document.getElementById("pw-play").addEventListener("click",()=>{
    if(audio) return;
    audio = playBgm();
    popWindow.style.display = "none";
});
document.getElementById("pw-cancel").addEventListener("click",()=>{
    popWindow.style.display = "none";
});
// player controler
document.getElementById("bgm").addEventListener("click", ()=>{
    if(!audio) return
    if(isPlaying) {
        audio.suspend();
    } else {
        audio.resume();
    }
    isPlaying = !isPlaying;
})