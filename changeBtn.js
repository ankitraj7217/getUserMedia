const btnIds = ["share-mic-camera", "show-video", "stop-video", "change-ss",
                 "start-recording", "stop-recording", "play-recording", "share-screen"]

const btnEles = btnIds.map(ele => document.querySelector(`#${ele}`));

const changeBtnBg = (bgArr) => {
    bgArr.forEach((bg, idx) => {
        btnEles[idx].classList.remove('gray-bg');
        btnEles[idx].classList.remove('blue-bg');
        btnEles[idx].classList.remove('red-bg');
        btnEles[idx].classList.remove('green-bg');

        btnEles[idx].classList.add(`${bg}-bg`);
    })
}