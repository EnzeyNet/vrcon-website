<script>
    import eventItems from './eventsData';
    import OTM from '../lib/OneToManyMap';

    const eventsByDay = new OTM()
    for (const event of eventItems) {
        const localStartDay = event.timeStart.toLocaleDateString()
        eventsByDay.add(localStartDay, event)
    }

    let eventDays = Array.from(eventsByDay.keys())
    eventDays = eventDays.map((e) => new Date(e).valueOf())
    eventDays.sort()
    eventDays = eventDays.map((e) => new Date(e).toLocaleDateString())

    const getLocalTime = (date) => {
        let time = date.toLocaleTimeString()
        time = time.replace(':00 ',' ')
        const fourDigTime = /[0-9]{2}:[0-9]{2}/
        if (!fourDigTime.test(time)) {
            time = '0' + time
        }
        return time
    }
</script>

<div class="container">
    <h2>Schedule</h2>
    <div class="details">
    	{#each eventDays as eventDay}
    		<h4>{eventDay}</h4>
        	{#each Array.from(eventsByDay.get(eventDay)) as event}
                <div>
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
        color: var(--color-web-dark)
    }
    .event-name {
        color: var(--color-web-dark)
    }
</style>
