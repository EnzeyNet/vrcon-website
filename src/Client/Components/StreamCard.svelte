<script>
</script>

<div class="StreamCard">
    <div class="container">
        <div class="contentBox">
            <h2>Trailer/Stream</h2>
            <div class="stream"></div>
            <div>
                <h3>What is VRCon?</h3>
                <div class="desc">
                    <div class="title">"VRCon is a Community Celebration"</div>
                    <div>VRCon is built and designed as a way to celebrate and give back to the Communuty of Social VR, regardless of platform and game</div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .StreamCard {
        background: green;
        padding: 2em 0;
    }
    .contentBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5em 1em;
        background: var(--color-web-white);
        box-shadow: 3px 3px var(--color-accent-2);
    }
    .stream {
        margin: 1em 0;
        height: 200px;
        width: 500px;
        background-color: black;
    }
    .desc {
        padding: 0.5em 2em 1em 2em;
        text-align: center;
        font-size: 1.2em;
        color: var(--color-web-dark)
    }
    .title {
        color: hsl(215, 75%, 27%);
    }
    h2 {
        text-align: center;
    }
    h2, h3 {
        padding: 0;
        margin: 0;
        font-size: 2em;
        font-weight: bold;
        color: var(--color-accent-3)
    }
</style>
