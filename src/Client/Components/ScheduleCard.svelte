<script>
    import eventItems from '../data/eventsData';
    import userNameToVRChatProfile from '../data/hostUserLinks';

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

    const getVRChatUserLink = (hostName) => {
        return userNameToVRChatProfile.get(hostName)
    }
</script>

<div class="container">
    <h2>Schedule</h2>
    <div class="event-time-message">Event times are displayed in user local time</div>
    <div class="events">
    	{#each eventDays as eventDay}
    		<h4>{eventDay}</h4>
            {#each Array.from(eventsByDay.get(eventDay)) as event}
                <div class="event-listing {currentTime ? getClassTypeForEvent(event) : ''}">
                    <span class="event-time">
                        <div>{getLocalTime(event.timeStart)}</div>
                        {#if event.liveStreamHost}
                            <div class="event-stream-details">Streamed by</div>
                            <div class="event-stream-details">
                                <a href="{`https://twitch.tv/${event.liveStreamHost}`}">
                                    <span>{event.liveStreamHost}</span>
                                </a>
                            </div>
                        {/if}
                    </span>
                    <span class="event-spacer"></span>
                    <span class="event-name">
                        <div>{event.name}</div>
                        <div class="event-description">{event.description}</div>
                        <div class="event-joinable">
                            {#if event.hostedBy}
                                <div class="event-host-details">Hosted by {event.hostedBy}</div>
                            {/if}
                            {#if event.signUp}
                                <div class="event-host-details">Sign up <a href={event.signUp}>here</a> to join the event</div>
                            {/if}
                            {#if event.joinOn}
                                <div class="event-host-details">Join on <a href={getVRChatUserLink(event.joinOn)}>{event.joinOn}</a></div>
                            {/if}
                            {#if event.isQuestCompatible}
                                <div class="event-quest-compatible">Quest Supported</div>
                            {/if}
                        </div>
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
    .event-time-message {
        margin: 0.6em;
        color: var(--color-web-dark);
    }
    .events {
        padding: 0 0 2em 0;
        text-align: left;
        color: var(--color-web-dark)
    }

    .event-listing {
        display: flex;
        flex-wrap: nowrap;
        margin: 0 0 1.8em 0;
        border-radius: 15px;
    }
    .event-time {
        padding: 0.3em 0.6em;
        font-weight: bold;
        color: var(--color-web-dark);
        white-space: nowrap;
    }
    .event-spacer {
        margin: 0 0.1em;
        margin-top: 0.3em;
        height: 1.4em;
        border-right: 2px solid var(--color-web-dark);
        padding-top: 0.3em;
    }
    .event-name {
        padding: 0.3em 0.6em;
    }
    .event-stream-details {
        margin: 0.1em 0 0 0em;
        font-size: 0.8em;
        line-height: 1.1em;
        font-weight: normal;
        color: var(--color-web-dark);
    }
    .event-description {
        margin: 0.3em 0 0 0em;
        font-size: 0.9em;
        line-height: 1.1em;
        font-weight: normal;
    }
    .event-joinable {
        display: flex;
        flex-wrap: nowrap;
        font-size: 0.9em;
        margin: 0.3em 0 0.2em 0;
        line-height: 1.1em;
        font-weight: normal;
    }
    .event-quest-compatible {
        border-radius: 10px;
        padding: 0.3em 0.5em;
        margin: 0 0 0 1em;
        background-color: var(--color-web-dull);
        color: var(--color-accent-3);
    }
    .event-host-details {
        padding: 0.3em;
        margin: 0 0 0 1em;
    }

    .event-is-active {
        color: var(--color-accent-1);
        background-color: var(--color-accent-3);
        font-weight: bold;
    }
    .event-is-complete {
        opacity: 0.55;
    }
    .event-is-pending {

    }
</style>
