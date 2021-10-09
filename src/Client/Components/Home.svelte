<script>
    import SplashCard from './SplashCard.svelte'
    import StreamCard from './StreamCard.svelte'
    import WorldListCard from './WorldListCard.svelte'
    import ScheduleCard from './ScheduleCard.svelte'
    import SpecialEventDetails from './SpecialEventDetails.svelte'
    import AboutCard from './AboutCard.svelte'
</script>

<div>
    <SplashCard />
    <div id="card-stream">
        <StreamCard />
    </div>
    <div id="card-events">
        <ScheduleCard />
    </div>
    <div id="special-event-details">
        <SpecialEventDetails />
    </div>
    <div id="card-worldlist">
        <WorldListCard />
    </div>
    <div id="card-about">
        <AboutCard />
    </div>
</div>

<style>
    #special-event-details {
        background-color: black;
    }
</style>
