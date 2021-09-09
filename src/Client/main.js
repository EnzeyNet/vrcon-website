import App from './App.svelte';

if (location?.protocol?.indexOf('http:') === 0) {
    if (location?.hostname !== 'localhost') {
        location.replace('https://' + location.hostname + location.pathname)
        console.log('HTTP to HTTPS redirect running')
    } else {
        console.log('not redirecting dev to https')
    }
}

const app = new App({
	target: document.body,
	props: {
		name: 'vrcon'
	}
});

export default app;
