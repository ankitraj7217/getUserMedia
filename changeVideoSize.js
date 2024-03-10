const changeVideoSizeFunc = (stream, videoWidth, videoHeight) => {
    stream.getVideoTracks().forEach((track) => {
        const trackCapabilities = track.getCapabilities();
        try {
            const vConstraints = {
                width: {exact: videoWidth < trackCapabilities.width.max ? videoWidth : trackCapabilities.width.max},
                height: {exact: videoHeight < trackCapabilities.height.max ? videoHeight : trackCapabilities.height.max}
            }
            track.applyConstraints(vConstraints);
        } catch (error) {
            console.log("Video Size unable to change")
        }
    })
}