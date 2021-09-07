<script>
    import { staffDetails } from '../dataStore.js'

    let userData = []
    staffDetails.subscribe(value => {
        userData = value;
    });
</script>

<div class="staff-list container">
    <h2>Contacts</h2>

    <div class="staff-user-details">
        {#each Array.from(userData) as user}
            <div class="staff-info">
                <div>
                    <div class="staff-user-name">{user.name}</div>
                    <div>{user.email}</div>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    h2 {
        padding: 1em 0 0 0;
        margin: 0;
        font-size: 2em;
        font-weight: bold;
        color: var(--color-accent-1)
    }
    .staff-list {
        color: var(--color-web-dark)
    }
    .staff-user-details {
        padding: 0 0 2em 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .staff-info {
        padding: 2em 2em 0 0;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        white-space: nowrap;
    }
    .staff-info img {
        height: 3em;
        width: 3em;
        margin: 0 1em 0 0;
        border-radius: 30%;
    }
    .staff-user-name {
        font-weight: bold;
    }
</style>
