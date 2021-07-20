<script>
    const refFrom = '' + window.location.protocol + '//' + window.location.hostname
    const youtubeVideoId = 'CTYUyBxQ9SU'
    const youtubeIntroLink = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&origin=${refFrom}`
</script>

<div class="StreamCard">
    <!-- Video: https://www.youtube.com/watch?v=CTYUyBxQ9SU -->
    <div class="backgroundFade"></div>
    <div class="contentBox">
        <iframe
            id="vrconIntroVideo"
            title="VRCon intro video"
            type="text/html"
            width="640"
            height="360"
            src={youtubeIntroLink}
            frameborder="0"
        ></iframe>
        <h2>Trailer/Stream</h2>
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
        margin: 0;
        font-size: 2em;
        font-weight: bold;
        color: var(--color-accent-3)
    }
</style>
