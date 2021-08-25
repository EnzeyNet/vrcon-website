<script>
</script>

<div class="Worlds">
    <div class="container">
        <h2>World List</h2>

        <h3>2021</h3>
        <div class="WorldList">
            <a class="WorldCard" href="https://vrch.at/wrld_da7b0546-0855-492f-a910-9562d255e019">
                <img alt="VRCon Confrence Room" src="images/Worlds/005.png" />
                <div class="WorldName">VRCon Confrence Room</div>
            </a>
            <a class="WorldCard" href="https://vrch.at/wrld_ba4a03a2-26dd-4597-a5a5-924d795c4279">
                <img alt="VRCon Billards" src="images/Worlds/003.png" />
                <div class="WorldName">VRCon Billards</div>
            </a>
        </div>

        <h3>2020</h3>
        <div class="WorldList">
            <a class="WorldCard" href="https://vrch.at/wrld_56b13c26-6eef-4bfa-8f56-bfbb0e44e76a">
                <img alt="VRCon 2020 Day" src="images/Worlds/001.png" />
                <div class="WorldName">VRCon 2020 Day</div>
            </a>
            <a class="WorldCard" href="https://vrch.at/wrld_a182db1b-0b18-4be3-b40b-5d720c7c21b6">
                <img alt="VRCon 2020 Night" src="images/Worlds/002.png" />
                <div class="WorldName">VRCon 2020 Night</div>
            </a>
            <a class="WorldCard" href="https://vrch.at/wrld_e32e0265-d3a4-4482-8685-a96a34e4dc06">
                <img alt="VRCon 2020 Stage" src="images/Worlds/004.png" />
                <div class="WorldName">VRCon 2020 Stage</div>
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
        margin: 1em 0 0 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
    }
    .WorldCard {
        position: relative;
        margin: 0 3em 3.5em 0;
        max-width: 100%;
        box-shadow: 3px 3px var(--color-accent-2);
        color: var(--color-web-white);
    }
    .WorldCard > img {
        width: 100%;
    }
    .WorldCard:hover, .WorldCard:focus {
        box-shadow: 3px 3px var(--color-web-white);
        background-color: var(--color-web-dark);
    }
    .WorldCard:hover img, .WorldCard:focus img {
        opacity: 0.6;
    }

    .WorldName {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 1.4em;
        text-align: center;
        padding: 0.2em 0.2em;
        font-weight: bold;
        color: var(--color-web-white);
        text-shadow: 0.09em 0.08em var(--color-web-dark);
    }
    h2 {
        padding: 1em 0 0 0;
        margin: 0;
        font-size: 2em;
        font-weight: bold;
        color: var(--color-accent-3)
    }
    h3 {
        margin: 1em 0;
        padding: 0;
        font-size: 1.6em;
        font-weight: bold;
    }
</style>
