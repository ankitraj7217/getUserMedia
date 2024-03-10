const shareMicAndCameraBtn = document.querySelector("#share-mic-camera");
const showMyVideoBtn = document.querySelector("#show-video");
const stopMyVideoBtn = document.querySelector("#stop-video");
const changeScreenSizeBtn = document.querySelector("#change-ss");
const shareScreenBtn = document.querySelector("#share-screen");
const myVideoFeedEle = document.querySelector("#my-feed-video");
const videoWidth = document.querySelector("#vid-width");
const videoHeight = document.querySelector("#vid-height");

let stream = null;
let mediaStream = null;
const constraints = {
    audio: true,
    video: true
}

const getMicAndCamera = async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);   // returns a prmoise. Why? -> because future value depends on user either acceptiing or rejecting the request or not doing anything.
        console.log(stream)
        changeBtnBg(["green", "blue", "blue", "gray", "gray", "gray", "gray", "gray"])
    } catch (error) {
        // user denied access -> rejected promise
        console.log("User rejected: ", error)
    }
}

const showMyVideoFeed = () => {
    if (!stream) {
        alert("Stream still loading...");
        return;
    }
    myVideoFeedEle.srcObject = stream;
    const tracks = stream.getTracks();
    console.log("tracks: ", tracks);
    changeBtnBg(["green", "green", "blue", "blue", "blue", "gray", "gray", "blue"])
}

const stopMyVideoFeed = () => {
    if (!stream) {
        alert("Stream still loading...");
        return;
    }
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop())    // disassociates..not closes the video.
    changeBtnBg(["blue", "gray", "gray", "gray", "gray", "gray", "gray", "gray"])
}

shareMicAndCameraBtn.addEventListener("click", getMicAndCamera);
showMyVideoBtn.addEventListener("click", showMyVideoFeed);
stopMyVideoBtn.addEventListener("click", stopMyVideoFeed);
changeScreenSizeBtn.addEventListener("click", () => changeVideoSizeFunc(stream, videoWidth, videoHeight));
