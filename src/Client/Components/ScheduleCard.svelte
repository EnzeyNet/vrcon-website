<script>
    import eventItems from './eventsData';
    import OTM from '../lib/OneToManyMap';
    import { getCurrentTime } from './helpers.js'

    const eventsByDay = new OTM()
    for (const event of eventItems) {
        const localStartDay = event.timeStart.toLocaleDateString()
        eventsByDay.add(localStartDay, event)
    }

    let eventDays = Array.from(eventsByDay.keys())
    eventDays = eventDays.map((e) => new Date(e).valueOf())
    eventDays.sort()
    eventDays = eventDays.map((e) => new Date(e).toLocaleDateString())

    let currentTime = getCurrentTime(30)
    setInterval(
        () => {
            currentTime = getCurrentTime(30)
            console.log(currentTime)
        }, 26 * 1000
    )

    const getLocalTime = (date) => {
        let time = date.toLocaleTimeString()
        time = time.replace(':00 ',' ')
        const fourDigTime = /[0-9]{2}:[0-9]{2}/
        if (!fourDigTime.test(time)) {
            time = '0' + time
        }
        return time
    }

    const getClassTypeForEvent = (event) => {
        if (!event) return
        console.log(event)

        const eventStartTime = event.timeStart.valueOf()
        const eventEndTime = event.timeEnd.valueOf()
        const bufferToStart = (3 * 60 * 1000)
        if (eventStartTime - bufferToStart < currentTime && currentTime < eventEndTime) {
            // Event in progress
            return 'event-is-active'
        } else if (eventStartTime < currentTime) {
            // Event is over
            return 'event-is-complete'
        } else {
            // Event has not begun
            return 'event-is-pending'
        }
    }
</script>

<div class="container">
    <h2>Schedule</h2>
    <div class="details">
    	{#each eventDays as eventDay}
    		<h4>{eventDay}</h4>
        	{#each Array.from(eventsByDay.get(eventDay)) as event}
                <div class='{currentTime ? getClassTypeForEvent(event) : ''}'>
                    <span class="event-time">{getLocalTime(event.timeStart)}</span>
                    <span class="event-spacer">|</span>
                    <span class="event-name">{event.name}</span>
                </div>
        	{/each}
    	{/each}
    </div>
</div>

<style>
    h2 {
        padding: 1em 0 0 0;
        margin: 0;
        font-size: 2em;
        font-weight: bold;
        color: var(--color-accent-1)
    }
    h4 {
        padding: 1.5em 0 1em 0;
        margin: 0;
        font-size: 1.4em;
        font-weight: bold;
        color: var(--color-accent-1)
    }
    .details {
        padding: 0 0 2em 0;
        text-align: left;
        color: var(--color-web-dark)
    }
    .event-time {
        font-weight: bold;
    }
    .event-name {
    }

    .event-is-active {
        color: var(--color-accent-1)
    }
    .event-is-complete {
        opacity: 0.55;
    }
    .event-is-pending {

    }
</style>
