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
    <div class="section" id="card-stream">
        <StreamCard />
    </div>
    <div class="section" id="card-events">
        <ScheduleCard />
    </div>
    <div class="section" id="card-special-event-details">
        <SpecialEventDetails />
    </div>
    <div class="section" id="card-worldlist">
        <WorldListCard />
    </div>
    <div class="section" id="card-about">
        <AboutCard />
    </div>
</div>

<style>
    .section {
        margin-top: -2.5em;
        padding-top: 2.5em;
    }

    #card-special-event-details {
        background-color: black;
    }
</style>
