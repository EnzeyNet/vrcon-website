<script>
    import Icon from 'svelte-awesome';
    import {
        faBars,
    } from '@fortawesome/free-solid-svg-icons'

	import RoutedContent from './RoutedContent.svelte'

    let isNavExpanded = false;
</script>

<main class="warm">
    <nav class="navbar navbar-expand-md">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
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
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/events/">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/staff/">Staff</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <RoutedContent />
</main>

<style>
    nav.navbar {
        background-color: var(--color-accent-3);
        color: var(--color-web-white);
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

    nav img {
        height: 2.5em;
    }
    a.nav-link {
        font-family: "Rubik", Roboto, sans-serif;
    }

</style>
