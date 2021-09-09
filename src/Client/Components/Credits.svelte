
<script>

import Icon from 'svelte-awesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

</script>

<div class="credits">
    <div>Web Design by PeaceLight</div>
    <div>Website developed by Enzey</div>
    <div>Build with <a href="https://svelte.dev/">Svelte</a></div>
    <div class="contacts">
        <h4>Contant Info</h4>
        <div><Icon data={faDiscord} scale="1"/> Enzey 3838</div>
        <div>work (at) enzey.net</div>
    </div>
</div>

<style>
    .credits {
        background-color: var(--color-accent-2);
        color: var(--color-web-white);
        padding: 2em;
        font-weight: bold;
        line-height: 1.8em;
    }
    .contacts {
        font-weight: normal;
        margin-left: 1em;
        margin-top: 1em;
    }
</style>
