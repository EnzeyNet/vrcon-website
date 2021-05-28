<script>
    import pageRouter from 'page'
    import Welcome from './Components/Welcome.svelte'
    import EventsList from './Components/EventsList.svelte'
    import StaffList from './Components/StaffList.svelte'

    const baseUrl = document.querySelector('head base')?.getAttribute('href')
    const isNestedPath = baseUrl && baseUrl === location.href

    if (isNestedPath) {
        const bathPath = window.location.pathname.slice(0, -1)
        pageRouter.base(bathPath)
    }

    let routeComponent = null;
    let routeParams = {};
    pageRouter('/', (ctx) => {
        routeParams = ctx.params
        routeComponent = Welcome
    })
    pageRouter('/events/', (ctx) => {
        routeParams = ctx.params
        routeComponent = EventsList
    })
    pageRouter('/staff/', (ctx) => {
        routeParams = ctx.params
        routeComponent = StaffList
    })

    pageRouter.start();
</script>

<svelte:component this={routeComponent} {...routeParams} />

<style>
</style>
