const shareScreen = async () => {
    const mediaOptions = {
        video: true,
        audio: true,
        surfaceSwitching: "include"
    }
    try {
        mediaStream = await navigator.mediaDevices.getDisplayMedia(mediaOptions);
    } catch (error) {
        console.log("Share Screen error: ", error)
    }
}

shareScreenBtn.addEventListener("click", shareScreen);