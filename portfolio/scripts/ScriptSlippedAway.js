// const audioFiles = [
//     document.getElementById("audio1"),
//     document.getElementById("audio2")
// ];

// let currentTrack = 0;
// let isPlaying = true;

// function playNextTrack() {
//     // Switch between the two tracks
//     currentTrack = (currentTrack + 1) % audioFiles.length;
//     audioFiles[currentTrack].play();
// }

// // Set up event listeners to switch tracks when one ends
// audioFiles[0].addEventListener("ended", playNextTrack);
// audioFiles[1].addEventListener("ended", playNextTrack);

// // Start playing the first track
// audioFiles[0].play();

// // Mute/Unmute functionality
// const toggleButton = document.getElementById("music-toggle");

// toggleButton.addEventListener("click", () => {
//     isPlaying = !isPlaying;
//     if (isPlaying) {
//         audioFiles[currentTrack].play();
//         toggleButton.textContent = "⁃"; // Speaker ON icon
//     } else {
//         audioFiles.forEach(audio => audio.pause());
//         toggleButton.textContent = "‣"; // Speaker OFF icon
//     }
// });

const audioFiles = [
    document.getElementById("audio1"),
    document.getElementById("audio2")
];

let currentTrack = 0;
let isPlaying = false; // Start as false since autoplay might be blocked

function playNextTrack() {
    // Switch between the two tracks
    currentTrack = (currentTrack + 1) % audioFiles.length;
    audioFiles[currentTrack].play();
}

// Set up event listeners to switch tracks when one ends
audioFiles.forEach(audio => {
    audio.addEventListener("ended", playNextTrack);
});

// 🎵 **Autoplay Fix**
document.addEventListener("DOMContentLoaded", () => {
    function enableAudio() {
        if (!isPlaying) {
            isPlaying = true;
            audioFiles[0].play().catch(error => console.log("Autoplay blocked:", error));
        }
        document.removeEventListener("click", enableAudio);
    }

    // Wait for a user click to start music (required for many browsers)
//document.addEventListener("click", enableAudio);
});

// 🔊 **Mute/Unmute Button**
const toggleButton = document.getElementById("music-toggle");

toggleButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        audioFiles[currentTrack].play();
        toggleButton.textContent = "⁃"; // Speaker ON icon
    } else {
        audioFiles.forEach(audio => audio.pause());
        toggleButton.textContent = "‣"; // Speaker OFF icon
    }
});


