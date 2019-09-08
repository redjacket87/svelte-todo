import App from './App.svelte';
import {writable} from 'svelte/store';

const app = new App({
	target: document.body,
	props: {
		todos: writable([])
	}
});

export default app;
