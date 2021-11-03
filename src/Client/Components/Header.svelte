<script>
    import Icon from 'svelte-awesome';
    import {
        faBars,
    } from '@fortawesome/free-solid-svg-icons'

	//import RoutedContent from './RoutedContent.svelte'

    let isNavExpanded = false;
</script>

<div>
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <a class="navbar-brand" href="#top">
                <img src="images/vrcon-logo-color.png" alt="VRCon logo"/>
            </a>

            <button
                class="navbar-toggler"
                type="button"
                aria-expanded="{isNavExpanded}"
                aria-label="Toggle navigation"

                on:click={() => {isNavExpanded = !isNavExpanded}}
            >
                <Icon data={faBars} scale="1"/>
            </button>
            <div class="collapse navbar-collapse {isNavExpanded ? 'show' : ''}" id="navbarNavAltMarkup">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#card-stream">Trailer</a>
                    </li>
                    <!--
                    <li class="nav-item">
                        <a class="nav-link" href="#card-events">Schedule</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#card-special-event-details">Event</a>
                    </li>
                    -->
                    <li class="nav-item">
                        <a class="nav-link" href="#card-worldlist">World List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#card-about">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="nav-padding"></div>
</div>

<style>
    nav.navbar {
        background-color: var(--color-accent-2);
        color: var(--color-web-white);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 10;
    }
    nav.navbar .navbar-nav .nav-item {
        margin: 0 1em;
    }

    nav .container-fluid {
        margin-bottom: -1.5em;
    }
    nav .navbar-collapse {
        margin-top: -1.5em;
    }
    nav .navbar-toggler {
        margin-top: -0.75em;
    }
    nav .navbar-collapse.show  {
        margin-top: unset;
        padding-bottom: 1.5em;
    }

    .nav-padding {
        height: 2.5em;
    }
    nav img {
        height: 2.5em;
    }
    .navbar-brand {
        padding: 0;
    }
    a.nav-link {
        font-size: 1.15em;
        font-family: "Rubik", Roboto, sans-serif;
        color: var(--color-web-dark);
    }
    a.nav-link:hover, a.nav-link:focus {
        color: var(--color-web-white);
    }

</style>
