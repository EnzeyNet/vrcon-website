import { writable } from 'svelte/store';

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

export const eventData = writable([]);
export const staffDetails = writable([]);
export const eventHostLinks = writable({});
export const currentTime = writable(getCurrentTime(30))

setInterval(
    () => {
        currentTime.set( getCurrentTime(30) )
    }, 26 * 1000
)

const parseDate = (str) => {
    const d = new Date(str)
    if (isNaN(d.valueOf())) {
        console.log('failed to parse date: ${str}')
    }
    return d
};

(async function() {
    try {
        const req = await fetch('data/eventsData.json')
        const events = await req.json()
        if (Array.isArray(events)) {
            for (const eventData of events) {
                eventData.timeStart = parseDate(eventData.timeStart)
                eventData.timeEnd = parseDate(eventData.timeEnd)
            }
            eventData.set(events)
        } else {
            console.log('failed to load event data')
        }
    } catch (e) {
        console.error(e)
    }
})();

(async function() {
    try {
        const req = await fetch('data/staffDetails.json')
        const data = await req.json()
        if (Array.isArray(data)) {
            staffDetails.set(data)
        } else {
            console.log('failed to load staff data')
        }
    } catch (e) {
        console.error(e)
    }
})();

(async function() {
    try {
        const req = await fetch('data/hostUserLinks.json')
        const data = await req.json()
        eventHostLinks.set(data)
    } catch (e) {
        console.error(e)
    }
})();
