<script>
    import pageRouter from 'page'
    import Welcome from './Components/Welcome.svelte'
    import EventsList from './Components/EventsList.svelte'
    import StaffList from './Components/StaffList.svelte'

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
