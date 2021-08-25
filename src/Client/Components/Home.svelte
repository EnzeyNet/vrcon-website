<script>
    import SplashCard from './SplashCard.svelte'
    import StreamCard from './StreamCard.svelte'
    import WorldListCard from './WorldListCard.svelte'
    import ScheduleCard from './ScheduleCard.svelte'
    import AboutCard from './AboutCard.svelte'
    import StaffCard from './StaffCard.svelte'
</script>

<div>
    <SplashCard />
    <div class="section-link" id="card-stream">
        <StreamCard />
    </div>
    <div class="section-link" id="card-events">
        <ScheduleCard />
    </div>
    <div class="section-link" id="card-worldlist">
        <WorldListCard />
    </div>
    <div class="section-link" id="card-about">
        <AboutCard />
    </div>
    <div class="section-link" id="card-contacts">
        <StaffCard />
    </div>
</div>

<style>
    .section-link {
        margin-top: -2.5em;
        padding-top: 2.5em;
    }
</style>
