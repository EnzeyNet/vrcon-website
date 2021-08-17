
const getCurrentTime = (precisionInSeconds) => {
    if (isNaN(precisionInSeconds) || precisionInSeconds < 0) {
        precisionInSeconds = 60
    }
    const debugTime = window.currentTime
    let time = Date.now()
    if (debugTime && debugTime instanceof Date) {
        time = debugTime.valueOf()
    }

    // round to the last 30 seconds
    let currentTime = Date.now()
    time -= time % (precisionInSeconds * 1000)

    return time
}

export { getCurrentTime }
