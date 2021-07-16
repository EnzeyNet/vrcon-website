<script>
    import Icon from 'svelte-awesome';
    import {
        faBars,
    } from '@fortawesome/free-solid-svg-icons'

    import Home from './Components/Home.svelte'
	//import RoutedContent from './RoutedContent.svelte'

    let isNavExpanded = false;
</script>

<main class="warm">
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <a class="navbar-brand" href="#top">
                <img src="images/vrcon_MK3-11.png" alt="VRCon logo"/>
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
                        <a class="nav-link" href="#card-schedule">Schedule</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#card-stream">Stream</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#card-worldlist">World List</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="nav-padding"></div>

    <Home />
</main>

<style>
    nav.navbar {
        background-color: var(--color-accent-2);
        color: var(--color-web-white);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%
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
    a {
        color: var(--color-web-dark)
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
        font-family: "Rubik", Roboto, sans-serif;
    }

</style>
