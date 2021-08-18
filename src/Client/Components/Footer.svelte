<script>

import Icon from 'svelte-awesome';
import {
    faDiscord,
    faYoutube,
    faTiktok,
    faTwitch,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons'

</script>

<div class="socialsFooter container-fluid">
    <div class="footer-section">
        <h3>Socials</h3>
        <div class="footer-list">
            <a class="socials-link" href="https://discord.com/channels/687897964290900044/687904257319632915/851542894534983760">
                <Icon data={faDiscord} scale="2"/>
                <div class="link-name">Discord</div>
            </a>
            <a class="socials-link" href="https://twitter.com/VRCon_Official">
                <Icon data={faTwitter} scale="2"/>
                <div class="link-name">Twitter</div>
            </a>
            <a class="socials-link" href="https://www.twitch.tv/vrconlive">
                <Icon data={faTwitch} scale="2"/>
                <div class="link-name">Twitch</div>
            </a>
            <a class="socials-link" href="https://www.tiktok.com/tag/vrcon">
                <Icon data={faTiktok} scale="2"/>
                <div class="link-name">TikTok</div>
            </a>
            <a class="socials-link" href="https://www.youtube.com/channel/UChw2aYpVo1N3aKzHfTmmGog">
                <Icon data={faYoutube} scale="2"/>
                <div class="link-name">YouTube</div>
            </a>
        </div>
    </div>


    <div class="logos">
        <div class="logo-vrchat">
            <div>Experience in</div>
            <img src="images/vrchat-logo.png" alt="VRChat logo"/>
        </div>
        <div class="logo-vrcon">
            <img src="images/vrcon-logo-bw.png" alt="VRCon logo"/>
        </div>
    </div>

</div>

<style>
    .socialsFooter {
        display: flex;
        flex-wrap: wrap;
        background-color: var(--color-accent-2);
        color: var(--color-web-white);
        padding: 2em;
    }

    .footer-section {
        display: flex;
        flex-direction: column;
    }

    .footer-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (min-width: 768px) {
        .footer-list {
            flex-direction: column;
            flex-wrap: nowrap;
        }
    }
    @media (min-width: 992px) {
        .footer-list {
            flex-wrap: nowrap;
        }
    }

    h3 {
        padding: 0;
        font-weight: bold;
        margin: 0 0 0.9em 0;
        font-size: 1.3em;
    }

    .socials-link {
        display: flex;
        align-items: center;
        color: var(--color-web-white);
        margin: 0 0 0.9em 0;
        width: 7em;
        font-size: 1.2em;
    }
    .socials-link:hover, .socials-link:focus {
        color: var(--color-web-dark);
    }
    .socials-link .link-name {
        margin-left: 0.6em;
    }

    .logos {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 1em 0 0 0;
        margin: 0 auto;
    }
    .logo-vrchat {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-self: center;
        width: 10em;
        margin: 0 2em 1em 2em;
    }
    .logo-vrchat img {
        width: 100%;
        margin-top: -0.3em;
    }

    .logo-vrcon {
        display: block;
        width: 7em;
        margin-bottom: 1rem;
        margin: 0 2em 1em 2em;
    }
    .logo-vrcon img {
        width: 100%;
    }
</style>
