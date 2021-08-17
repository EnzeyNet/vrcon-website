<script>
    import eventItems from './eventsData';
    import hostUserToProfileMap from './hostUserLinks';
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

    const getVRChatUserLink = (userName) => {
        if (userName) {
            const vrcProfileUrl = hostUserToProfileMap.get(userName)
            if (vrcProfileUrl) {
                return vrcProfileUrl
            }
        }
    }
</script>

<div class="container events">
    <h2>Schedule</h2>
    <div>
        {#each eventDays as eventDay}
            <h4>{eventDay}</h4>
            {#each Array.from(eventsByDay.get(eventDay)) as event}
                <div class="event-listing">
                    <span class="event-time">{getLocalTime(event.timeStart)}</span>
                    <span class="event-spacer"></span>
                    <span class="event-name">
                        <div>{event.name}</div>
                        {#if event.host}
                            <div class="event-host-details">Join on <a href={getVRChatUserLink(event.host)}>{event.host}</a></div>
                        {/if}
                    </span>
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
    .events {
        padding: 0 0 2em 0;
        text-align: left;
        color: var(--color-web-dark)
    }

    .event-listing {
        display: flex;
        flex-wrap: nowrap;
        margin: 0 0 0.6em 0;
    }
    .event-time {
        font-weight: bold;
        color: var(--color-web-dark)
    }
    .event-spacer {
        margin: 0 0.8em;
        height: 1.4em;
        border-right: 2px solid var(--color-web-dark);
    }
    .event-name {
        color: var(--color-web-dark)
    }
    .event-host-details {
        margin: 0.1em 0 0 1em;
        font-size: 0.9em;
        line-height: 1.1em;
    }

    .event-past {
        opacity: 0.6;
    }
    .event-active {
        color: var(--color-accent-3);
    }
    .event-active {

    }
</style>
