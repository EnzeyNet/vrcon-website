<script>
</script>

<div class="Worlds">
    <div class="container">
        <h2>World List</h2>

        <div class="WorldList">
            <a class="WorldCard" href="#bottom">
                <img alt="VRCon 2020 Day" src="images/Worlds/001.png" />
                <div class="WorldName">VRCon 2020 Day</div>
            </a>
            <a class="WorldCard" href="#bottom">
                <img alt="VRCon 2020 Night" src="images/Worlds/002.png" />
                <div class="WorldName">VRCon 2020 Night</div>
            </a>
            <a class="WorldCard" href="#bottom">
                <img alt="VRCon Confrence Room" src="images/Worlds/005.png" />
                <div class="WorldName">VRCon Confrence Room</div>
            </a>
            <a class="WorldCard" href="#bottom">
                <img alt="VRCon 2020 Stage" src="images/Worlds/004.png" />
                <div class="WorldName">VRCon 2020 Stage</div>
            </a>
            <a class="WorldCard" href="#bottom">
                <img alt="VRCon Billards" src="images/Worlds/003.png" />
                <div class="WorldName">VRCon Billards</div>
            </a>
        </div>
    </div>
</div>

<style>
    .Worlds {
        background-color: var(--color-web-dark);
        display: flex;
        flex-direction: column;
    }

    .WorldList {
        margin: 0 0 3em 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .WorldCard {
        position: relative;
        margin: 3.5em 3em 0 0;
        box-shadow: 3px 3px var(--color-accent-2);
    }
    .WorldName {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 1.3em;
        text-align: center;
        padding: 0.2em 0.2em;
        font-weight: bold;
        color: var(--color-web-white);
    }
    h2 {
        padding: 1em 0 0 0;
        margin: 0;
        font-size: 2em;
        font-weight: bold;
        color: var(--color-accent-3)
    }
</style>
