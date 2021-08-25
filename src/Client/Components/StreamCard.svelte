<script>
    import eventItems from '../data/eventsData';
    import { getCurrentTime } from './helpers.js'

    const hostname = location.hostname
    const hostedEvents = Array.from(eventItems).filter(event => !!event.liveStreamHost)
    const getCurrentHostedStream = () => {
        let currentStreamHost = null
        for (const event of hostedEvents) {
            const eventStartTime = event.timeStart.valueOf()
            const eventEndTime = event.timeEnd.valueOf()
            if (eventStartTime <= currentTime && currentTime < eventEndTime) {
                return event
            }
        }
    }

    let currentTime = getCurrentTime(30)
    let currentHostedEvent = getCurrentHostedStream()
    setInterval(
        () => {
            currentTime = getCurrentTime(30)
            currentHostedEvent = getCurrentHostedStream()
        }, 26 * 1000
    )

    // Video: https://www.youtube.com/watch?v=CTYUyBxQ9SU
    const refFrom = '' + window.location.protocol + '//' + window.location.hostname
    const youtubeVideoId = 'CTYUyBxQ9SU'
    const youtubeIntroLink = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&origin=${refFrom}`

</script>

<div class="StreamCard">
    <div class="backgroundFade"></div>
    <div class="contentBox">
        {#if !!currentHostedEvent}
            <h2 class="event-title">{currentHostedEvent.name}</h2>
            <iframe
                title="VRCon intro video"
                src="{`https://player.twitch.tv/?channel=${currentHostedEvent.liveStreamHost}&parent=${hostname}&autoplay=true`}"
                type="text/html"
                width="640"
                height="360"
                frameborder="0"
                allowfullscreen="true"
            ></iframe>
        {:else}
            <iframe
                title="VRCon intro video"
                src={youtubeIntroLink}
                type="text/html"
                width="640"
                height="360"
                frameborder="0"
            ></iframe>
        {/if}
        <h2>
            {#if !!currentHostedEvent}
                <span>Live</span>
            {:else}
                <span>Trailer</span>
            {/if}
        </h2>
        <div class="stream"></div>
    </div>
</div>

<style>
    .StreamCard {
        background-image: url('../images/webbing.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;

        padding: 2em 0 calc(2em + 2em) 0;
        margin-bottom: calc(-2em + -2.5em);
        display: flex;
        position: relative;
        justify-content: center;
    }
    .backgroundFade {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, hsl(204, 33%, 97%) 0%, rgba(0,0,0,0) 18%)
    }
    .contentBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--color-web-white);
        padding: 1.5em 2em;
        box-shadow: 3px 3px var(--color-accent-2);
        z-index: 0;
    }
    .stream {
        margin: 1em 0;
        height: 200px;
        width: 500px;
        background-color: black;
        display: none;
    }
    h2 {
        padding: 0;
        margin: 0.5em 0 0 0;
        font-size: 2em;
        font-weight: bold;
        color: var(--color-accent-1)
    }
    .event-title {
        margin: 0 0 0.5em 0;
    }
    iframe {
        width: min(640px, 80vw);
        height: min(360px, 45vw);
    }
</style>
