const recordedVideoFeedEle = document.querySelector("#recorded-feed-video");
const startRecordingBtn = document.querySelector("#start-recording");
const stopRecordingBtn = document.querySelector("#stop-recording");
const playRecordingBtn = document.querySelector("#play-recording");

let mediaRecorder;
const recordedBlobs = [];

const startRecording = () => {
    mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.ondataavailable = (e) => {
        recordedBlobs.push(e.data);
    }
    console.log("start recording");
    mediaRecorder.start();
}

const stopRecording = () => {
    console.log("stop recording")
    mediaRecorder.stop();
}

const playRecording = () => {
    const buffers = new Blob(recordedBlobs);
    const videoURL = URL.createObjectURL(buffers, { type: 'video/webm' });
    recordedVideoFeedEle.src = videoURL;
    recordedVideoFeedEle.controls = true;
    recordedVideoFeedEle.play();
}

startRecordingBtn.addEventListener("click", startRecording);
stopRecordingBtn.addEventListener("click", stopRecording);
playRecordingBtn.addEventListener("click", playRecording);