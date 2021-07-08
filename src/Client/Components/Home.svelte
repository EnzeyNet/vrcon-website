<script>
    import SplashCard from './SplashCard.svelte'
    import StreamCard from './StreamCard.svelte'
    import WorldListCard from './WorldListCard.svelte'
    import ScheduleCard from './ScheduleCard.svelte'
</script>

<div class="guild-list">
    <SplashCard />
    <StreamCard />
    <ScheduleCard />
    <WorldListCard />
    <h2>Welcome to VRCon</h2>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <img class="img-fluid" alt="connie welcome" src="images/connieposter.png" />
            </div>
            <div class="col-sm-6 col-md-7 col-lg-8 col-xl-9">
                <p>What is VRCon</p>
                <p>Our goal is to overcome the bounds of reality, and celebrate with entertainers and creators what makes VR so amazing! Let's work together to make the worlds most safe and accessible convention straight from the comfort of our own home!</p>
                <p>VRCon 2021 aims to celebrate the diverse communities in VRChat. Everything from RP to exploring your dance moves. There is a community for almost everything and everyone.</p>
            </div>
            <div>
                <p>VRCon events will run from September 9 to 12</p>
                <p>All Sign-ups will be closed after August 11th</p>
            </div>
        </div>
    </div>
    <div class="socialsFooter">
        <div>Keep up to date with the latest news and events on our discord</div>
        <div>
            <a class="socialsLink" href="https://discord.com/channels/687897964290900044/687904257319632915/851542894534983760">
                <img class="socials" alt="VRCon Discord" src="images/app_icon_discord.png" />
                <div>Discord</div>
            </a>
        </div>
        <div>
            <a class="socialsLink" href="https://twitter.com/VRCon_Official">
                <img class="socials" alt="VRCon Twitter" src="images/app_icon_twitter.png" />
                <div>Twitter</div>
            </a>
        </div>
        <div>
            <a class="socialsLink" href="https://www.twitch.tv/vrconlive">
                <img class="socials" alt="VRCon Twitch" src="images/app_icon_twitch.png" />
                <div>Twitch</div>
            </a>
        </div>
        <div>
            <a class="socialsLink" href="https://www.tiktok.com/tag/vrcon">
                <img class="socials" alt="VRCon TikTok" src="images/app_icon_tiktok.png" />
                <div>TikTok</div>
            </a>
        </div>
    </div>
</div>

<style>
    h2 {
        margin: 1em 0;
        font-size: 32px;
        text-align: center;
    }

    img.socials {
        height: 3em;
        width: 3em;
    }

    .socialsLink {
        display: flex;
        align-items: center;
        color: var(--color-web-white);
    }

    .socialsFooter {
        background-color: var(--color-accent-1);
        color: var(--color-web-white);
        padding: 2em;
    }
</style>
