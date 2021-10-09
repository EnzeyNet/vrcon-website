<script>
    import { eventDetails, eventHostLinks, currentTime } from '../dataStore.js'

    let userNameToVRChatProfile = new Map()
    eventHostLinks.subscribe(value => {
        userNameToVRChatProfile = new Map(value);
    });

    let hostedEvents = []
    eventDetails.subscribe(value => {
        hostedEvents = Array.from(value).filter(event => !!event.liveStreamHost);
    });

    const getCurrentHostedStream = (currentTime) => {
        let currentStreamHost = null
        for (const event of hostedEvents) {
            console.log(event.timeStart)
            const eventStartTime = event.timeStart.valueOf()
            const eventEndTime = event.timeEnd.valueOf()
            if (eventStartTime <= currentTime && currentTime < eventEndTime) {
                return event
            }
        }
    }

    $: currentHostedEvent = getCurrentHostedStream($currentTime)
    eventDetails.subscribe(value => {
        currentHostedEvent = getCurrentHostedStream($currentTime)
    });

    const hostname = window.location.hostname

    // Video: https://www.youtube.com/watch?v=CTYUyBxQ9SU
    const refFrom = '' + window.location.protocol + '//' + hostname
    const youtubeVideoId = 'lx1w5JqLAbA'
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
    </div>
</div>

<style>
    .StreamCard {
        background-image: url('../images/webbing-dark.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;

        padding: 2em 0 calc(2em + 2em) 0;
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
        background: linear-gradient(0deg, hsl(204, 33%, 1%) 0%, rgba(0,0,0,0) 18%)
    }
    .contentBox {
        padding: 0.5em 0 3em 0;
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
